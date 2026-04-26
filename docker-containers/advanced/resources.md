# Docker Advanced 🔴

Kubernetes, Container Security, und Produktions-Workflows.

## Themen

| Thema | Was |
|-------|-----|
| Kubernetes (K8s) | Container Orchestrierung |
| Helm | K8s Package Manager |
| Container Security | Rootless, Seccomp, AppArmor |
| OCI Standard | Open Container Initiative |
| BuildKit | Moderner Docker Build-Backend |
| Distroless Images | Minimal-Images ohne Shell |

## 📚 Ressourcen

1. **[Kubernetes Docs – Tutorials](https://kubernetes.io/docs/tutorials/)** ⭐
2. **[Play with Kubernetes](https://labs.play-with-k8s.com/)** Kostenlos ausprobieren
3. **[Docker Security Cheat Sheet (OWASP)](https://cheatsheetseries.owasp.org/cheatsheets/Docker_Security_Cheat_Sheet.html)**
4. **[Ivan Velichko – Container Internals](https://iximiuz.com/)** ⭐ Tief und gut

## 💡 K8s Grundstruktur

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
        - name: app
          image: my-app:1.0
          ports:
            - containerPort: 8000
```

## Security Best Practices

- Nie als root laufen (`USER 1000` im Dockerfile)
- Read-only Filesystem wo möglich
- Capabilities droppen (`--cap-drop ALL`)
- Distroless Images nutzen (kein bash, kein sh)

## 🎯 Checkliste

- [ ] Ich kann eine App in Kubernetes deployen
- [ ] Ich verstehe Pods, Deployments, Services
- [ ] Ich führe Container ohne root aus
- [ ] Ich kenne Distroless Images
