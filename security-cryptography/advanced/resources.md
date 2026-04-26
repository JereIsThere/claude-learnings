# Security & Cryptography Advanced 🔴

Zero-Knowledge Proofs, Side-Channel Attacks, Penetration Testing.

## Themen

| Thema | Was |
|-------|-----|
| Zero-Knowledge Proofs | Etwas beweisen ohne es zu enthüllen |
| Side-Channel Attacks | Timing, Power, EM-Seitenkanalangriffe |
| Elliptic Curve Crypto | Modernes, effizientes Pubkey-System |
| Threat Modeling | Systematisch Angriffsvektoren analysieren |
| Fuzzing | Automatisiertes Testen mit zufälligem Input |
| Memory Safety | Buffer Overflows, Use-after-Free |

## 📚 Ressourcen

1. **[Hacking: The Art of Exploitation (Buch)](https://nostarch.com/hacking2.htm)** ⭐ Low-level Exploits
2. **[Pwn.college](https://pwn.college/)** ⭐ Interaktive CTF-Plattform
3. **[The Fuzzing Book](https://www.fuzzingbook.org/)** Kostenlos online
4. **[Dan Boneh – Applied Cryptography (Coursera)](https://www.coursera.org/learn/crypto)** Top-Kurs

## 💡 Buffer Overflow (konzeptionell)

```c
// Verwundbar: kein Bounds-Check
char buffer[8];
strcpy(buffer, user_input);  // user_input > 8 Bytes → Stack Overflow!

// Sicher:
strncpy(buffer, user_input, sizeof(buffer) - 1);
```

## CTF Platforms zum Üben

- **CTFtime.org** — Turnierkalender
- **HackTheBox** — Machines und Challenges
- **PicoCTF** — Einstiegsfreundlich
- **pwn.college** — Fokus auf Binary Exploitation

## 🎯 Checkliste

- [ ] Ich verstehe Elliptic Curve Cryptography konzeptionell
- [ ] Ich habe eine CTF-Challenge gelöst
- [ ] Ich kann ein Threat Model erstellen
- [ ] Ich verstehe was ein Buffer Overflow ist
