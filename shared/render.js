// ====== shared/render.js ======
// Generic renderer for the Topic Schema. See shared/SCHEMA.md.
//
// Each topic page is a thin shim that:
//   1. sets <body data-page="index|beginner|intermediate|advanced">
//   2. loads the topic's data.js (defining window.TOPIC)
//   3. loads this file
//
// This script then renders the entire page from window.TOPIC[pageId].

(function () {
  'use strict';

  const DEFAULT_REPO = 'https://github.com/JereIsThere/claude-learnings';

  // ---------- helpers ----------
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[c]);
  }

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) {
      for (const k in attrs) {
        if (k === 'class') node.className = attrs[k];
        else if (k === 'html') node.innerHTML = attrs[k];
        else if (k.startsWith('on') && typeof attrs[k] === 'function') {
          node.addEventListener(k.slice(2).toLowerCase(), attrs[k]);
        } else if (attrs[k] != null) {
          node.setAttribute(k, attrs[k]);
        }
      }
    }
    if (children) {
      const arr = Array.isArray(children) ? children : [children];
      for (const c of arr) {
        if (c == null) continue;
        node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
      }
    }
    return node;
  }

  // ---------- theme ----------
  function initTheme() {
    const saved = localStorage.getItem('lc-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
  }

  function buildThemeToggle() {
    const cur = document.documentElement.getAttribute('data-theme') || 'dark';
    const btn = el('button', {
      class: 'theme-toggle', id: 'theme-toggle', title: 'Theme wechseln',
      'aria-label': 'Theme wechseln'
    });
    btn.textContent = cur === 'dark' ? '☀' : '☾';
    btn.addEventListener('click', () => {
      const c = document.documentElement.getAttribute('data-theme');
      const n = c === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', n);
      btn.textContent = n === 'dark' ? '☀' : '☾';
      localStorage.setItem('lc-theme', n);
    });
    return btn;
  }

  // ---------- header ----------
  function buildHeader(topic, currentPage) {
    const navLinks = [
      { href: 'index.html', label: 'Übersicht', page: 'index' },
      { href: 'beginner.html', label: 'Beginner', page: 'beginner' },
      { href: 'intermediate.html', label: 'Intermediate', page: 'intermediate' },
      { href: 'advanced.html', label: 'Advanced', page: 'advanced' }
    ];
    return el('header', { class: 'site-header' }, [
      el('div', { class: 'header-inner' }, [
        el('a', { href: 'index.html', class: 'logo' }, [
          el('span', { class: 'logo-dot' }), topic.title
        ]),
        el('nav', { class: 'nav' }, [
          ...navLinks.map(l => el('a', {
            href: l.href, class: l.page === currentPage ? 'active' : ''
          }, l.label)),
          buildThemeToggle()
        ])
      ])
    ]);
  }

  // ---------- hero ----------
  function buildHero(page) {
    const eyebrowClass = 'eyebrow' + (page.badge ? ' ' + escapeHtml(page.badge) : '');
    const head = page.headline || {};
    return el('section', { class: 'hero' }, [
      page.eyebrow ? el('div', { class: eyebrowClass }, page.eyebrow) : null,
      el('h1', { html: escapeHtml(head.plain || '') + (head.gradient ? ' <span class="gradient">' + escapeHtml(head.gradient) + '</span>' : '') }),
      page.intro ? el('p', null, page.intro) : null
    ]);
  }

  // ---------- section: level-cards ----------
  function buildLevelCards(section) {
    const grid = el('div', { class: 'card-grid' });
    for (const item of section.items) {
      grid.appendChild(el('a', { href: item.href, class: `card level-card ${item.level || ''}` }, [
        el('div', { class: 'level-badge' }, item.badge || ''),
        el('h3', null, item.title),
        el('p', null, item.desc),
        el('div', { class: 'arrow' }, item.arrow || 'Anfangen →')
      ]));
    }
    return grid;
  }

  // ---------- section: concept-grid ----------
  function buildConceptGrid(section) {
    const grid = el('div', { class: 'concept-grid' });
    for (const c of section.items) {
      grid.appendChild(el('div', { class: 'concept' }, [
        c.symbol ? el('div', { class: 'concept-symbol' }, c.symbol) : null,
        c.title ? el('div', { class: 'concept-title' }, c.title) : null,
        c.desc ? el('div', { class: 'concept-desc', html: c.desc }) : null,
        c.example ? el('div', { class: 'concept-example', html: c.example }) : null
      ]));
    }
    return grid;
  }

  // ---------- section: info-cards ----------
  function buildInfoCards(section) {
    const grid = el('div', { class: 'card-grid' });
    for (const c of section.items) {
      grid.appendChild(el('div', { class: 'card' }, [
        c.title ? el('h3', null, c.title) : null,
        c.body ? el('p', { html: c.body }) : null
      ]));
    }
    return grid;
  }

  // ---------- section: interactive — regex-tester ----------
  function buildRegexTester(section) {
    const cfg = section.config || {};
    const pattern = el('input', { class: 'tester-input tester-pattern', value: cfg.pattern || '', spellcheck: 'false' });
    const flags = el('input', { class: 'tester-input tester-flags', value: cfg.flags || 'g', spellcheck: 'false' });
    const text = el('textarea', { class: 'tester-textarea', spellcheck: 'false' });
    text.value = cfg.text || '';
    const result = el('div', { class: 'tester-result' });
    const meta = el('div', { class: 'tester-meta' });

    function update() {
      const pat = pattern.value;
      const fl = flags.value;
      const t = text.value;
      if (!pat) {
        result.innerHTML = '<span style="color:var(--text-dim)">Pattern eingeben…</span>';
        meta.textContent = '';
        return;
      }
      const useFlags = fl.includes('g') ? fl : fl + 'g';
      let re;
      try {
        re = new RegExp(pat, useFlags);
      } catch (e) {
        result.innerHTML = `<span class="tester-error">⚠ ${escapeHtml(e.message)}</span>`;
        meta.textContent = '';
        return;
      }
      const matches = [...t.matchAll(re)];
      let html = '';
      let last = 0;
      for (const m of matches) {
        html += escapeHtml(t.slice(last, m.index));
        html += `<span class="tester-match" title="Match">${escapeHtml(m[0]) || '∅'}</span>`;
        last = m.index + m[0].length;
        if (m[0].length === 0) last++;
      }
      html += escapeHtml(t.slice(last));
      result.innerHTML = html || '<span style="color:var(--text-dim)">Keine Matches.</span>';
      meta.textContent = `${matches.length} Match${matches.length === 1 ? '' : 'es'} · /${pat}/${useFlags}`;
    }

    [pattern, flags, text].forEach(i => i.addEventListener('input', update));

    const presetsRow = el('div', { class: 'tester-presets' });
    for (const p of (cfg.presets || [])) {
      const btn = el('button', { class: 'tester-preset' }, p.label || p.pattern);
      btn.addEventListener('click', () => {
        if (p.pattern !== undefined) pattern.value = p.pattern;
        if (p.flags !== undefined) flags.value = p.flags;
        if (p.text !== undefined) text.value = p.text;
        update();
      });
      presetsRow.appendChild(btn);
    }

    const tester = el('div', { class: 'tester' }, [
      el('div', { class: 'tester-row' }, [
        el('span', { class: 'tester-prefix' }, '/'),
        pattern,
        el('span', { class: 'tester-prefix' }, '/'),
        flags
      ]),
      text,
      el('div', { class: 'tester-result-label' }, 'Ergebnis'),
      result,
      meta,
      cfg.presets && cfg.presets.length ? presetsRow : null
    ]);

    setTimeout(update, 0);

    if (section.warning) {
      return el('div', null, [
        el('div', { class: 'tester-warning' }, section.warning),
        tester
      ]);
    }
    return tester;
  }

  // ---------- section: interactive — type-specimen ----------
  function buildTypeSpecimen(section) {
    const cfg = section.config || {};
    const initial = cfg.sample || 'The quick brown fox jumps over the lazy dog';
    const input = el('input', { class: 'specimen-sample-input', value: initial, spellcheck: 'false' });

    const grid = el('div', { class: 'specimen-grid' });
    const samples = [];
    for (const s of (cfg.specimens || [])) {
      const sample = el('div', { class: 'specimen-sample' });
      sample.style.fontFamily = s.stack;
      sample.textContent = initial;
      samples.push(sample);
      grid.appendChild(el('div', { class: 'specimen' }, [
        el('div', { class: 'specimen-label' }, s.label || 'Specimen'),
        el('div', { class: 'specimen-stack' }, s.stack),
        sample
      ]));
    }

    input.addEventListener('input', () => {
      const v = input.value || initial;
      for (const s of samples) s.textContent = v;
    });

    return el('div', null, [input, grid]);
  }

  // ---------- section: code-showcase ----------
  function buildCodeShowcase(section) {
    return el('div', null, [
      section.caption ? el('div', { class: 'code-caption', html: section.caption }) : null,
      el('pre', { class: 'code-block' }, section.code || '')
    ]);
  }

  // ---------- section: exercises ----------
  function buildExercises(section) {
    const wrap = el('div', null);
    for (const ex of section.items) {
      const sol = el('div', { class: 'exercise-solution' }, [
        el('code', { html: ex.solution || '' }),
        ex.explanation ? el('p', { html: ex.explanation }) : null
      ]);
      const toggle = el('button', { class: 'exercise-toggle' }, '↓ Lösung zeigen');
      toggle.addEventListener('click', () => {
        const visible = sol.classList.toggle('visible');
        toggle.textContent = visible ? '↑ Lösung verbergen' : '↓ Lösung zeigen';
      });
      wrap.appendChild(el('div', { class: 'exercise' }, [
        el('div', { class: 'exercise-header' }, [
          ex.difficulty ? el('span', { class: `exercise-badge ${ex.difficulty}` }, ex.difficulty.toUpperCase()) : null,
          el('span', { class: 'exercise-title' }, ex.title || '')
        ]),
        ex.task ? el('div', { class: 'exercise-task', html: ex.task }) : null,
        toggle,
        sol
      ]));
    }
    return wrap;
  }

  // ---------- section: placeholders ----------
  function buildPlaceholders(section, repoUrl) {
    const wrap = el('div', null);
    for (const p of section.items) {
      const btn = el('button', { class: 'btn-issue' }, '📝 Issue erstellen');
      btn.addEventListener('click', () => {
        const url = `${repoUrl}/issues/new?title=${encodeURIComponent(p.issueTitle || 'Neue Übung')}&body=${encodeURIComponent(p.issueBody || '')}&labels=${encodeURIComponent(p.labels || 'exercise')}`;
        window.open(url, '_blank', 'noopener,noreferrer');
      });
      wrap.appendChild(el('div', { class: 'placeholder' }, [
        el('div', { class: 'placeholder-icon' }, '＋'),
        el('div', { class: 'placeholder-title' }, p.title || 'Hier könnte deine Übung hin'),
        p.desc ? el('div', { class: 'placeholder-desc', html: p.desc }) : null,
        btn
      ]));
    }
    return wrap;
  }

  // ---------- section: quiz ----------
  function buildQuiz(section) {
    const wrap = el('div', null);
    for (const q of section.items) {
      const optionsWrap = el('div', { class: 'quiz-options' });
      const feedback = el('div', { class: 'quiz-feedback' });
      const buttons = [];
      for (const opt of q.options) {
        const btn = el('button', { class: 'quiz-option', 'data-value': opt.value }, opt.label);
        btn.addEventListener('click', () => {
          buttons.forEach(b => b.disabled = true);
          const right = opt.value === q.correct;
          btn.classList.add(right ? 'correct' : 'wrong');
          if (!right) {
            const correctBtn = buttons.find(b => b.dataset.value === q.correct);
            if (correctBtn) correctBtn.classList.add('correct');
          }
          feedback.classList.add('visible');
          feedback.innerHTML = (right ? '✓ Richtig. ' : '✗ Falsch. ') + escapeHtml(q.feedback || '');
        });
        buttons.push(btn);
        optionsWrap.appendChild(btn);
      }
      wrap.appendChild(el('div', { class: 'quiz' }, [
        el('div', { class: 'quiz-question', html: q.question }),
        optionsWrap,
        feedback
      ]));
    }
    return wrap;
  }

  // ---------- section: resources ----------
  function buildResources(section) {
    const list = el('div', { class: 'resource-list' });
    section.items.forEach((r, i) => {
      const titleParts = [r.title || ''];
      const titleNode = el('div', { class: 'resource-title' });
      titleNode.appendChild(document.createTextNode(r.title || ''));
      if (r.star) titleNode.appendChild(el('span', { class: 'star' }, '★'));
      for (const tag of (r.tags || [])) {
        titleNode.appendChild(el('span', { class: 'resource-tag' }, tag));
      }
      list.appendChild(el('a', {
        href: r.url, target: '_blank', rel: 'noopener', class: 'resource'
      }, [
        el('span', { class: 'resource-rank' }, String(i + 1).padStart(2, '0')),
        el('div', { class: 'resource-body' }, [
          titleNode,
          r.desc ? el('div', { class: 'resource-desc', html: r.desc }) : null
        ]),
        el('span', { class: 'resource-arrow' }, '↗')
      ]));
    });
    return list;
  }

  // ---------- section: checklist ----------
  function buildChecklist(section, topicId) {
    const box = el('div', { class: 'checklist' });
    for (const item of section.items) {
      const id = `${topicId}-${item.id}`;
      const cb = el('input', { type: 'checkbox', id });
      const key = `${topicId}-check-${item.id}`;
      if (localStorage.getItem(key) === '1') cb.checked = true;
      cb.addEventListener('change', () => {
        localStorage.setItem(key, cb.checked ? '1' : '0');
      });
      const label = el('label', { for: id, html: item.label });
      box.appendChild(el('div', { class: 'checklist-item' }, [cb, label]));
    }
    return box;
  }

  // ---------- next-nav ----------
  function buildNextNav(page) {
    if (!page.prev && !page.next) return null;
    const prev = page.prev ? el('a', { href: page.prev.href, class: 'next-link' }, [
      el('div', { class: 'next-link-label' }, page.prev.label || '← zurück'),
      el('div', { class: 'next-link-title' }, page.prev.title || '')
    ]) : el('div', { class: 'next-link', style: 'visibility:hidden' });
    const next = page.next ? el('a', { href: page.next.href, class: 'next-link next' }, [
      el('div', { class: 'next-link-label' }, page.next.label || 'weiter →'),
      el('div', { class: 'next-link-title' }, page.next.title || '')
    ]) : el('div', { class: 'next-link', style: 'visibility:hidden' });
    return el('nav', { class: 'next-nav' }, [prev, next]);
  }

  // ---------- section dispatcher ----------
  function buildSection(section, topic) {
    let body;
    switch (section.type) {
      case 'level-cards': body = buildLevelCards(section); break;
      case 'concept-grid': body = buildConceptGrid(section); break;
      case 'info-cards': body = buildInfoCards(section); break;
      case 'interactive':
        if (section.subtype === 'regex-tester') body = buildRegexTester(section);
        else if (section.subtype === 'type-specimen') body = buildTypeSpecimen(section);
        else body = el('div', null, `Unbekannter interactive subtype: ${section.subtype}`);
        break;
      case 'code-showcase': body = buildCodeShowcase(section); break;
      case 'exercises': body = buildExercises(section); break;
      case 'placeholders': body = buildPlaceholders(section, topic.repoUrl || DEFAULT_REPO); break;
      case 'quiz': body = buildQuiz(section); break;
      case 'resources': body = buildResources(section); break;
      case 'checklist': body = buildChecklist(section, topic.id); break;
      default:
        body = el('div', null, `Unknown section type: ${section.type}`);
    }
    const wrap = el('section', { class: 'section' });
    if (section.title) wrap.appendChild(el('div', { class: 'section-title' }, section.title));
    wrap.appendChild(body);
    return wrap;
  }

  // ---------- footer ----------
  function buildFooter(topic) {
    const repoUrl = topic.repoUrl || DEFAULT_REPO;
    return el('footer', null, [
      el('p', { html: `Claude Learnings · ${escapeHtml(topic.title)} · <a href="${escapeHtml(repoUrl)}" target="_blank" rel="noopener">GitHub</a>` })
    ]);
  }

  // ---------- main ----------
  function render() {
    const topic = window.TOPIC;
    if (!topic) {
      document.body.innerHTML = '<div style="padding:40px;font-family:monospace;color:#ef4444">Fehler: window.TOPIC nicht definiert. Hat data.js geladen?</div>';
      return;
    }
    const pageId = document.body.getAttribute('data-page') || 'index';
    const page = topic[pageId];
    if (!page) {
      document.body.innerHTML = `<div style="padding:40px;font-family:monospace;color:#ef4444">Fehler: Page "${pageId}" nicht im Schema.</div>`;
      return;
    }

    document.title = `${pageId === 'index' ? 'Übersicht' : pageId.charAt(0).toUpperCase() + pageId.slice(1)} · ${topic.title} · Claude Learnings`;

    initTheme();

    const main = el('main', { class: 'container' }, [
      buildHero(page),
      ...(page.sections || []).map(s => buildSection(s, topic)),
      buildNextNav(page)
    ]);

    document.body.innerHTML = '';
    document.body.appendChild(buildHeader(topic, pageId));
    document.body.appendChild(main);
    document.body.appendChild(buildFooter(topic));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }

  // expose for tests
  window.__lcRender = render;
})();
