// Smoke tests — no npm dependencies, runs with `node --test tests/smoke.test.js`.
// Validates: schema conformance, HTML shim structure, JS syntax of shared/render.js.

const { test } = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');

const VALID_SECTION_TYPES = new Set([
  'level-cards', 'concept-grid', 'info-cards', 'interactive',
  'code-showcase', 'exercises', 'placeholders', 'quiz', 'resources', 'checklist'
]);

const VALID_INTERACTIVE_SUBTYPES = new Set(['regex-tester', 'type-specimen']);

const VALID_DIFFICULTIES = new Set(['easy', 'medium', 'hard']);

const PAGES = ['index', 'beginner', 'intermediate', 'advanced'];

const SECTIONS_REQUIRING_ITEMS = new Set([
  'level-cards', 'concept-grid', 'info-cards',
  'exercises', 'placeholders', 'quiz', 'resources', 'checklist'
]);

function loadTopic(dataPath) {
  const code = fs.readFileSync(dataPath, 'utf-8');
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox, { filename: dataPath });
  return sandbox.window.TOPIC;
}

function findTopics() {
  const topics = [];
  for (const entry of fs.readdirSync(ROOT, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith('.')) continue;
    const dataPath = path.join(ROOT, entry.name, 'site', 'data.js');
    if (fs.existsSync(dataPath)) topics.push(entry.name);
  }
  return topics;
}

// ============================================================
// shared/ files
// ============================================================
test('shared/SCHEMA.md exists', () => {
  assert.ok(fs.existsSync(path.join(ROOT, 'shared', 'SCHEMA.md')));
});

test('shared/styles.css exists', () => {
  assert.ok(fs.existsSync(path.join(ROOT, 'shared', 'styles.css')));
});

test('shared/render.js exists and parses as valid JavaScript', () => {
  const renderPath = path.join(ROOT, 'shared', 'render.js');
  assert.ok(fs.existsSync(renderPath));
  const code = fs.readFileSync(renderPath, 'utf-8');
  // vm.Script constructor throws on syntax errors
  new vm.Script(code, { filename: 'render.js' });
});

// ============================================================
// CLAUDE.md / _to_claude.md
// ============================================================
test('CLAUDE.md exists at root', () => {
  assert.ok(fs.existsSync(path.join(ROOT, 'CLAUDE.md')));
});

test('_to_claude.md exists at root', () => {
  assert.ok(fs.existsSync(path.join(ROOT, '_to_claude.md')));
});

// ============================================================
// per topic
// ============================================================
const topics = findTopics();

test('at least one topic exists', () => {
  assert.ok(topics.length > 0, 'No topics with data.js found');
});

for (const topicId of topics) {
  const dataPath = path.join(ROOT, topicId, 'site', 'data.js');

  test(`${topicId}: data.js parses & defines window.TOPIC`, () => {
    const topic = loadTopic(dataPath);
    assert.ok(topic, 'window.TOPIC not defined');
    assert.strictEqual(typeof topic, 'object');
  });

  test(`${topicId}: required top-level fields`, () => {
    const topic = loadTopic(dataPath);
    assert.strictEqual(topic.id, topicId, `id mismatch — folder "${topicId}" but topic.id "${topic.id}"`);
    assert.ok(typeof topic.title === 'string' && topic.title.length > 0, 'title missing or empty');
    assert.ok(Array.isArray(topic.pages), 'pages should be array');
    assert.deepStrictEqual([...topic.pages].sort(), [...PAGES].sort(), `pages should list all 4 levels, got: ${topic.pages}`);
  });

  test(`${topicId}/_to_claude.md exists`, () => {
    const p = path.join(ROOT, topicId, '_to_claude.md');
    assert.ok(fs.existsSync(p), `Missing topic-level _to_claude.md at ${topicId}/`);
  });

  for (const pageId of PAGES) {
    test(`${topicId}/${pageId}: page object has required fields`, () => {
      const topic = loadTopic(dataPath);
      const page = topic[pageId];
      assert.ok(page, `Page "${pageId}" missing on topic ${topicId}`);
      assert.ok(page.headline, `headline missing on ${topicId}/${pageId}`);
      assert.ok(typeof page.headline.plain === 'string' || typeof page.headline.gradient === 'string', 'headline needs plain or gradient');
      assert.ok(typeof page.intro === 'string' && page.intro.length > 0, 'intro missing or empty');
      assert.ok(Array.isArray(page.sections), 'sections not array');
      assert.ok(page.sections.length > 0, `${pageId}: page has no sections`);
    });

    test(`${topicId}/${pageId}: all sections have valid types`, () => {
      const topic = loadTopic(dataPath);
      for (const section of topic[pageId].sections) {
        assert.ok(VALID_SECTION_TYPES.has(section.type),
          `Unknown section type "${section.type}" on ${topicId}/${pageId}`);
        if (section.type === 'interactive') {
          assert.ok(VALID_INTERACTIVE_SUBTYPES.has(section.subtype),
            `Unknown interactive subtype "${section.subtype}" on ${topicId}/${pageId}`);
        }
        if (SECTIONS_REQUIRING_ITEMS.has(section.type)) {
          assert.ok(Array.isArray(section.items) && section.items.length > 0,
            `${section.type} on ${topicId}/${pageId} has no items`);
        }
      }
    });

    test(`${topicId}/${pageId}: quiz items have valid options & correct answer`, () => {
      const topic = loadTopic(dataPath);
      for (const section of topic[pageId].sections) {
        if (section.type !== 'quiz') continue;
        for (const q of section.items) {
          assert.ok(q.question, `quiz question missing on ${topicId}/${pageId}`);
          assert.ok(Array.isArray(q.options) && q.options.length >= 2, 'quiz needs 2+ options');
          assert.ok(q.options.some(o => o.value === q.correct),
            `correct value "${q.correct}" not in options on ${topicId}/${pageId}`);
        }
      }
    });

    test(`${topicId}/${pageId}: exercises have valid difficulty`, () => {
      const topic = loadTopic(dataPath);
      for (const section of topic[pageId].sections) {
        if (section.type !== 'exercises') continue;
        for (const ex of section.items) {
          if (ex.difficulty) {
            assert.ok(VALID_DIFFICULTIES.has(ex.difficulty),
              `unknown difficulty "${ex.difficulty}" on ${topicId}/${pageId}`);
          }
          assert.ok(ex.title, 'exercise title missing');
          assert.ok(ex.task, 'exercise task missing');
          assert.ok(ex.solution, 'exercise solution missing');
        }
      }
    });

    test(`${topicId}/${pageId}: placeholders have issue payloads`, () => {
      const topic = loadTopic(dataPath);
      for (const section of topic[pageId].sections) {
        if (section.type !== 'placeholders') continue;
        for (const p of section.items) {
          assert.ok(p.issueTitle, 'placeholder issueTitle missing');
          assert.ok(p.issueBody, 'placeholder issueBody missing');
          assert.ok(p.labels, 'placeholder labels missing');
        }
      }
    });

    test(`${topicId}/${pageId}: resources have URL and title`, () => {
      const topic = loadTopic(dataPath);
      for (const section of topic[pageId].sections) {
        if (section.type !== 'resources') continue;
        for (const r of section.items) {
          assert.ok(r.url && r.url.startsWith('http'), `resource url invalid: ${r.url}`);
          assert.ok(r.title, 'resource title missing');
        }
      }
    });

    test(`${topicId}/${pageId}: checklist items have unique ids`, () => {
      const topic = loadTopic(dataPath);
      for (const section of topic[pageId].sections) {
        if (section.type !== 'checklist') continue;
        const ids = section.items.map(i => i.id);
        assert.strictEqual(new Set(ids).size, ids.length, `duplicate checklist ids in ${topicId}/${pageId}`);
        for (const id of ids) assert.ok(id, 'checklist item missing id');
      }
    });

    const htmlPath = path.join(ROOT, topicId, 'site', `${pageId}.html`);
    test(`${topicId}/${pageId}.html: shim exists with correct structure`, () => {
      assert.ok(fs.existsSync(htmlPath), `Missing HTML: ${htmlPath}`);
      const html = fs.readFileSync(htmlPath, 'utf-8');
      assert.match(html, new RegExp(`data-page="${pageId}"`), `data-page="${pageId}" missing or wrong`);
      assert.match(html, /shared\/styles\.css/, 'shared/styles.css link missing');
      assert.match(html, /<script[^>]+src="data\.js"/, 'data.js script tag missing');
      assert.match(html, /shared\/render\.js/, 'shared/render.js script tag missing');
      // Shims should be small — guard against accidental old-style fat HTML
      assert.ok(html.length < 1000, `Shim should be small (~500 bytes), got ${html.length}`);
    });
  }
}
