# Security & Cryptography Intermediate 🟡

Asymmetrische Kryptographie, Zertifikate, und häufige Angriffe.

## Konzepte

| Thema | Was |
|-------|-----|
| RSA | Asymmetrische Verschlüsselung |
| AES | Symmetrische Block-Verschlüsselung |
| HMAC | Hash-basierter Message Auth Code |
| PKI | Public Key Infrastructure |
| X.509 | Zertifikatsformat für HTTPS |
| OWASP Top 10 | Häufigste Web-Schwachstellen |

## 📚 Ressourcen

1. **[Cryptopals Challenges](https://cryptopals.com/)** ⭐ Kryptographie durch Hacking lernen
2. **[OWASP Top 10](https://owasp.org/www-project-top-ten/)** ⭐ Pflichtlektüre
3. **[PortSwigger Web Security Academy](https://portswigger.net/web-security)** ⭐ Gratis, sehr gut
4. **[Serious Cryptography (Buch)](https://nostarch.com/seriouscrypto)** Praxisnah und modern

## 💡 Häufige Angriffe & Gegenmittel

| Angriff | Gegenmittel |
|---------|------------|
| SQL Injection | Prepared Statements |
| XSS | Output escapen, CSP |
| CSRF | CSRF-Token, SameSite Cookie |
| Path Traversal | Input validieren, `os.path.join` |
| Timing Attack | Constant-time Vergleiche |

## Python: sicherer Passwort-Hash

```python
import bcrypt

# Hash erstellen
password = b"mein_passwort"
hashed = bcrypt.hashpw(password, bcrypt.gensalt(rounds=12))

# Vergleichen (constant-time!)
is_valid = bcrypt.checkpw(password, hashed)
```

## 🎯 Checkliste

- [ ] Ich verstehe RSA auf konzeptioneller Ebene
- [ ] Ich kenne alle OWASP Top 10 Schwachstellen
- [ ] Ich nutze bcrypt/argon2 für Passwörter
- [ ] Ich habe mindestens eine Cryptopals Challenge gelöst

## Weiter: [Advanced](../advanced/resources.md)
