# NLP Intermediate 🟡

Word Embeddings, Sequenzmodelle, und Text-Klassifikation.

## Konzepte

| Thema | Was |
|-------|-----|
| Word2Vec / GloVe | Dense Word Embeddings |
| TF-IDF | Term Frequency × Inverse Doc Frequency |
| RNN / LSTM | Sequenzmodelle mit Gedächtnis |
| Attention Mechanism | Wichtige Teile gewichten |
| spaCy | Industriestandard NLP-Library |
| Named Entity Recognition | Personen, Orte, Dinge extrahieren |

## 📚 Ressourcen

1. **[spaCy 101](https://spacy.io/usage/spacy-101)** ⭐ Sofort produktiv
2. **[Stanford NLP Group – GloVe](https://nlp.stanford.edu/projects/glove/)**
3. **[The Illustrated LSTM (Jay Alammar)](https://jalammar.github.io/illustrated-lstm/)** ⭐ Beste Visualisierung
4. **[HuggingFace – NLP Course (Kapitel 1–4)](https://huggingface.co/learn/nlp-course)**

## 💡 Text-Klassifikation mit spaCy

```python
import spacy
from spacy.pipeline.textcat import Config

nlp = spacy.blank("de")

# Named Entity Recognition
nlp = spacy.load("de_core_news_sm")
doc = nlp("Angela Merkel war in Berlin.")

for ent in doc.ents:
    print(f"{ent.text:20} → {ent.label_}")
# Angela Merkel → PER
# Berlin        → LOC
```

## TF-IDF

```python
from sklearn.feature_extraction.text import TfidfVectorizer

docs = ["Der Hund läuft schnell", "Die Katze schläft lang"]
vec = TfidfVectorizer()
X = vec.fit_transform(docs)
# X ist eine Sparse Matrix: Dokumente × Terme
```

## 🎯 Checkliste

- [ ] Ich verstehe Word Embeddings intuitiv
- [ ] Ich kann spaCy für NER nutzen
- [ ] Ich kenne den Attention Mechanism
- [ ] Ich habe einen Text-Classifier gebaut

## Weiter: [Advanced](../advanced/resources.md)
