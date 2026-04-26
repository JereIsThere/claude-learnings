# APIs & REST Intermediate 🟡

Authentication, Pagination, Versioning, und API-Design-Prinzipien.

## Konzepte

| Thema | Was |
|-------|-----|
| JWT | Stateless Token-Auth |
| OAuth 2.0 | Delegierte Autorisierung |
| Pagination | Große Datensätze aufteilen |
| Rate Limiting | Anfragen begrenzen |
| API Versioning | `/v1/`, `/v2/` oder Header |
| CORS | Cross-Origin Requests erlauben |

## 📚 Ressourcen

1. **[REST API Design Best Practices (Microsoft)](https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design)** ⭐
2. **[JWT.io – JWT erklärt](https://jwt.io/introduction)**
3. **[OAuth 2.0 Simplified](https://www.oauth.com/)**
4. **[Swagger / OpenAPI Docs](https://swagger.io/docs/)** API dokumentieren

## 💡 JWT Auth Flow

```python
import jwt

# Token erstellen
token = jwt.encode({"user_id": 1}, "secret", algorithm="HS256")

# Token validieren
decoded = jwt.decode(token, "secret", algorithms=["HS256"])
```

## Pagination-Pattern

```python
# Cursor-based (empfohlen für große Datasets)
GET /api/users?cursor=abc123&limit=20

# Offset-based (einfacher, aber langsamer)
GET /api/users?page=2&per_page=20
```

## 🎯 Checkliste

- [ ] Ich kann JWT-Auth implementieren
- [ ] Ich verstehe OAuth 2.0 Flow
- [ ] Ich implementiere sinnvolle Pagination
- [ ] Ich versioniere meine API

## Weiter: [Advanced](../advanced/resources.md)
