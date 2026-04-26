# Computer Vision Advanced 🔴

Vision Transformers, Generative Modelle, und 3D-Vision.

## Themen

| Thema | Was |
|-------|-----|
| ViT (Vision Transformer) | Attention statt Convolutions |
| Diffusion Models | Stable Diffusion Architektur |
| GAN | Generative Adversarial Networks |
| NeRF | 3D-Szenen aus 2D-Bildern |
| Optical Flow | Bewegung zwischen Frames |
| Depth Estimation | Tiefe aus Mono/Stereo |

## 📚 Ressourcen

1. **[Andrej Karpathy – CS231n (Stanford)](http://cs231n.stanford.edu/)** ⭐ Der Klassiker
2. **[The Illustrated ViT – Jay Alammar](https://jalammar.github.io/)** 
3. **[Diffusion Models from Scratch (Blog)](https://huggingface.co/blog/annotated-diffusion)** ⭐ HuggingFace
4. **[Papers With Code – Computer Vision](https://paperswithcode.com/area/computer-vision)**

## 💡 Vision Transformer Idee

```
Bild → Patches (z.B. 16×16 px) → Flatten → Embeddings
→ [Transformer Encoder] → Klassentoken → Klassifikator

Kernidee: Globale Aufmerksamkeit von Anfang an,
          statt lokale Convolutions.
```

## GAN Training-Instabilitäten

```python
# Häufige Probleme:
# Mode Collapse: Generator erzeugt nur eine Art Output
# Gradient Vanishing: Discriminator zu gut
# Lösungen:
# - Wasserstein Loss (WGAN)
# - Spectral Normalization
# - Progressive Growing (ProGAN)
```

## 🎯 Checkliste

- [ ] Ich verstehe Vision Transformers (ViT)
- [ ] Ich kenne den Unterschied CNN vs. ViT
- [ ] Ich habe mit Diffusion Models experimentiert
- [ ] Ich verstehe Optical Flow konzeptionell
