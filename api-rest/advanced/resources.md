# APIs & REST Advanced 🔴

GraphQL, gRPC, WebSockets, und API-Skalierung.

## Themen

| Thema | Was |
|-------|-----|
| GraphQL | Flexible Query-Sprache statt fester Endpoints |
| gRPC | High-Performance RPC über Protocol Buffers |
| WebSockets | Bidirektionale Echtzeit-Verbindung |
| HATEOAS | Hypermedia-driven REST |
| API Gateway | Routing, Auth, Rate-Limiting zentral |
| OpenAPI 3.0 | API-Spec als Vertrag |

## 📚 Ressourcen

1. **[GraphQL Official Docs](https://graphql.org/learn/)** ⭐
2. **[gRPC.io – Quickstart](https://grpc.io/docs/languages/python/quickstart/)**
3. **[Stripe API Docs](https://stripe.com/docs/api)** — Best-Practice Beispiel
4. **[API Security Checklist (GitHub)](https://github.com/shieldfy/API-Security-Checklist)**

## 💡 GraphQL vs REST

```graphql
# GraphQL: Client bestimmt was er bekommt
query {
  user(id: 1) {
    name
    email
    posts { title }
  }
}
```

## 🎯 Checkliste

- [ ] Ich habe eine GraphQL API gebaut
- [ ] Ich verstehe wann gRPC sinnvoll ist
- [ ] Ich kenne API Security Best Practices
- [ ] Ich kann APIs mit OpenAPI dokumentieren
