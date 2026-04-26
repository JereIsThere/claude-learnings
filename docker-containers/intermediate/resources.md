# Docker Intermediate 🟡

Multi-stage Builds, Networking, Volumes, und docker-compose tiefer.

## Konzepte

| Thema | Was |
|-------|-----|
| Multi-stage Build | Kleines finales Image |
| Docker Networks | Container miteinander verbinden |
| Named Volumes | Persistente Daten |
| Health Checks | Container-Zustand überwachen |
| .dockerignore | Build-Context verkleinern |
| Layer Caching | Build-Geschwindigkeit optimieren |

## 📚 Ressourcen

1. **[Docker Docs – Best Practices](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)** ⭐
2. **[Docker Compose – Networking](https://docs.docker.com/compose/networking/)**
3. **[Dive – Image Layer Analyzer](https://github.com/wagoodman/dive)** Tool
4. **[Ivan Velichko – Docker Networking](https://iximiuz.com/en/posts/container-networking-is-simple/)**

## 💡 Multi-stage Dockerfile

```dockerfile
# Build Stage (enthält Dev-Tools)
FROM python:3.12 AS builder
WORKDIR /app
COPY requirements.txt .
RUN pip install --prefix=/install -r requirements.txt

# Final Stage (nur Runtime)
FROM python:3.12-slim
COPY --from=builder /install /usr/local
COPY . .
CMD ["python", "app.py"]
# Resultat: deutlich kleineres Image!
```

## docker-compose mit Networking

```yaml
services:
  web:
    build: .
    ports: ["8000:8000"]
    depends_on: [db]
  db:
    image: postgres:16
    volumes:
      - pgdata:/var/lib/postgresql/data
    environment:
      POSTGRES_PASSWORD: secret

volumes:
  pgdata:
```

## 🎯 Checkliste

- [ ] Ich nutze Multi-stage Builds
- [ ] Ich verstehe Docker Networking (Bridge, Host, None)
- [ ] Ich habe Named Volumes konfiguriert
- [ ] Ich optimiere Layer-Caching in meinen Dockerfiles

## Weiter: [Advanced](../advanced/resources.md)
