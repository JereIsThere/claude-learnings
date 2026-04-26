window.TOPIC = {
  id: 'typography',
  title: 'Typografie',
  pages: ['index', 'beginner', 'intermediate', 'advanced'],
  repoUrl: 'https://github.com/JereIsThere/claude-learnings',

  // ============================================================
  // INDEX
  // ============================================================
  index: {
    eyebrow: '// the craft of letterforms',
    badge: 'brand',
    headline: { plain: 'Typografie ', gradient: 'sehen lernen' },
    intro: 'Vom Unterschied zwischen Serif und Sans bis zu Variable Fonts und OpenType Features. Typografie ist 95% des Designs — und die meisten sehen es nicht. Hier lernst du sehen.',
    sections: [
      {
        type: 'level-cards', title: 'Lernpfad', items: [
          { level: 'beginner', badge: '● BEGINNER', title: 'Anatomie & Klassifikation', desc: 'Serif vs Sans, Body vs Display, Schriftgrößen, Hierarchie. Du hörst auf, "Comic Sans für alles" zu nutzen.', href: 'beginner.html', arrow: 'Anfangen →' },
          { level: 'intermediate', badge: '● INTERMEDIATE', title: 'Spacing & Pairing', desc: 'Kerning, Tracking, Leading, Vertical Rhythm. Schriften kombinieren ohne Designer-Brille.', href: 'intermediate.html', arrow: 'Weiter →' },
          { level: 'advanced', badge: '● ADVANCED', title: 'OpenType & Performance', desc: 'Variable Fonts, ligatures, font-display, subsetting. Web-Typografie auf Profiniveau.', href: 'advanced.html', arrow: 'Tief rein →' }
        ]
      },
      {
        type: 'info-cards', title: 'Warum Typografie lernen?', items: [
          { title: 'Du siehst es überall', body: 'Jede Website, jede App, jedes Buch. Sobald du Typografie verstehst, kannst du nicht mehr "ungesehen" lesen.' },
          { title: 'Billiger Hebel für Quality', body: 'Eine gut gewählte Schrift mit richtigem Spacing macht 80% des "professional looks" aus — ohne Designer-Honorar.' },
          { title: 'Web-Performance', body: 'Webfonts sind oft 30%+ des Page-Weights. Wer Typografie kennt, optimiert hier wo es weh tut.' },
          { title: 'Lesbarkeit = UX', body: 'Schlechte Typografie heißt: Leser springen ab. Gute Typografie heißt: Inhalt wirkt. Direkt messbar.' }
        ]
      },
      {
        type: 'interactive', subtype: 'type-specimen', title: 'Schriften vergleichen · System-Fonts',
        config: {
          sample: 'Aa Hamburgefonts 0123',
          specimens: [
            { label: 'Serif · Georgia', stack: 'Georgia, Cambria, "Times New Roman", Times, serif' },
            { label: 'Sans · System UI', stack: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' },
            { label: 'Mono · System', stack: '"JetBrains Mono", "Cascadia Code", "SF Mono", Consolas, monospace' },
            { label: 'Display · Impact', stack: 'Impact, "Arial Black", sans-serif' }
          ]
        }
      },
      {
        type: 'info-cards', title: 'So lernst du am besten', items: [
          { title: '1 · Augen kalibrieren', body: 'Lass dir die Specimens nebeneinander zeigen. Das Wort "Hamburgefonts" ist Standard — enthält fast alle interessanten Buchstabenformen.' },
          { title: '2 · Schriften "lesen"', body: 'In jedem Café, jedem Buchcover, jedem Logo: welche Schrift ist das? Warum gewählt? Innerhalb von 4 Wochen siehst du anders.' },
          { title: '3 · Übungen, nicht nur Theorie', body: 'Schriften benennen, Kerning korrigieren, Hierarchien aufstellen. Skills bauen sich nur durch Tun.' },
          { title: '4 · Echte Texte, nicht Lorem Ipsum', body: 'Lorem täuscht — echte Texte zeigen Probleme. Übe immer mit deutschen ODER deinem Zieltext.' }
        ]
      }
    ]
  },

  // ============================================================
  // BEGINNER
  // ============================================================
  beginner: {
    eyebrow: '● BEGINNER · ~2 Stunden',
    badge: 'green',
    headline: { plain: 'Anatomie & ', gradient: 'Klassifikation' },
    intro: 'Du lernst die Grundbegriffe: Serif vs Sans, x-Höhe, Ascender/Descender, Body vs Display, und wie man Hierarchie aufbaut.',
    prev: { href: 'index.html', label: '← zurück', title: 'Übersicht' },
    next: { href: 'intermediate.html', label: 'weiter →', title: 'Intermediate · Spacing & Pairing' },
    sections: [
      {
        type: 'concept-grid', title: 'Anatomie · die Bausteine eines Buchstabens', items: [
          { symbol: 'Serif', title: 'Serife', desc: 'Die kleinen "Häkchen" an den Buchstabenenden. Klassisch in Druck, gut für lange Texte.', example: 'Beispiele: Georgia, Times, Garamond' },
          { symbol: 'Sans', title: 'Sans-Serif', desc: 'Ohne Serifen. Modern, klar, gut für Bildschirme und kurze Texte.', example: 'Beispiele: Helvetica, Inter, Roboto' },
          { symbol: 'x', title: 'x-Höhe', desc: 'Höhe der Kleinbuchstaben (ohne Ascender/Descender). Hoch = lesbarer bei kleiner Größe.' },
          { symbol: 'h', title: 'Ascender', desc: 'Was bei "h", "b", "l" nach oben über die x-Höhe ragt.' },
          { symbol: 'g', title: 'Descender', desc: 'Was bei "g", "p", "y" nach unten unter die Baseline geht.' },
          { symbol: '_', title: 'Baseline', desc: 'Die unsichtbare Linie, auf der die Buchstaben "stehen". Reference für Vertical Alignment.' },
          { symbol: 'A', title: 'Cap-Height', desc: 'Höhe der Großbuchstaben. Oft etwas niedriger als Ascender.' },
          { symbol: 'O', title: 'Counter', desc: 'Der innere "Hohlraum" eines Buchstabens — wie das Loch im "O" oder im "e".' }
        ]
      },
      {
        type: 'concept-grid', title: 'Klassifikation · Schriftfamilien', items: [
          { symbol: 'Antiqua', title: 'Old-Style Serif', desc: 'Klassisch, sanfte Kontraste. Garamond, Caslon, Goudy. Gut für Bücher.' },
          { symbol: 'Modern', title: 'Modern Serif', desc: 'Hohe Kontraste, vertikale Achse. Bodoni, Didot. Edel, Mode-Magazine.' },
          { symbol: 'Slab', title: 'Slab Serif', desc: 'Dicke, blockige Serifen. Rockwell, Roboto Slab. Stark, bold, gut für Headlines.' },
          { symbol: 'Grotesk', title: 'Grotesque Sans', desc: 'Frühe Sans-Serifs, neutral. Helvetica, Arial. Universal-Workhorse.' },
          { symbol: 'Geo', title: 'Geometric Sans', desc: 'Aus geometrischen Formen gebaut. Futura, Avenir, Circular. Modern, technical.' },
          { symbol: 'Hum', title: 'Humanist Sans', desc: 'Sans-Serif mit kalligrafischen Einflüssen. Gill Sans, Open Sans, Lato. Warm, lesbar.' },
          { symbol: 'Mono', title: 'Monospace', desc: 'Jeder Buchstabe gleich breit. Code, Tabellen, Terminals. Courier, JetBrains Mono.' },
          { symbol: 'Disp', title: 'Display', desc: 'Für große Größen entworfen. Impact, Bebas Neue. Nicht für Fließtext nutzen!' }
        ]
      },
      {
        type: 'interactive', subtype: 'type-specimen', title: 'Tipp deinen Text · sieh den Unterschied',
        config: {
          sample: 'Hamburger',
          specimens: [
            { label: 'Old-Style · Georgia', stack: 'Georgia, "Times New Roman", serif' },
            { label: 'Slab · Rockwell', stack: 'Rockwell, "Courier New", serif' },
            { label: 'Geometric · Futura', stack: 'Futura, "Trebuchet MS", sans-serif' },
            { label: 'Humanist · Segoe UI', stack: '"Segoe UI", Tahoma, sans-serif' },
            { label: 'Display · Impact', stack: 'Impact, "Arial Black", sans-serif' },
            { label: 'Mono · Consolas', stack: 'Consolas, "Courier New", monospace' }
          ]
        }
      },
      {
        type: 'info-cards', title: 'Hierarchie · die wichtigste Beginner-Regel', items: [
          { title: 'Maximal 2 Schriften', body: 'Eine für Headlines, eine für Body. Mehr ist fast immer schlechter. Wenn du eine 3. brauchst — du hast ein anderes Problem.' },
          { title: '3 Größenstufen reichen', body: 'Body (16px), Subhead (~24px), Hero (~48px). Alles dazwischen wirkt wuselig. Big Type Scale > Many Sizes.' },
          { title: 'Kontrast über Größe', body: 'Hierarchie funktioniert über Größe-Differenzen UND Gewicht (regular vs bold). Nicht über Farbe allein.' },
          { title: 'Body ist heilig', body: 'Body-Text muss gut lesbar sein. Lieber langweilige Body + stylische Headline als umgekehrt.' }
        ]
      },
      {
        type: 'exercises', title: 'Übungen · Augen trainieren', items: [
          { difficulty: 'easy', title: 'Serif oder Sans?', task: 'Welche Schrift würdest du für ein <strong>500-seitiges Buch</strong> wählen — Serif oder Sans?', solution: 'Serif (z.B. Garamond, Caslon)', explanation: 'Studien zeigen: bei langen, gedruckten Texten führen Serifen den Blick besser. Bei Bildschirmtexten ist der Effekt schwächer (höhere Pixeldichte hilft Sans). Web-Text in Body kann beides sein, aber bei Print ist Serif für Long-Form Standard.' },
          { difficulty: 'easy', title: 'Display oder Body?', task: 'Du brauchst eine Schrift für eine Website-Headline (60px). Würdest du <strong>Impact</strong> oder <strong>Inter Regular</strong> nehmen?', solution: 'Beide sind OK — kommt drauf an', explanation: 'Impact ist eine Display-Schrift: für große Größen optimiert, eng gespacet, stark. Wirkt aber sehr "1995 Werbung". Inter wirkt moderner und sauberer auch in groß. Beide würden funktionieren — der Stilunterschied entscheidet. <strong>Niemals</strong> Impact für Body nehmen, das tut weh.' },
          { difficulty: 'medium', title: 'Hierarchie aufbauen', task: 'Du hast einen Artikel mit Titel, Untertitel, Body. Welche Größen würdest du wählen, wenn Body 16px ist?', solution: 'Title ~36-48px, Subtitle ~20-24px, Body 16px', explanation: 'Goldene Regel: Title sollte 2-3× Body sein, Subtitle 1.25-1.5× Body. Damit ist die Hierarchie auf einen Blick erkennbar. Subtitle direkt über Body (wie 17px) ist zu wenig Unterschied — Leser scannen das nicht als Hierarchie.' },
          { difficulty: 'medium', title: 'Welche Schrift NICHT?', task: 'Welche der folgenden Schriften wäre eine <strong>schlechte Wahl</strong> für Body-Text auf einer Banking-Website? Comic Sans · Georgia · Inter · Papyrus', solution: 'Comic Sans und Papyrus', explanation: 'Comic Sans ist informell und wirkt unseriös für Banking. Papyrus ist eine Display-Schrift mit künstlicher Alterung — keine Wahl für seriöse Inhalte und absolut keine für Body. Georgia und Inter sind beide solide Wahl: Georgia warmer/klassischer, Inter modern/clean.' }
        ]
      },
      {
        type: 'placeholders', items: [
          { title: 'Hier könnte deine Übung hin', desc: 'Idee: "Erkenne die Schrift" — Screenshot von Logo/Headline, User soll Schrift identifizieren', issueTitle: '[Beginner] Neue Übung: Schrift erkennen', issueBody: '**Stufe**: Beginner\n**Thema**: Klassifikation, visuelles Wiedererkennen\n\n**Vorschlag**: Übung mit 3-4 berühmten Logos/Headlines, User soll Schriftfamilie erkennen.\n\n**Aufgabentext**:\n\n**Lösung**:\n\n**Erklärung**:', labels: 'exercise,beginner,typography' },
          { title: 'Hier könnte deine Übung hin', desc: 'Idee: "Anatomie-Quiz" — wo ist Ascender, x-Höhe, Counter im Buchstaben?', issueTitle: '[Beginner] Neue Übung: Anatomie-Quiz', issueBody: '**Stufe**: Beginner\n**Thema**: Anatomie\n\n**Vorschlag**: Übung mit großem Buchstaben-Bild, User soll die Teile benennen.\n\n**Aufgabentext**:\n\n**Lösung**:\n\n**Erklärung**:', labels: 'exercise,beginner,typography' }
        ]
      },
      {
        type: 'quiz', title: 'Quiz · Anatomie & Klassifikation', items: [
          { question: 'Was ist die "x-Höhe" eines Buchstabens?', options: [{ value: 'a', label: 'Die Höhe des Buchstaben x' }, { value: 'b', label: 'Die Höhe der Kleinbuchstaben ohne Ascender/Descender' }, { value: 'c', label: 'Die maximale Höhe der Schrift' }, { value: 'd', label: 'Der Abstand zwischen zwei Zeilen' }], correct: 'b', feedback: 'x-Höhe = Höhe der Kleinbuchstaben (gemessen am "x" als Referenz, deshalb der Name). Hohe x-Höhe = lesbarer bei kleiner Größe — wichtig für Mobile/UI.' },
          { question: 'Welche Schrift gehört zur Familie der <strong>Geometric Sans</strong>?', options: [{ value: 'a', label: 'Garamond' }, { value: 'b', label: 'Helvetica' }, { value: 'c', label: 'Futura' }, { value: 'd', label: 'Rockwell' }], correct: 'c', feedback: 'Futura ist DAS Beispiel für Geometric Sans — aus Kreisen und Rechtecken konstruiert. Helvetica ist Grotesque, Garamond Old-Style Serif, Rockwell ist Slab Serif.' },
          { question: 'Wie viele Schriften sollte eine Website typischerweise mischen?', options: [{ value: 'a', label: 'Möglichst viele — bringt Abwechslung' }, { value: 'b', label: 'Genau eine' }, { value: 'c', label: '2 (Headline + Body)' }, { value: 'd', label: '5+, abhängig vom Kontext' }], correct: 'c', feedback: 'Klassische Regel: 2 reichen meistens. Eine fürs Heading, eine fürs Body. Mehr → wuselig. Eine einzige geht auch (besonders mit Variable Fonts), aber 2 ist der Standard für Hierarchie via Schrift-Kontrast.' }
        ]
      },
      {
        type: 'resources', title: 'Resources · Beginner', items: [
          { url: 'https://fonts.google.com/knowledge', title: 'Google Fonts Knowledge', star: true, tags: ['guide'], desc: 'Sehr gut strukturierter Einstieg. Anatomie, Klassifikation, Pairings — alles mit Beispielen.' },
          { url: 'https://practicaltypography.com/', title: 'Butterick — Practical Typography', star: true, tags: ['book'], desc: 'Online-Buch von Matthew Butterick. Pragmatisch, opinionated, kostenlos lesbar. DIE Empfehlung für Schreibende und Coder.' },
          { url: 'https://typedia.com/', title: 'Typedia — Type Encyclopedia', tags: ['reference'], desc: 'Wikipedia für Schriftarten. Geschichte, Klassifikation, Designer.' },
          { url: 'https://www.typewolf.com/', title: 'Typewolf', tags: ['inspiration'], desc: 'Tägliche Schrift-Picks und Site-of-the-day. Augen-Training durch Beispiele.' },
          { url: 'https://www.youtube.com/watch?v=sByzHoiYFX0', title: 'The Futur — Typography Crash Course', tags: ['video'], desc: '20-Minuten Crashkurs. Solide Basis-Übersicht.' }
        ]
      },
      {
        type: 'checklist', title: 'Beginner-Checkliste', items: [
          { id: 'b1', label: 'Ich kenne den Unterschied Serif / Sans-Serif' },
          { id: 'b2', label: 'Ich weiß was x-Höhe, Ascender, Descender sind' },
          { id: 'b3', label: 'Ich kann Old-Style, Modern, Slab, Geometric, Humanist unterscheiden' },
          { id: 'b4', label: 'Ich weiß warum man maximal 2 Schriften mischt' },
          { id: 'b5', label: 'Ich nutze Display-Schriften nicht für Body' },
          { id: 'b6', label: 'Ich kann eine sinnvolle Title/Subtitle/Body-Hierarchie aufbauen' }
        ]
      }
    ]
  },

  // ============================================================
  // INTERMEDIATE
  // ============================================================
  intermediate: {
    eyebrow: '● INTERMEDIATE · ~3 Stunden',
    badge: 'yellow',
    headline: { plain: 'Spacing & ', gradient: 'Pairing' },
    intro: 'Kerning, Tracking, Leading. Vertical Rhythm. Schriften kombinieren. Was den Profi vom Hobby-Designer trennt.',
    prev: { href: 'beginner.html', label: '← zurück', title: 'Beginner · Anatomie' },
    next: { href: 'advanced.html', label: 'weiter →', title: 'Advanced · OpenType & Performance' },
    sections: [
      {
        type: 'concept-grid', title: 'Spacing · die unsichtbare Hälfte', items: [
          { symbol: 'Tracking', title: 'Tracking', desc: 'Gleichmäßiger Abstand zwischen <em>allen</em> Buchstaben. Globaler Hebel für Großbuchstaben (mehr) oder Anti-Aliasing-Korrektur (weniger).', example: 'CSS: <code>letter-spacing</code>' },
          { symbol: 'Kerning', title: 'Kerning', desc: 'Abstand zwischen <em>spezifischen Buchstabenpaaren</em>. "AV" oder "To" brauchen weniger als "II".', example: 'CSS: <code>font-kerning: normal</code>' },
          { symbol: 'Leading', title: 'Leading (Zeilenabstand)', desc: 'Vertikaler Abstand zwischen Baselines. Faustregel: 1.4-1.6× Schriftgröße für Body.', example: 'CSS: <code>line-height: 1.5</code>' },
          { symbol: 'Measure', title: 'Measure (Zeilenlänge)', desc: 'Optimale Zeilenlänge: 45-75 Zeichen. Über 90 Zeichen → Augen verlieren die Zeile.', example: 'CSS: <code>max-width: 65ch</code>' },
          { symbol: 'Rag', title: 'Rag', desc: 'Der "ungerade Rand" bei left-aligned Text. Sollte einen sanften, nicht abgehackten Verlauf haben.' },
          { symbol: 'Widow', title: 'Widow', desc: 'Letzte Zeile eines Absatzes ist allein oben auf der nächsten Seite/Spalte. Vermeiden.' },
          { symbol: 'Orphan', title: 'Orphan', desc: 'Erste Zeile eines Absatzes ist allein unten. Auch vermeiden.' },
          { symbol: 'Rhythm', title: 'Vertical Rhythm', desc: 'Alle Abstände (Padding, Margins, Leading) Vielfache eines Base-Werts. Macht Layouts harmonisch.' }
        ]
      },
      {
        type: 'interactive', subtype: 'type-specimen', title: 'Spacing fühlen · Schreib was rein',
        config: {
          sample: 'WALDORF AV TOMA',
          specimens: [
            { label: 'Tight (-0.05em)', stack: 'Inter, sans-serif' },
            { label: 'Normal (0)', stack: 'Inter, sans-serif' },
            { label: 'Loose (+0.15em)', stack: 'Inter, sans-serif' },
            { label: 'Display (Impact)', stack: 'Impact, "Arial Black", sans-serif' }
          ]
        }
      },
      {
        type: 'concept-grid', title: 'Pairing · Schriften kombinieren', items: [
          { symbol: '1', title: 'Kontrast suchen', desc: 'Gleiche Klassifikation = boring. Pair Serif + Sans, oder Display + Body. Suche das Yin zum Yang.' },
          { symbol: '2', title: 'Mood matchen', desc: 'Beide sollten zur gleichen Stimmung passen. Garamond + Helvetica = OK (klassisch). Comic Sans + Bodoni = Verbrechen.' },
          { symbol: '3', title: 'Eine dominiert', desc: 'Eine ist Headline, eine ist Body. Nicht beide gleich laut. Klare Rollen.' },
          { symbol: '4', title: 'Same family safe', desc: 'Wenn unsicher: gleiche Familie verschiedene Gewichte (Inter Bold + Inter Regular). Geht immer.' },
          { symbol: '5', title: 'x-Höhe matchen', desc: 'Bei Mix: x-Höhen sollten ähnlich sein, sonst wirkt eine "kleiner" obwohl gleiche Größe.' },
          { symbol: '6', title: 'Ein Designer', desc: 'Schriften vom gleichen Designer pairen oft natürlich. Adrian Frutiger\'s Univers + Frutiger.' }
        ]
      },
      {
        type: 'exercises', title: 'Übungen · Spacing-Auge bauen', items: [
          { difficulty: 'easy', title: 'Optimale Zeilenlänge', task: 'Du hast Body-Text in 18px. Welche maximale Zeilenlänge würdest du wählen für gute Lesbarkeit?', solution: '~600-700px (60-70 Zeichen)', explanation: 'Faustregel: 45-75 Zeichen pro Zeile. Bei 18px Body sind 60ch ≈ 660px. Bei drei-Spalten-Layout entsprechend kürzer (~45ch). Über 90 Zeichen verliert das Auge beim Zurückspringen die Zeile.' },
          { difficulty: 'medium', title: 'Leading für Caption', task: 'Body-Text ist 16px mit line-height 1.5. Welches Leading würdest du für eine Bildunterschrift in 12px wählen?', solution: 'line-height ~1.4 (etwas tighter)', explanation: 'Kleine Schrift braucht meist etwas tighteres Leading. 1.5 wirkt da zu luftig. Aber: nicht unter 1.3 — sonst kollidieren Ascender und Descender. 1.4 ist ein guter Mittelwert für Captions.' },
          { difficulty: 'medium', title: 'Pairing-Diagnose', task: 'Ein Designer pairt <strong>Bodoni</strong> (Modern Serif, hochkontrast) mit <strong>Helvetica</strong> (Grotesque Sans). Was läuft schief?', solution: 'Stilkonflikt — beide wollen "neutral wirken", konkurrieren um Aufmerksamkeit', explanation: 'Bodoni ist elegant-edgy, Helvetica neutral-funktional. Es funktioniert manchmal in Mode-Magazinen — aber in vielen Kontexten wirkt es uninspiriert. Bessere Pairings für Bodoni: Futura (geometrisch, klar) oder Avenir (humanistisch). Oder andersrum: Helvetica + Times (geht auch nicht — da fehlt Kontrast).' },
          { difficulty: 'hard', title: 'Vertical Rhythm', task: 'Du baust eine Website mit Base-Unit 8px. Body 16px / line-height 1.5 (= 24px). Welche Margin würdest du zwischen Absätzen wählen?', solution: '24px (oder 16px)', explanation: 'Vertical Rhythm bedeutet: alle Abstände sollten Vielfache der Base sein (oder der Line-Height). 24px = eine Zeilenhöhe = harmonisch. 16px = zwei Base-Units = OK. 20px = Bruch. Der Effekt: Layouts wirken "wie aus einem Guss" wenn alle Werte rhythmisch sind.' }
        ]
      },
      {
        type: 'placeholders', items: [
          { title: 'Hier könnte deine Übung hin', desc: 'Idee: "Kerning korrigieren" — Wort mit schlechtem Kerning (z.B. "AV") zeigen, User soll Korrektur vorschlagen', issueTitle: '[Intermediate] Neue Übung: Kerning korrigieren', issueBody: '**Stufe**: Intermediate\n**Thema**: Kerning, optisches Gleichgewicht\n\n**Vorschlag**: Übung mit gerendetem Wort und schlechtem Kerning, User korrigiert Werte.\n\n**Aufgabentext**:\n\n**Lösung**:\n\n**Erklärung**:', labels: 'exercise,intermediate,typography' },
          { title: 'Hier könnte deine Übung hin', desc: 'Idee: "Pairing-Battle" — drei Schriftpaare, welches funktioniert am besten?', issueTitle: '[Intermediate] Neue Übung: Pairing-Battle', issueBody: '**Stufe**: Intermediate\n**Thema**: Pairing\n\n**Vorschlag**: Übung mit 3 Schriftpaaren, User wählt das harmonischste.\n\n**Aufgabentext**:\n\n**Lösung**:\n\n**Erklärung**:', labels: 'exercise,intermediate,typography' },
          { title: 'Hier könnte deine Übung hin', desc: 'Idee: "Modular Scale aufstellen" — gegeben Base 16px, was ist die nächste sinnvolle Stufe?', issueTitle: '[Intermediate] Neue Übung: Modular Scale', issueBody: '**Stufe**: Intermediate\n**Thema**: Hierarchie, Type-Scale\n\n**Vorschlag**: Übung zu Major-Third / Perfect-Fourth Scales.\n\n**Aufgabentext**:\n\n**Lösung**:\n\n**Erklärung**:', labels: 'exercise,intermediate,typography' }
        ]
      },
      {
        type: 'quiz', title: 'Quiz · Spacing & Pairing', items: [
          { question: 'Was ist der Unterschied zwischen <strong>Tracking</strong> und <strong>Kerning</strong>?', options: [{ value: 'a', label: 'Kein Unterschied — beide bedeuten Buchstabenabstand' }, { value: 'b', label: 'Tracking = global, alle Buchstaben gleichmäßig. Kerning = pro Buchstabenpaar individuell.' }, { value: 'c', label: 'Tracking = horizontal, Kerning = vertikal' }, { value: 'd', label: 'Tracking ist nur in Print, Kerning nur am Bildschirm' }], correct: 'b', feedback: 'Tracking justiert ALLE Buchstaben gleich (Letter-Spacing). Kerning behandelt einzelne Paare wie "AV" oder "To" individuell — denn die brauchen objektiv weniger Platz für visuelles Gleichgewicht.' },
          { question: 'Was ist eine sinnvolle <strong>line-height</strong> für Body-Text?', options: [{ value: 'a', label: '1.0 (so eng wie möglich)' }, { value: 'b', label: '1.2 (CSS default)' }, { value: 'c', label: '1.5 (1.4-1.6 ist Sweet Spot)' }, { value: 'd', label: '2.5 (luftig wirkt premium)' }], correct: 'c', feedback: 'Sweet Spot für Body-Lesbarkeit ist 1.4-1.6. Browser-Default 1.2 ist eigentlich zu eng für längere Texte. 2.5 wirkt zerrissen — die Zeilen verlieren ihren Zusammenhang.' },
          { question: 'Welches Pairing ist am sichersten, wenn man unsicher ist?', options: [{ value: 'a', label: 'Comic Sans + Times New Roman' }, { value: 'b', label: 'Verschiedene Gewichte derselben Familie (z.B. Inter Bold + Inter Regular)' }, { value: 'c', label: 'Möglichst kontrastreiche Schriften' }, { value: 'd', label: 'Drei verschiedene Display-Schriften' }], correct: 'b', feedback: 'Same-family Pairing geht IMMER. Inter Bold für Heading, Inter Regular für Body — passt automatisch in Stimmung und x-Höhe. Mit Variable Fonts ist das oft sogar nur eine Datei (1 Download).' }
        ]
      },
      {
        type: 'resources', title: 'Resources · Spacing & Pairing', items: [
          { url: 'https://fonts.google.com/knowledge/choosing_type/a_checklist_for_choosing_type', title: 'Google Fonts — Choosing Type Checklist', star: true, tags: ['guide'], desc: 'Pragmatische Checkliste für Schriftauswahl. Inkl. Pairing-Tipps.' },
          { url: 'https://typescale.com/', title: 'TypeScale.com', tags: ['tool'], desc: 'Visualisiert Modular Scales. Spielen mit Major-Third / Perfect-Fourth-Verhältnissen.' },
          { url: 'https://every-layout.dev/rudiments/axioms/', title: 'Every Layout — Axioms', tags: ['guide'], desc: 'Heydon Pickering\'s Layout-Prinzipien. Vertical Rhythm, Measure, Lobotomized Owl.' },
          { url: 'https://www.fontpair.co/', title: 'FontPair.co', tags: ['inspiration'], desc: 'Kuratierte Schrift-Pairings mit Live-Preview. Inspiration für eigene Combinations.' },
          { url: 'https://practicaltypography.com/text-formatting.html', title: 'Butterick — Text Formatting', tags: ['book'], desc: 'Direkt umsetzbare Regeln: Punkte, Anführungszeichen, Bindestriche, Spacing. Spart dir 100 Edge-Case-Suchen.' }
        ]
      },
      {
        type: 'checklist', title: 'Intermediate-Checkliste', items: [
          { id: 'i1', label: 'Ich kenne Tracking, Kerning, Leading, Measure' },
          { id: 'i2', label: 'Ich weiß was Vertical Rhythm bedeutet' },
          { id: 'i3', label: 'Ich kann zwei Schriften sinnvoll pairen' },
          { id: 'i4', label: 'Ich nutze 45-75 Zeichen Zeilenlänge' },
          { id: 'i5', label: 'Ich kenne die line-height Sweet-Spot-Range' },
          { id: 'i6', label: 'Ich vermeide Widows und Orphans' }
        ]
      }
    ]
  },

  // ============================================================
  // ADVANCED
  // ============================================================
  advanced: {
    eyebrow: '● ADVANCED · open-ended',
    badge: 'red',
    headline: { plain: 'OpenType & ', gradient: 'Performance' },
    intro: 'Variable Fonts, OpenType Features, font-display, Subsetting. Wie Profis Web-Typografie ausliefern — schnell, schön, accessible.',
    prev: { href: 'intermediate.html', label: '← zurück', title: 'Intermediate · Spacing' },
    next: { href: 'index.html', label: 'geschafft →', title: 'Zur Übersicht' },
    sections: [
      {
        type: 'concept-grid', title: 'OpenType Features', items: [
          { symbol: 'liga', title: 'Standard Ligatures', desc: 'Verschmolzene Buchstabenpaare wie "fi", "fl". CSS: <code>font-variant-ligatures: common-ligatures</code>.' },
          { symbol: 'dlig', title: 'Discretionary Ligatures', desc: 'Schmuckhafte Ligaturen — "st", "ct" alt-style. Stilelement, nicht für Body.' },
          { symbol: 'kern', title: 'Kerning', desc: 'Engine-basiertes Kerning. <code>font-kerning: normal</code>.' },
          { symbol: 'onum', title: 'Old-Style Figures', desc: 'Ziffern mit Auf/Ab-Strichen wie Buchstaben. Schöner in Fließtext: <code>font-variant-numeric: oldstyle-nums</code>.' },
          { symbol: 'tnum', title: 'Tabular Figures', desc: 'Gleich-breite Ziffern. Pflicht für Tabellen/Spalten: <code>font-variant-numeric: tabular-nums</code>.' },
          { symbol: 'smcp', title: 'Small Caps', desc: 'Echte Kapitälchen (Glyph-basiert, nicht skaliert). <code>font-variant-caps: small-caps</code>.' },
          { symbol: 'ss01', title: 'Stylistic Sets', desc: 'Alternative Glyph-Varianten. <code>font-feature-settings: "ss01"</code>. Variable je nach Schrift.' },
          { symbol: 'frac', title: 'Fractions', desc: 'Echte Brüche statt 1/2. <code>font-variant-numeric: diagonal-fractions</code>.' }
        ]
      },
      {
        type: 'concept-grid', title: 'Variable Fonts · ein File für alles', items: [
          { symbol: 'wght', title: 'Weight Axis', desc: 'Stufenlos Gewicht von 100-900. CSS: <code>font-variation-settings: "wght" 450</code> für 450 (zwischen Regular und Medium).' },
          { symbol: 'wdth', title: 'Width Axis', desc: 'Condensed bis Extended in einer Datei. <code>"wdth" 75</code> für condensed.' },
          { symbol: 'slnt', title: 'Slant Axis', desc: 'Italic-Neigung stufenlos. Anders als oblique-italic boolean.' },
          { symbol: 'opsz', title: 'Optical Size', desc: 'Glyph passt sich an Schriftgröße an. Display-Variante bei groß, Text-Variante bei klein.' },
          { symbol: 'GRAD', title: 'Custom Axes', desc: 'Schriften können beliebige Achsen definieren — Roundness, Sharpness, Casual…' },
          { symbol: 'size', title: 'Dateigröße', desc: 'Variable Font ≈ 30-50% Größe von Single-Style-Files × Anzahl Stile. Fast immer Win.' }
        ]
      },
      {
        type: 'concept-grid', title: 'Web-Performance · was wirklich zählt', items: [
          { symbol: 'fd', title: 'font-display', desc: '<code>swap</code> = sofort Fallback, dann tauschen. <code>optional</code> = nur wenn schnell genug. Verhindert "unsichtbarer Text" während Loading.' },
          { symbol: 'pre', title: 'preload', desc: '<code>&lt;link rel="preload" as="font" crossorigin&gt;</code> sagt dem Browser: lade das früh. Für Critical Fonts.' },
          { symbol: 'sub', title: 'Subsetting', desc: 'Nur die Glyphs liefern, die du brauchst. Latin Subset = ~30KB, Full Unicode = 600KB+. Tools: pyftsubset, glyphhanger.' },
          { symbol: 'wf', title: 'WOFF2', desc: 'Modernes Format mit Brotli-Compression. ~30% kleiner als WOFF. Browser-Support: alles seit 2018.' },
          { symbol: 'sys', title: 'System Fonts', desc: '<code>system-ui</code>-Stack: 0 Bytes Download, native OS-Schrift. Für UI/Body oft die schnellste Wahl.' },
          { symbol: 'cls', title: 'Layout Shift', desc: 'Fallback-Font in anderer Größe = Reflow beim Tausch. CSS <code>size-adjust</code> matcht die x-Höhe → kein Shift.' }
        ]
      },
      {
        type: 'interactive', subtype: 'type-specimen', title: 'System-Font-Stacks · 0 Bytes Download',
        config: {
          sample: 'The quick brown fox',
          specimens: [
            { label: 'system-ui (UI-Schrift)', stack: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' },
            { label: 'ui-serif', stack: 'ui-serif, Georgia, Cambria, "Times New Roman", serif' },
            { label: 'ui-monospace', stack: 'ui-monospace, "SF Mono", Consolas, "Courier New", monospace' },
            { label: 'ui-rounded', stack: 'ui-rounded, "SF Pro Rounded", "Hiragino Maru Gothic ProN", sans-serif' }
          ]
        }
      },
      {
        type: 'exercises', title: 'Übungen · Web-Typografie', items: [
          { difficulty: 'medium', title: 'Tabular Numerals einsetzen', task: 'Du baust eine Tabelle mit Preisen wie <code>1.00€, 1234.50€, 99.99€</code>. Welches CSS sorgt dafür, dass die Zahlen sauber untereinander stehen?', solution: 'font-variant-numeric: tabular-nums;', explanation: 'Default-Ziffern sind proportional (1 schmaler als 8). In Tabellen springen die Zahlen dadurch — schwer scanbar. <code>tabular-nums</code> erzwingt Monospaced Ziffern (jede gleich breit). Voraussetzung: Schrift unterstützt das (die meisten modernen tun es).' },
          { difficulty: 'medium', title: 'Font-Display wählen', task: 'Du lädst eine Webfont für die Hero-Headline. Welcher <code>font-display</code> Wert ist meistens richtig?', solution: 'font-display: swap;', explanation: '<code>swap</code> zeigt sofort Fallback, tauscht später. Der User sieht <em>immer</em> Text — kein "Flash of Invisible Text" (FOIT). Trade-off: kurzer "Flash of Unstyled Text" (FOUT). <code>optional</code> ist strenger (nutzt Webfont nur wenn er <100ms da ist) — gut für Performance-besessene Setups, aber dann sieht oft jeder Reload anders aus.' },
          { difficulty: 'hard', title: 'Variable Font einsetzen', task: 'Du nutzt <em>Inter Variable</em>. Body 400, Heading 700, Bold-Inline 600. Wie lädst du das effizient?', solution: 'EINE @font-face mit font-weight: 100 900', explanation: '<code>@font-face { font-family: "Inter"; src: url(...) format("woff2-variations"); font-weight: 100 900; }</code>. Browser kennt die ganze Range mit einer Datei. Im CSS dann <code>font-weight: 400/600/700</code> wie gewohnt — Browser interpoliert. Statt 3-7 separate Files: 1 File, oft kleiner als 2 statische Weights.' },
          { difficulty: 'hard', title: 'Layout Shift verhindern', task: 'Du nutzt Webfont mit <code>font-display: swap</code>. Beim Tausch springt Text um — der Hero verschiebt sich 8px. Lösung?', solution: 'size-adjust + ascent-override im Fallback @font-face', explanation: 'Definiere ein <code>@font-face</code> für den FALLBACK mit angepasstem <code>size-adjust</code>, <code>ascent-override</code>, <code>descent-override</code>. Damit hat der Fallback exakt die gleichen Metrics wie der Webfont. Tools wie <code>fontaine</code> oder Next.js <code>next/font</code> machen das automatisch.' }
        ]
      },
      {
        type: 'placeholders', items: [
          { title: 'Hier könnte deine Übung hin', desc: 'Idee: "Subset selber bauen" — eine Webfont nehmen, mit pyftsubset auf Latin reduzieren, vorher/nachher vergleichen', issueTitle: '[Advanced] Neue Übung: Font Subsetting', issueBody: '**Stufe**: Advanced\n**Thema**: Subsetting, Performance\n\n**Vorschlag**: Hands-on Übung mit pyftsubset oder glyphhanger.\n\n**Aufgabentext**:\n\n**Lösung**:\n\n**Erklärung**:', labels: 'exercise,advanced,typography' },
          { title: 'Hier könnte deine Übung hin', desc: 'Idee: "Lighthouse vor/nach Font-Optimierung" — Performance-Score messen, optimieren, neu messen', issueTitle: '[Advanced] Neue Übung: Lighthouse Font-Optimierung', issueBody: '**Stufe**: Advanced\n**Thema**: Performance-Messung\n\n**Vorschlag**: Übung mit Lighthouse-Audit, Identifikation der Font-Probleme, Fix, Re-Audit.\n\n**Aufgabentext**:\n\n**Lösung**:\n\n**Erklärung**:', labels: 'exercise,advanced,typography' },
          { title: 'Hier könnte deine Übung hin', desc: 'Idee: "OpenType Feature deiner Lieblingsschrift" — `ss01`, `ss02`, … aktivieren und Effekt zeigen', issueTitle: '[Advanced] Neue Übung: Stylistic Sets', issueBody: '**Stufe**: Advanced\n**Thema**: OpenType Features\n\n**Vorschlag**: Übung mit Inter / Recursive / IBM Plex stylistic sets.\n\n**Aufgabentext**:\n\n**Lösung**:\n\n**Erklärung**:', labels: 'exercise,advanced,typography' }
        ]
      },
      {
        type: 'quiz', title: 'Quiz · OpenType & Performance', items: [
          { question: 'Welcher <code>font-display</code> Wert verhindert "unsichtbarer Text" während die Webfont lädt?', options: [{ value: 'a', label: 'block' }, { value: 'b', label: 'swap' }, { value: 'c', label: 'auto' }, { value: 'd', label: 'fallback' }], correct: 'b', feedback: '<code>swap</code> zeigt sofort einen Fallback-Font und tauscht später um — User sieht immer Text. <code>block</code> versteckt Text bis zu 3s (genau das was wir nicht wollen). <code>fallback</code> ist ein Mittelweg, <code>auto</code> ist Browser-Default und meist wie <code>block</code>.' },
          { question: 'Wie groß ist eine durchschnittliche Variable Font im Vergleich zu mehreren statischen Weights?', options: [{ value: 'a', label: 'Doppelt so groß' }, { value: 'b', label: 'Etwa gleich' }, { value: 'c', label: 'Meist 30-50% kleiner als 3+ statische Weights kombiniert' }, { value: 'd', label: 'Variabel — kann nicht verglichen werden' }], correct: 'c', feedback: 'Variable Fonts sind ~30-50% kleiner als die Summe der statischen Pendants. Bei 4+ Weights fast immer Win. Bonus: ein einziger Network-Request statt 4.' },
          { question: 'Wofür ist <code>font-variant-numeric: tabular-nums</code>?', options: [{ value: 'a', label: 'Macht Zahlen kursiv' }, { value: 'b', label: 'Erzwingt gleiche Breite für alle Ziffern (für Tabellen)' }, { value: 'c', label: 'Aktiviert OpenType Brüche' }, { value: 'd', label: 'Kompiliert Zahlen schneller' }], correct: 'b', feedback: 'Default-Ziffern sind proportional. In Tabellen führt das zu "springenden" Zahlen — schlecht scanbar. <code>tabular-nums</code> erzwingt Monospaced Ziffern. Voraussetzung: Schrift hat das Feature (die meisten modernen tun).' }
        ]
      },
      {
        type: 'resources', title: 'Resources · Advanced', items: [
          { url: 'https://web.dev/articles/font-best-practices', title: 'web.dev — Font Best Practices', star: true, tags: ['guide'], desc: 'Google-Doku zu Font-Loading, font-display, preload, subsetting. Pflichtlektüre für Web-Devs.' },
          { url: 'https://v-fonts.com/', title: 'v-fonts.com — Variable Fonts Showcase', star: true, tags: ['playground'], desc: 'Live-Showcase aller Variable Fonts. Spiel mit Achsen, sieh Effekte sofort.' },
          { url: 'https://fonts.google.com/variablefonts', title: 'Google Variable Fonts', tags: ['catalog'], desc: 'Kuratierte Variable Fonts mit Achsen-Doku. Inter, Roboto Flex, Recursive.' },
          { url: 'https://wakamaifondue.com/', title: 'Wakamai Fondue', tags: ['tool'], desc: 'Font-File reinziehen → zeigt alle OpenType Features, Glyphs, Variable Axes. Detective-Tool.' },
          { url: 'https://github.com/zachleat/glyphhanger', title: 'glyphhanger', tags: ['cli'], desc: 'CLI für Subsetting basierend auf den Glyphs, die du wirklich nutzt. Crawlt deine Site und subsettet entsprechend.' },
          { url: 'https://csswizardry.com/2020/05/the-fastest-google-fonts/', title: 'Harry Roberts — The Fastest Google Fonts', tags: ['deep-dive'], desc: 'Performance-Tuning bis zur Schmerzgrenze. Wie Google Fonts <em>richtig</em> einbindet.' }
        ]
      },
      {
        type: 'checklist', title: 'Advanced-Checkliste', items: [
          { id: 'a1', label: 'Ich kenne <code>font-display</code> Werte und wann ich welchen nehme' },
          { id: 'a2', label: 'Ich kann eine Variable Font einbinden mit Weight-Range' },
          { id: 'a3', label: 'Ich nutze <code>tabular-nums</code> in Tabellen' },
          { id: 'a4', label: 'Ich preload Critical Fonts' },
          { id: 'a5', label: 'Ich kenne <code>size-adjust</code> für Layout-Shift-Prevention' },
          { id: 'a6', label: 'Ich kann Webfonts subsetten' },
          { id: 'a7', label: 'Ich nutze System-Font-Stacks wo Webfont nicht nötig ist' }
        ]
      }
    ]
  }
};
