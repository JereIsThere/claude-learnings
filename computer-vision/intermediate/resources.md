# Computer Vision Intermediate 🟡

Object Detection, Transfer Learning, und Daten-Augmentation.

## Konzepte

| Thema | Was |
|-------|-----|
| Transfer Learning | Pre-trained Features nutzen |
| Fine-Tuning | Letzte Schichten anpassen |
| Daten-Augmentation | Training-Daten künstlich vervielfältigen |
| Object Detection | YOLO, Faster R-CNN |
| Segmentation | Pixel-genaue Klassifikation |
| Feature Maps | Aktivierungen in CNN-Layern |

## 📚 Ressourcen

1. **[Fast.ai – Practical Deep Learning (Lektion 1–3)](https://course.fast.ai/)** ⭐ Bester Einstieg
2. **[Roboflow Learn](https://roboflow.com/learn)** ⭐ Object Detection praxisnah
3. **[The Illustrated CNN (Jay Alammar)](https://jalammar.github.io/)** 
4. **[YOLOv8 Docs (Ultralytics)](https://docs.ultralytics.com/)** State-of-the-Art Detection

## 💡 Transfer Learning mit Keras

```python
import tensorflow as tf

# Vortrainiertes Modell laden (ImageNet Weights)
base = tf.keras.applications.MobileNetV3Small(
    include_top=False, weights="imagenet"
)
base.trainable = False  # Features einfrieren

# Eigenen Classifier obendrauf
model = tf.keras.Sequential([
    base,
    tf.keras.layers.GlobalAveragePooling2D(),
    tf.keras.layers.Dense(128, activation='relu'),
    tf.keras.layers.Dense(NUM_CLASSES, activation='softmax')
])
```

## Daten-Augmentation

```python
augment = tf.keras.Sequential([
    tf.keras.layers.RandomFlip("horizontal"),
    tf.keras.layers.RandomRotation(0.1),
    tf.keras.layers.RandomZoom(0.1),
])
```

## 🎯 Checkliste

- [ ] Ich habe Transfer Learning auf eigenen Daten genutzt
- [ ] Ich kenne Daten-Augmentation-Techniken
- [ ] Ich habe YOLO für Object Detection ausprobiert
- [ ] Ich verstehe was Feature Maps visualisieren

## Weiter: [Advanced](../advanced/resources.md)
