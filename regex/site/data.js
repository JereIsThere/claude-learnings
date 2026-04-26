window.TOPIC = {
  id: 'regex',
  title: 'RegEx',
  pages: ['index', 'beginner', 'intermediate', 'advanced'],
  repoUrl: 'https://github.com/JereIsThere/claude-learnings',

  // ============================================================
  // INDEX
  // ============================================================
  index: {
    eyebrow: '// pattern matching mastery',
    badge: 'brand',
    headline: { plain: 'Regular Expressions ', gradient: 'verstehen' },
    intro: 'Vom ersten Metacharacter bis zu catastrophic backtracking. Drei Stufen, eingebauter Tester, Quiz und Übungen — direkt im Browser, ohne Installation.',
    sections: [
      {
        type: 'level-cards', title: 'Lernpfad', items: [
          { level: 'beginner', badge: '● BEGINNER', title: 'Grundlagen', desc: 'Metacharacters, Quantoren, Character Classes. Du schreibst dein erstes Pattern in 10 Minuten.', href: 'beginner.html', arrow: 'Anfangen →' },
          { level: 'intermediate', badge: '● INTERMEDIATE', title: 'Gruppen & Assertions', desc: 'Capturing Groups, Backreferences, Lookahead/Lookbehind. Praktische Patterns für die echte Welt.', href: 'intermediate.html', arrow: 'Weiter →' },
          { level: 'advanced', badge: '● ADVANCED', title: 'Engines & Performance', desc: 'Catastrophic Backtracking, Atomic Groups, ReDoS. Verstehen, was die Engine im Inneren tut.', href: 'advanced.html', arrow: 'Tief rein →' }
        ]
      },
      {
        type: 'info-cards', title: 'Warum überhaupt RegEx?', items: [
          { title: 'Universal', body: 'Funktioniert in jeder Sprache — Python, JavaScript, Go, Rust, Bash, in deinem Editor, in <code>grep</code>, in deiner IDE.' },
          { title: 'Hohe Skill Ceiling', body: 'Easy zu starten, schwer zu meistern. Engines, NFA/DFA, Backtracking — da gibt\'s viel zu lernen.' },
          { title: '100× schneller', body: 'Textverarbeitung, die ohne RegEx 50 Zeilen Code wäre, ist mit Pattern ein 1-Liner.' },
          { title: 'Interview-Klassiker', body: 'Wird regelmäßig in technical interviews abgefragt. Bonus-Punkte, wenn du Performance kennst.' }
        ]
      },
      {
        type: 'interactive', subtype: 'regex-tester', title: 'Live Tester · sofort ausprobieren',
        config: {
          pattern: '\\b\\w+\\b',
          flags: 'g',
          text: 'Hallo, das ist ein Beispieltext mit 42 und 17 als Zahlen.\nProbier verschiedene Patterns: \\d+ findet Zahlen, ^\\w+ das erste Wort jeder Zeile,\nund [A-Z]\\w+ findet großgeschriebene Wörter wie Beispieltext oder Probier.',
          presets: [
            { label: '\\d+ · Zahlen', pattern: '\\d+', flags: 'g' },
            { label: '[A-Z]\\w* · Großgeschrieben', pattern: '\\b[A-Z]\\w*\\b', flags: 'g' },
            { label: '^\\w+ · Wortanfang/Zeile', pattern: '^\\w+', flags: 'gm' },
            { label: 'Email-Pattern', pattern: '\\b\\w+@\\w+\\.\\w+\\b', flags: 'g', text: 'Schick mir \'ne Mail an alice@example.com oder bob@test.org' }
          ]
        }
      },
      {
        type: 'info-cards', title: 'So lernst du am schnellsten', items: [
          { title: '1 · Tester nebenbei', body: 'Lass den Live-Tester offen, während du liest. Wenn ein Pattern erklärt wird, tipp es ein und schau zu.' },
          { title: '2 · Übungen, nicht nur lesen', body: 'Auf jeder Stufe gibt\'s Übungs-Cards mit Lösung. Erst selber probieren, dann aufdecken.' },
          { title: '3 · Quiz zum Check', body: 'Am Ende jeder Stufe Multiple-Choice-Fragen. Wenn du 2 von 3 schaffst, geht\'s eine Stufe weiter.' },
          { title: '4 · Checkliste tickt mit', body: 'Checkliste pro Stufe. Browser merkt sich was du schon kannst — local, kein Login.' }
        ]
      }
    ]
  },

  // ============================================================
  // BEGINNER
  // ============================================================
  beginner: {
    eyebrow: '● BEGINNER · ~2-3 Stunden',
    badge: 'green',
    headline: { plain: 'Erste Patterns ', gradient: 'schreiben' },
    intro: 'Du lernst die wichtigsten Metacharacters, Quantoren und Character Classes. Am Ende kannst du Emails, Telefonnummern und URLs erkennen.',
    prev: { href: 'index.html', label: '← zurück', title: 'Übersicht' },
    next: { href: 'intermediate.html', label: 'weiter →', title: 'Intermediate · Gruppen & Assertions' },
    sections: [
      {
        type: 'concept-grid', title: 'Konzepte · der Werkzeugkasten', items: [
          { symbol: '.', title: 'Beliebiges Zeichen', desc: 'Matched jedes Zeichen außer Newline.', example: '<code>a.c</code> → "abc", "aXc", "a c"' },
          { symbol: '*', title: '0 oder mehr', desc: 'Vorheriges Zeichen beliebig oft (auch nullmal).', example: '<code>ab*c</code> → "ac", "abc", "abbbc"' },
          { symbol: '+', title: '1 oder mehr', desc: 'Vorheriges Zeichen mindestens einmal.', example: '<code>ab+c</code> → "abc", "abbc" (nicht "ac")' },
          { symbol: '?', title: 'Optional', desc: '0 oder 1 mal — macht das Zeichen optional.', example: '<code>colou?r</code> → "color", "colour"' },
          { symbol: '[abc]', title: 'Character Class', desc: 'Eines der Zeichen in der Klammer.', example: '<code>[aeiou]</code> → jeder Vokal' },
          { symbol: '[a-z]', title: 'Range', desc: 'Zeichen-Bereich, hier Kleinbuchstaben.', example: '<code>[0-9]</code> → jede Ziffer' },
          { symbol: '[^x]', title: 'Negation', desc: 'Alles außer den genannten Zeichen.', example: '<code>[^0-9]</code> → alles außer Ziffern' },
          { symbol: '^', title: 'Zeilenanfang', desc: 'Pattern muss am Anfang stehen.', example: '<code>^Hallo</code> → "Hallo Welt" ✓' },
          { symbol: '$', title: 'Zeilenende', desc: 'Pattern muss am Ende stehen.', example: '<code>Welt$</code> → "Hallo Welt" ✓' },
          { symbol: '\\d', title: 'Ziffer', desc: 'Kurzform für <code>[0-9]</code>.', example: '<code>\\d{3}</code> → "123", "456"' },
          { symbol: '\\w', title: 'Wortzeichen', desc: 'Buchstabe, Ziffer oder Unterstrich.', example: '<code>\\w+</code> → "hello_42"' },
          { symbol: '\\s', title: 'Whitespace', desc: 'Leerzeichen, Tab, Newline.', example: '<code>hello\\sworld</code>' }
        ]
      },
      {
        type: 'interactive', subtype: 'regex-tester', title: 'Live Tester · spiel rum',
        config: {
          pattern: '\\d+',
          flags: 'g',
          text: 'Bestellnummer: 4711 vom 23.04.2026\nPreis: 19.99 EUR, Menge: 3 Stück\nKontakt: alice@example.com, +49 30 1234567',
          presets: [
            { label: '\\d+', pattern: '\\d+' },
            { label: '[A-Z]\\w+', pattern: '[A-Z]\\w+' },
            { label: '\\d+\\.\\d+', pattern: '\\d+\\.\\d+' },
            { label: 'Email', pattern: '\\w+@\\w+\\.\\w+' },
            { label: 'Datum DD.MM.YYYY', pattern: '\\d{2}\\.\\d{2}\\.\\d{4}' },
            { label: '^\\w+ (Zeilenanfang)', pattern: '^\\w+', flags: 'gm' }
          ]
        }
      },
      {
        type: 'exercises', title: 'Übungen · erst selber probieren', items: [
          { difficulty: 'easy', title: 'Alle Ziffern finden', task: 'Schreib ein Pattern, das in <code>"Es ist 23 Grad und 5 Vögel sitzen da"</code> beide Zahlen findet.', solution: '\\d+', explanation: '<code>\\d</code> matched eine Ziffer, <code>+</code> sagt "eine oder mehr" — also Zahlen wie 23 oder 5 als Ganzes.' },
          { difficulty: 'easy', title: 'Wörter mit Großbuchstaben', task: 'Finde alle Wörter, die mit einem Großbuchstaben anfangen — z.B. in <code>"Berlin liegt in Deutschland"</code>.', solution: '\\b[A-Z]\\w*', explanation: '<code>\\b</code> ist eine Wortgrenze (sonst würde "ein" das "in" matchen). <code>[A-Z]</code> erzwingt einen Großbuchstaben am Anfang, <code>\\w*</code> nimmt den Rest des Worts mit.' },
          { difficulty: 'medium', title: 'Telefonnummer mit oder ohne Bindestriche', task: 'Pattern, das sowohl <code>030 1234567</code> als auch <code>030-1234567</code> matched, aber kein <code>0301234567</code>.', solution: '\\d{3}[\\s-]\\d+', explanation: '3 Ziffern, dann genau ein Whitespace ODER Bindestrich (Character Class <code>[\\s-]</code>), dann die restlichen Ziffern. Ohne Trennzeichen wird\'s nicht matchen.' },
          { difficulty: 'medium', title: 'Datum DD.MM.YYYY', task: 'Finde Datumsformate wie <code>23.04.2026</code> oder <code>01.12.1999</code>.', solution: '\\d{2}\\.\\d{2}\\.\\d{4}', explanation: 'Wichtig: <code>\\.</code> mit Backslash. Ohne escape würde <code>.</code> jedes Zeichen matchen — also auch "230X2026". Der Punkt muss im RegEx escaped werden, damit er als literaler Punkt zählt.' },
          { difficulty: 'medium', title: 'Einfache Email', task: 'Pattern für eine simple Email wie <code>name@example.com</code>. (Reicht für Übungszwecke — RFC-konform ist Pflicht-Lektüre auf Advanced.)', solution: '\\w+@\\w+\\.\\w+', explanation: 'Naive Variante. Funktioniert für Hausgebrauch, scheitert bei Plus-Aliassen (<code>foo+bar@x.de</code>) und Subdomains. Aber für den Anfang gut genug.' }
        ]
      },
      {
        type: 'placeholders', items: [
          { title: 'Hier könnte deine Übung hin', desc: 'Idee: "Postleitzahl deutsch (5 Ziffern, nicht mit 0 anfangend)" oder "URL ohne Protokoll erkennen"', issueTitle: '[Beginner] Neue Übung: Postleitzahl-Pattern', issueBody: '**Stufe**: Beginner\n**Thema**: Character Classes / Quantoren\n\n**Vorschlag**: Übung für deutsche Postleitzahlen — 5 Ziffern, beginnt nicht mit 0.\n\n**Aufgabentext**:\n\n**Lösung**:\n\n**Erklärung**:', labels: 'exercise,beginner,regex' },
          { title: 'Hier könnte deine Übung hin', desc: 'Idee: "Hex-Farbcode mit oder ohne #" — gut um Optionalität (<code>?</code>) und Character Classes zu üben', issueTitle: '[Beginner] Neue Übung: Hex-Farbcode', issueBody: '**Stufe**: Beginner\n**Thema**: Optional, Character Classes\n\n**Vorschlag**: Übung, die Hex-Farbcodes wie #ff5733 oder ff5733 matched.\n\n**Aufgabentext**:\n\n**Lösung**:\n\n**Erklärung**:', labels: 'exercise,beginner,regex' }
        ]
      },
      {
        type: 'quiz', title: 'Quiz · 2 von 3 reichen für die nächste Stufe', items: [
          { question: 'Welches Pattern matched "abc", "abbc" UND "abbbc", aber nicht "ac"?', options: [{ value: 'a', label: 'ab*c' }, { value: 'b', label: 'ab+c' }, { value: 'c', label: 'ab?c' }, { value: 'd', label: 'a.c' }], correct: 'b', feedback: '* erlaubt 0 mal (matched also auch "ac"). + verlangt mindestens 1 — genau das was wir brauchen.' },
          { question: 'Was ist der Unterschied zwischen <code>.</code> und <code>\\.</code> im Pattern?', options: [{ value: 'a', label: 'Kein Unterschied — Punkt ist Punkt' }, { value: 'b', label: '. matched nur Großbuchstaben, \\. matched alles' }, { value: 'c', label: '. matched jedes Zeichen, \\. matched nur den literalen Punkt' }, { value: 'd', label: '\\. ist Syntax-Fehler' }], correct: 'c', feedback: 'Der Backslash escapt Metacharacters und macht sie zu literalen Zeichen. Ohne Backslash ist . ein Wildcard.' },
          { question: 'Welches Pattern findet alle Wörter, die NICHT mit einer Ziffer anfangen?', options: [{ value: 'a', label: '\\b\\w+\\b' }, { value: 'b', label: '\\b\\d\\w*\\b' }, { value: 'c', label: '^\\d\\w*' }, { value: 'd', label: '\\b[^\\d\\W]\\w*\\b' }], correct: 'd', feedback: '[^\\d\\W] ist die negierte Klasse — kein Digit, kein Non-Word — also bleiben Buchstaben/Underscore. Variante (a) matched alles inklusive Ziffern-Wörter.' }
        ]
      },
      {
        type: 'resources', title: 'Kuratierte Resources · die mit Stern zuerst', items: [
          { url: 'https://regex101.com/', title: 'regex101.com', star: true, tags: ['interactive'], desc: 'Der Standard. Live-Tester mit Erklärung jedes Tokens, Sprachauswahl, Quick Reference. Lass das ständig offen.' },
          { url: 'https://regexr.com/', title: 'regexr.com', tags: ['interactive'], desc: 'Visueller Pattern-Builder, Cheatsheet eingebaut. Gut wenn du eher visuell denkst.' },
          { url: 'https://regexone.com/', title: 'regexone.com', star: true, tags: ['tutorial'], desc: 'Progressive Lessons mit sofortigem Feedback. Perfekter Sparringpartner für die ersten Tage.' },
          { url: 'https://www.youtube.com/watch?v=ZfQFUJhPqMM', title: 'freeCodeCamp RegEx (1h Video)', tags: ['video'], desc: 'Wenn du lieber jemanden zuhörst. Solide Einführung, deckt alle Beginner-Themen ab.' },
          { url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions', title: 'MDN — Regular Expressions Guide', tags: ['reference'], desc: 'Saubere Referenz für JavaScript. Bookmark.' }
        ]
      },
      {
        type: 'checklist', title: 'Beginner-Checkliste · merkt sich dein Browser', items: [
          { id: 'b1', label: 'Ich verstehe <code>.</code>, <code>*</code>, <code>+</code>, <code>?</code> Quantoren' },
          { id: 'b2', label: 'Ich kann Character Classes <code>[abc]</code> und Ranges <code>[a-z]</code> nutzen' },
          { id: 'b3', label: 'Ich kenne <code>^</code> und <code>$</code> als Anker' },
          { id: 'b4', label: 'Ich nutze <code>\\d</code>, <code>\\w</code>, <code>\\s</code> als Kurzformen' },
          { id: 'b5', label: 'Ich kann eine einfache Email-Validation schreiben' },
          { id: 'b6', label: 'Ich habe Patterns auf regex101.com getestet' },
          { id: 'b7', label: 'Ich weiß warum <code>\\.</code> escaped werden muss' }
        ]
      }
    ]
  },

  // ============================================================
  // INTERMEDIATE
  // ============================================================
  intermediate: {
    eyebrow: '● INTERMEDIATE · ~3-4 Stunden',
    badge: 'yellow',
    headline: { plain: 'Gruppen, ', gradient: 'Assertions, echte Patterns' },
    intro: 'Capturing Groups, Backreferences, Lookahead und Lookbehind. Hier hört "Spielzeug" auf — du kannst jetzt parsen, validieren und transformieren.',
    prev: { href: 'beginner.html', label: '← zurück', title: 'Beginner · Grundlagen' },
    next: { href: 'advanced.html', label: 'weiter →', title: 'Advanced · Engines & Performance' },
    sections: [
      {
        type: 'concept-grid', title: 'Konzepte · Gruppen & Assertions', items: [
          { symbol: '(...)', title: 'Capturing Group', desc: 'Gruppiert UND merkt sich den Match. Per Index abrufbar (\\1, \\2, …).', example: '<code>(\\d+)-(\\d+)</code>' },
          { symbol: '(?:...)', title: 'Non-capturing Group', desc: 'Gruppiert OHNE zu merken. Schneller, sauberer wenn du den Wert nicht brauchst.', example: '<code>(?:https?)://</code>' },
          { symbol: '(?&lt;name&gt;...)', title: 'Named Group', desc: 'Wie Capturing Group, aber per Name ansprechbar. Lesbarer in komplexen Patterns.', example: '<code>(?&lt;year&gt;\\d{4})</code>' },
          { symbol: '\\1 \\2', title: 'Backreference', desc: 'Verweist auf eine vorher gecapturte Gruppe — der gleiche Text muss nochmal kommen.', example: '<code>(\\w+) \\1</code> → "the the"' },
          { symbol: 'a|b', title: 'Alternation', desc: 'Entweder a ODER b. Wirkt auf die ganze Umgebung — fast immer mit Group klammern.', example: '<code>(cat|dog|fish)</code>' },
          { symbol: '(?=...)', title: 'Positive Lookahead', desc: '"Es muss DANACH X folgen" — aber X wird nicht konsumiert.', example: '<code>\\d+(?=€)</code> → 19 in "19€"' },
          { symbol: '(?!...)', title: 'Negative Lookahead', desc: '"Danach darf KEIN X folgen".', example: '<code>foo(?!bar)</code>' },
          { symbol: '(?&lt;=...)', title: 'Positive Lookbehind', desc: '"Davor muss X stehen" — auch nicht konsumiert.', example: '<code>(?&lt;=€)\\d+</code>' },
          { symbol: '(?&lt;!...)', title: 'Negative Lookbehind', desc: '"Davor darf KEIN X stehen".', example: '<code>(?&lt;!\\$)\\d+</code>' },
          { symbol: '{n,m}', title: 'Anzahl-Range', desc: 'Mindestens n, höchstens m Wiederholungen.', example: '<code>\\d{3,5}</code> → "123" bis "12345"' },
          { symbol: '*?', title: 'Lazy Quantor', desc: 'Greedy by default — <code>?</code> macht\'s lazy (so wenig wie möglich).', example: '<code>&lt;.*?&gt;</code> → einzelne Tags' },
          { symbol: '\\b', title: 'Wortgrenze', desc: 'Position zwischen Wort- und Nicht-Wort-Zeichen. Kein eigentliches Zeichen.', example: '<code>\\bword\\b</code>' }
        ]
      },
      {
        type: 'code-showcase', title: 'Greedy vs. Lazy · der Klassiker',
        caption: 'Standard-Quantoren sind <strong>greedy</strong> — sie nehmen so viel wie möglich. <code>.*</code> in <code>"&lt;a&gt;text&lt;/a&gt;"</code> matched alles bis zum letzten <code>&gt;</code>. Mit <code>.*?</code> wird der Quantor lazy: stoppt beim ersten möglichen Match.',
        code: '// Greedy — matched "<a>text</a>" als Ganzes\n<.*>\n\n// Lazy — matched "<a>" und "</a>" einzeln\n<.*?>'
      },
      {
        type: 'interactive', subtype: 'regex-tester', title: 'Live Tester · Lookarounds testen',
        config: {
          pattern: '(\\w+)\\s+\\1',
          flags: 'gi',
          text: 'Das ist ist ein doppeltes Wort.\nHier kostet das Brot 4€ und die Milch 2€, der Käse 8 EUR.\nEmail: alice@beispiel.de und bob@firma.com bitte filtern.\n<div class="x">Hallo</div><span>Welt</span>',
          presets: [
            { label: 'Doppelte Wörter', pattern: '(\\w+)\\s+\\1', flags: 'gi' },
            { label: 'Zahl vor €', pattern: '\\d+(?=€)', flags: 'g' },
            { label: 'Domain (lookbehind)', pattern: '(?<=@)\\w+', flags: 'g' },
            { label: 'Tags lazy', pattern: '<.*?>', flags: 'g' },
            { label: 'Tags greedy', pattern: '<.*>', flags: 'g' },
            { label: 'Alternation', pattern: '(?:cat|dog|fish)', flags: 'gi' }
          ]
        }
      },
      {
        type: 'exercises', title: 'Übungen · jetzt wird\'s praktisch', items: [
          { difficulty: 'easy', title: 'Doppelte Wörter erkennen', task: 'Finde im Satz <code>"das ist ist ein Test test test"</code> alle aufeinanderfolgenden Wort-Wiederholungen.', solution: '\\b(\\w+)\\s+\\1\\b', explanation: 'Capture ein Wort, dann erwarte ein Whitespace, dann genau das gleiche Wort nochmal über <code>\\1</code>. <code>\\b</code> sorgt dafür, dass nur ganze Wörter matchen.' },
          { difficulty: 'medium', title: 'Preis vor Euro-Zeichen', task: 'In <code>"Brot 4€, Wein 19€, Saft 2€"</code> nur die Zahlen extrahieren — ohne das €.', solution: '\\d+(?=€)', explanation: 'Lookahead: matched die Zahl nur wenn DANACH ein € steht. Das € wird aber nicht Teil des Matches — perfekt fürs Extrahieren.' },
          { difficulty: 'medium', title: 'Domain aus Email', task: 'Aus <code>"alice@example.com"</code> nur <code>"example.com"</code> extrahieren — ohne <code>@</code>.', solution: '(?<=@)[\\w.]+', explanation: 'Lookbehind: matched nur wenn DAVOR ein @ steht. Der Match selbst startet nach dem @. <code>[\\w.]+</code> erlaubt auch Subdomains wie "mail.example.com".' },
          { difficulty: 'medium', title: 'HTML-Tag Inhalt', task: 'Aus <code>"&lt;b&gt;hi&lt;/b&gt;&lt;i&gt;you&lt;/i&gt;"</code> jeweils Tag-Name UND Inhalt als Gruppen capturen.', solution: '&lt;(\\w+)&gt;(.*?)&lt;/\\1&gt;', explanation: 'Group 1 captured den Tagnamen, Group 2 den Inhalt (lazy, sonst greedy bis zum letzten Tag). Backreference <code>\\1</code> sorgt dafür, dass der Schluss-Tag zum Öffnungs-Tag passt.' },
          { difficulty: 'hard', title: 'Passwort-Validierung mit Lookaheads', task: 'Pattern, das eine Zeile als gültiges Passwort matched: mindestens 8 Zeichen, mindestens eine Ziffer, mindestens ein Großbuchstabe.', solution: '^(?=.*\\d)(?=.*[A-Z]).{8,}$', explanation: 'Klassisches Pattern. Drei Anker am Anfang: <code>^</code> für Start, dann zwei Lookaheads die unabhängig prüfen ob Ziffer und Großbuchstabe vorkommen, dann <code>.{8,}</code> für die Mindestlänge, <code>$</code> als Abschluss. Lookaheads sind hier essenziell — du kannst nicht "Ziffer UND Großbuchstabe IRGENDWO" sequenziell prüfen.' }
        ]
      },
      {
        type: 'placeholders', items: [
          { title: 'Hier könnte deine Übung hin', desc: 'Idee: "Markdown-Link <code>[text](url)</code> in Text und URL aufsplitten" — gut für Named Groups', issueTitle: '[Intermediate] Neue Übung: Markdown-Link parsen', issueBody: '**Stufe**: Intermediate\n**Thema**: Capturing Groups, Named Groups\n\n**Vorschlag**: Übung, die aus einem Markdown-Link [Text](https://url.de) den Text und die URL als getrennte Gruppen extrahiert.\n\n**Aufgabentext**:\n\n**Lösung**:\n\n**Erklärung**:', labels: 'exercise,intermediate,regex' },
          { title: 'Hier könnte deine Übung hin', desc: 'Idee: "IBAN ohne Leerzeichen erkennen" — Alternation, Quantoren, fixe Längen', issueTitle: '[Intermediate] Neue Übung: IBAN-Pattern', issueBody: '**Stufe**: Intermediate\n**Thema**: Anker, Quantoren, Alternation\n\n**Vorschlag**: Übung für deutsche/europäische IBAN.\n\n**Aufgabentext**:\n\n**Lösung**:\n\n**Erklärung**:', labels: 'exercise,intermediate,regex' },
          { title: 'Hier könnte deine Übung hin', desc: 'Idee: "Log-Zeile parsen — Timestamp, Level, Message" — mehrere Named Groups in einem Pattern', issueTitle: '[Intermediate] Neue Übung: Log-Parser', issueBody: '**Stufe**: Intermediate\n**Thema**: Named Groups, Komposition\n\n**Vorschlag**: Übung, die eine Log-Zeile wie \'2026-04-26 12:34:56 ERROR Database failed\' in Timestamp, Level und Message zerlegt.\n\n**Aufgabentext**:\n\n**Lösung**:\n\n**Erklärung**:', labels: 'exercise,intermediate,regex' }
        ]
      },
      {
        type: 'quiz', title: 'Quiz · check ob du Lookarounds verstanden hast', items: [
          { question: 'Welches Pattern matched die Zahl in <code>"19€"</code> ohne das € selbst mit zu nehmen?', options: [{ value: 'a', label: '\\d+€' }, { value: 'b', label: '\\d+(?=€)' }, { value: 'c', label: '(?<=€)\\d+' }, { value: 'd', label: '€\\d+' }], correct: 'b', feedback: 'Positive Lookahead schaut nach vorne und konsumiert nicht. Variante (a) würde 19€ ganz matchen. (c) wäre Lookbehind und würde das € VOR der Zahl erwarten.' },
          { question: 'Was matched <code>(\\w+)\\s+\\1</code>?', options: [{ value: 'a', label: 'Zwei beliebige Wörter' }, { value: 'b', label: 'Ein Wort gefolgt von Whitespace' }, { value: 'c', label: 'Ein Wort, das direkt darauf wiederholt wird' }, { value: 'd', label: 'Beliebigen Text mit Backslash drin' }], correct: 'c', feedback: '\\1 ist Backreference auf die erste Capturing Group. Es muss buchstäblich der gleiche Text nochmal kommen — z.B. "das das" oder "the the".' },
          { question: 'Wann nimmst du <code>(?:...)</code> statt <code>(...)</code>?', options: [{ value: 'a', label: 'Wenn du nur gruppieren willst, den Wert aber nicht brauchst' }, { value: 'b', label: 'Wenn das Pattern case-insensitive sein soll' }, { value: 'c', label: 'Wenn du eine Backreference willst' }, { value: 'd', label: 'Wenn du Lookahead brauchst' }], correct: 'a', feedback: 'Non-capturing Groups sind sauberer und minimal schneller, weil die Engine den Match nicht speichern muss. Backreferences gehen damit nicht — dafür brauchst du normale ().' }
        ]
      },
      {
        type: 'resources', title: 'Resources · vertiefend', items: [
          { url: 'https://regex101.com/', title: 'regex101.com — mit "Groups" Panel', star: true, tags: ['interactive'], desc: 'Achte auf das Group-Panel rechts — zeigt was jede Capturing Group gefangen hat. Unschätzbar zum Debuggen.' },
          { url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges', title: 'MDN — Groups and Ranges', tags: ['reference'], desc: 'Saubere Erklärung Capturing vs. Non-Capturing, mit JS-Beispielen.' },
          { url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Lookahead_assertion', title: 'MDN — Lookaround Assertions', tags: ['reference'], desc: 'Alle vier Assertion-Typen mit kleinen Snippets. Kurz und auf den Punkt.' },
          { url: 'https://www.regular-expressions.info/lookaround.html', title: 'regular-expressions.info — Lookaround', tags: ['deep-dive'], desc: 'Tiefer Einstieg ins Thema, inklusive Engine-Unterschiede zwischen Sprachen.' }
        ]
      },
      {
        type: 'checklist', title: 'Intermediate-Checkliste', items: [
          { id: 'i1', label: 'Ich verstehe den Unterschied <code>(...)</code> vs. <code>(?:...)</code>' },
          { id: 'i2', label: 'Ich kann Backreferences <code>\\1</code>, <code>\\2</code> nutzen' },
          { id: 'i3', label: 'Ich weiß wann Lookahead vs. Lookbehind passt' },
          { id: 'i4', label: 'Ich kenne den Unterschied greedy <code>.*</code> vs. lazy <code>.*?</code>' },
          { id: 'i5', label: 'Ich kann mehrere Werte mit Named Groups extrahieren' },
          { id: 'i6', label: 'Ich habe ein Passwort-Pattern mit zwei Lookaheads geschrieben' }
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
    headline: { plain: 'Engines, ', gradient: 'Backtracking, ReDoS' },
    intro: 'Du kennst Patterns. Jetzt verstehst du WIE die Engine arbeitet — warum manche Patterns hängen, was Atomic Groups tun, und wieso ein RegEx ein DoS-Vektor sein kann.',
    prev: { href: 'intermediate.html', label: '← zurück', title: 'Intermediate · Gruppen & Assertions' },
    next: { href: 'index.html', label: 'geschafft →', title: 'Zur Übersicht' },
    sections: [
      {
        type: 'concept-grid', title: 'Konzepte · was unter der Haube passiert', items: [
          { symbol: 'NFA', title: 'Non-deterministic Engine', desc: 'Was die meisten Sprachen nutzen (Python, JS, PCRE). Probiert Pfade durch, kann backtracken — flexibel, aber potentiell langsam.' },
          { symbol: 'DFA', title: 'Deterministic Engine', desc: 'Eine Position → ein Zustand. Linear in Eingabelänge, kein Backtracking — aber kein Backreferences/Lookbehind. Verwendet u.a. in <code>grep</code>, <code>RE2</code>.' },
          { symbol: '(?&gt;...)', title: 'Atomic Group', desc: 'Match wird "festgehalten" — Engine vergisst das Backtracking in dieser Gruppe. Direkter Performance-Hebel.' },
          { symbol: 'a++', title: 'Possessive Quantor', desc: 'Wie greedy, aber gibt nichts zurück. <code>++</code>, <code>*+</code>, <code>?+</code>. Funktioniert in PCRE/Java, nicht in JS-Standard.' },
          { symbol: '(?R)', title: 'Recursion (PCRE)', desc: 'Pattern ruft sich selbst auf. Zum Matchen verschachtelter Strukturen — z.B. balancierte Klammern.' },
          { symbol: '(?i)', title: 'Inline Flags', desc: 'Flags mitten im Pattern. <code>(?i)abc</code> = case-insensitive ab dieser Stelle. Schaltbar mit <code>(?-i)</code>.' },
          { symbol: '\\K', title: 'Match-Reset (PCRE)', desc: 'Vergisst alles vor <code>\\K</code>. Ähnlich wie Lookbehind, aber ohne Längenbeschränkung. JS-fremd.' },
          { symbol: '\\p{...}', title: 'Unicode Properties', desc: 'Matched nach Unicode-Eigenschaft, z.B. <code>\\p{L}</code> = jeder Buchstabe weltweit. Braucht Unicode-Mode (<code>u</code>).' }
        ]
      },
      {
        type: 'code-showcase', title: 'Catastrophic Backtracking · der Killer',
        caption: 'Manche Patterns explodieren. Dieses Pattern hängt deinen Browser für mehrere Sekunden bei einer Eingabe von 25 a\'s — die Engine probiert <em>exponentiell viele</em> Aufteilungen, bevor sie aufgibt.',
        code: '// Worst case: O(2^n)\n(a+)+b\n\n// Eingabe: aaaaaaaaaaaaaaaaaaaaaaaaa (25 a\'s, kein b)\n// → Engine probiert alle möglichen Aufteilungen der a\'s\n//   auf die zwei nested Quantoren\n\n// Lösung A · Atomic Group\n(?>a+)+b      // matched in O(n)\n\n// Lösung B · Possessive Quantor (PCRE/Java)\n(a++)+b\n\n// Lösung C · Pattern umschreiben\na+b           // oft reicht\'s, die nested Struktur zu vermeiden'
      },
      {
        type: 'interactive', subtype: 'regex-tester', title: 'Live Tester · probiers selbst (vorsichtig!)',
        warning: '⚠ Der Tester nutzt JS-RegExp im Browser. Pattern wie <code>(a+)+b</code> mit ~30 a\'s <strong>frieren deinen Tab ein</strong>. Probier mit kleinen Eingaben — z.B. 15 a\'s, dann hochzählen. Wenn\'s hängt: Tab schließen.',
        config: {
          pattern: '(a+)+b',
          flags: '',
          text: 'aaaaaaaaaaaaaaab\naaaaaaaaaaaaaaa',
          presets: [
            { label: 'Vulnerable + Match', pattern: '(a+)+b', text: 'aaaaaaaaaaaaaaab' },
            { label: 'Vulnerable + No-Match (langsam!)', pattern: '(a+)+b', text: 'aaaaaaaaaaaaaaa' },
            { label: 'Sicher umgeschrieben', pattern: 'a+b', text: 'aaaaaaaaaaaaaaa' },
            { label: 'Unicode \\p{L}', pattern: '\\p{L}+', flags: 'gu', text: 'Hallo café 北京 résumé 한글' }
          ]
        }
      },
      {
        type: 'info-cards', title: 'Engine-Unterschiede · was wo geht', items: [
          { title: 'JavaScript', body: 'Lookbehind ja (variabler Länge seit ES2018), Atomic Groups <em>nicht standardmäßig</em>, Possessive Quantoren <em>nein</em>, Recursion <em>nein</em>. Unicode-Mode mit <code>u</code>-Flag.' },
          { title: 'Python <code>re</code>', body: 'Lookbehind nur fixe Länge. Possessive Quantoren seit Python 3.11. Modul <code>regex</code> (PyPI) bringt fast alles dazu, was PCRE hat.' },
          { title: 'PCRE / PHP / Perl', body: 'Das volle Programm. Atomic Groups, Possessive Quantoren, Recursion, <code>\\K</code>. Auch das was am leichtesten zu missbrauchen ist.' },
          { title: 'RE2 / Go / grep', body: 'DFA-basiert. Linear in Eingabelänge, <strong>kann nicht catastrophic backtracken</strong>. Im Gegenzug: kein Backreferences, kein Lookbehind.' }
        ]
      },
      {
        type: 'exercises', title: 'Übungen · Performance & Edge Cases', items: [
          { difficulty: 'medium', title: 'Vulnerables Pattern fixen', task: 'Das Pattern <code>(a|aa)+b</code> ist anfällig für catastrophic backtracking. Schreib\'s so um, dass es immer in linearer Zeit matched.', solution: 'a+b', explanation: 'Das Original ist redundant — <code>a|aa</code> in einer Schleife produziert exponentiell viele Aufteilungen für die gleiche Eingabe. <code>a+b</code> tut dasselbe deterministisch. Faustregel: <strong>überlappende Alternativen unter einem Quantor → Gefahr</strong>.' },
          { difficulty: 'hard', title: 'Email validieren — robust', task: 'Schreib ein Pattern für Emails wie <code>foo+bar@sub.domain.co.uk</code>, das nicht durch ungültige Aufteilungen explodiert.', solution: '^[\\w.+-]+@[\\w-]+(?:\\.[\\w-]+)+$', explanation: 'Wichtig: keine nested Quantoren mit überlappenden Alternativen. <code>(?:\\.[\\w-]+)+</code> erzwingt mindestens eine TLD und ist atomic-ähnlich strukturiert: jeder Iteration konsumiert mindestens einen Punkt. RFC-konform ist das immer noch nicht — das ist <em>tatsächlich</em> ein paar hundert Zeilen Pattern. Für 99% der Fälle reicht das.' },
          { difficulty: 'hard', title: 'Balancierte Klammern (PCRE)', task: 'In PCRE: schreib ein Pattern, das einen Klammer-Ausdruck mit beliebig tiefer Verschachtelung matched, z.B. <code>(a(b(c)d)e)</code>.', solution: '\\(([^()]|(?R))*\\)', explanation: '<code>(?R)</code> ist Recursion auf das gesamte Pattern. Innen erlauben wir entweder Nicht-Klammer-Zeichen ODER ein rekursiv geöffnetes Klammerpaar. In JS gibt\'s das so nicht — für balancierte Klammern brauchst du dort einen kleinen Stack-Parser.' },
          { difficulty: 'hard', title: 'ReDoS in Realität', task: 'Welches berühmte JavaScript-Package hatte 2017 einen ReDoS-Bug, weil sein Header-Parsing-RegEx bei langen Strings hängen blieb? (Hint: HTTP)', solution: 'ms / moment.js', explanation: '<strong>moment.js</strong> hatte mehrere ReDoS-Bugs (CVE-2017-18214 u.a.) im Date-Parsing. <strong>ms</strong> in <strong>express</strong>/<strong>body-parser</strong> hatte ähnliche Probleme im Header-Parsing. Lehre: ungeprüfte User-Eingabe in greedy Patterns mit nested Quantoren ist eine DoS-Lücke.' }
        ]
      },
      {
        type: 'placeholders', items: [
          { title: 'Hier könnte deine Übung hin', desc: 'Idee: "JSON-String robust matchen mit korrektem Escape-Handling" — kniffliger als gedacht', issueTitle: '[Advanced] Neue Übung: JSON-String parsen', issueBody: '**Stufe**: Advanced\n**Thema**: Escape-Handling, Edge Cases\n\n**Vorschlag**: Übung, die einen JSON-String mit korrekt escapten Quotes und Backslashes matched, ohne in Catastrophic Backtracking zu rutschen.\n\n**Aufgabentext**:\n\n**Lösung**:\n\n**Erklärung**:', labels: 'exercise,advanced,regex' },
          { title: 'Hier könnte deine Übung hin', desc: 'Idee: "RE2 vs PCRE — gleiche Aufgabe in beiden Engines lösen und Performance vergleichen"', issueTitle: '[Advanced] Neue Übung: RE2 vs PCRE Vergleich', issueBody: '**Stufe**: Advanced\n**Thema**: Engine-Unterschiede, Performance\n\n**Vorschlag**: Übung mit gleicher Aufgabe in RE2 (Go/Python re2) und PCRE (Python regex) — Laufzeit messen.\n\n**Aufgabentext**:\n\n**Lösung**:\n\n**Erklärung**:', labels: 'exercise,advanced,regex' },
          { title: 'Hier könnte deine Übung hin', desc: 'Idee: "Eigenes Mini-Pattern-Tool: vulnerable RegEx aus npm-Paket finden und melden"', issueTitle: '[Advanced] Neue Übung: ReDoS in npm-Paketen finden', issueBody: '**Stufe**: Advanced\n**Thema**: Security, statische Analyse\n\n**Vorschlag**: Übung mit safe-regex / vuln-regex-detector — vulnerable Patterns in echten npm-Paketen aufspüren.\n\n**Aufgabentext**:\n\n**Lösung**:\n\n**Erklärung**:', labels: 'exercise,advanced,regex,security' }
        ]
      },
      {
        type: 'quiz', title: 'Quiz · letzte Hürde', items: [
          { question: 'Warum hängt <code>(a+)+b</code> bei der Eingabe "aaaaaaaaaaaaaaaaaaaa" (kein b)?', options: [{ value: 'a', label: 'Weil die Engine in eine Endlosschleife gerät' }, { value: 'b', label: 'Weil sie alle exponentiell vielen Aufteilungen der a\'s durchprobiert, bevor sie aufgibt' }, { value: 'c', label: 'Weil + immer langsam ist' }, { value: 'd', label: 'Weil JavaScript RegEx kaputt ist' }], correct: 'b', feedback: 'Klassisches catastrophic backtracking. Die zwei nested Quantoren produzieren O(2^n) viele Aufteilungen. Erst wenn alle versagen, gibt die Engine auf.' },
          { question: 'Welche Engine kann garantiert NICHT catastrophic backtracken?', options: [{ value: 'a', label: 'PCRE' }, { value: 'b', label: 'JavaScript' }, { value: 'c', label: 'RE2 (Go)' }, { value: 'd', label: 'Python re' }], correct: 'c', feedback: 'RE2 ist DFA-basiert: linear in Eingabelänge, kein Backtracking. Trade-off: kein Backreferences, kein Lookbehind.' },
          { question: 'Was bewirkt eine Atomic Group <code>(?>a+)</code>?', options: [{ value: 'a', label: 'Match wird festgehalten — Engine vergisst Backtracking-Punkte in der Gruppe' }, { value: 'b', label: 'Macht das Pattern case-insensitive' }, { value: 'c', label: 'Schaltet Recursion ein' }, { value: 'd', label: 'Verhindert Capturing' }], correct: 'a', feedback: 'Atomic Groups sind das wichtigste Werkzeug gegen catastrophic backtracking — sie schneiden den Suchbaum drastisch.' }
        ]
      },
      {
        type: 'resources', title: 'Resources · zum Eintauchen', items: [
          { url: 'https://www.regular-expressions.info/catastrophic.html', title: 'Catastrophic Backtracking erklärt', star: true, tags: ['essential'], desc: 'DIE Referenz zum Thema. Wenn du nur einen Link liest, dann den.' },
          { url: 'https://owasp.org/www-community/attacks/Regular_expression_Denial_of_Service_-_ReDoS', title: 'OWASP — ReDoS', star: true, tags: ['security'], desc: 'Wenn du Code schreibst, der User-Eingabe matched: Pflichtlektüre. Erklärt Angriffsmuster und Mitigation.' },
          { url: 'https://swtch.com/~rsc/regexp/regexp1.html', title: 'Russ Cox — "Regular Expression Matching Can Be Simple And Fast"', star: true, tags: ['deep-dive'], desc: 'Klassisches Paper, das den DFA-Approach von RE2 erklärt. Lang, aber jedes Wort wert.' },
          { url: 'https://github.com/google/re2/wiki/Syntax', title: 'RE2 Syntax Reference', tags: ['reference'], desc: 'Was geht in DFA-Engines, was nicht. Hilft beim Verständnis der Trade-offs.' },
          { url: 'https://www.regular-expressions.info/', title: 'regular-expressions.info', tags: ['reference'], desc: 'Komplette Referenz für alles RegEx. Bookmark, ständig zurück.' }
        ]
      },
      {
        type: 'checklist', title: 'Advanced-Checkliste', items: [
          { id: 'a1', label: 'Ich kann erklären was catastrophic backtracking auslöst' },
          { id: 'a2', label: 'Ich erkenne anfällige Patterns auf einen Blick' },
          { id: 'a3', label: 'Ich nutze Atomic Groups bzw. Possessive Quantoren wenn passend' },
          { id: 'a4', label: 'Ich kenne den Unterschied NFA vs. DFA' },
          { id: 'a5', label: 'Ich habe ein anfälliges Pattern umgeschrieben' },
          { id: 'a6', label: 'Ich kenne ReDoS und seine Sicherheitsimplikationen' },
          { id: 'a7', label: 'Ich weiß was Unicode-Properties wie <code>\\p{L}</code> tun' }
        ]
      }
    ]
  }
};
