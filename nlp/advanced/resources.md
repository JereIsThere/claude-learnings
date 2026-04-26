# NLP Advanced 🔴

Transformers, Fine-Tuning, RAG, und LLM-Infrastruktur.

## Themen

| Thema | Was |
|-------|-----|
| Transformer Architecture | Self-Attention, Multi-Head, Positional Encoding |
| Fine-Tuning | Pre-trained Model auf eigene Daten anpassen |
| RAG | Retrieval-Augmented Generation |
| RLHF | Reinforcement Learning from Human Feedback |
| Vector Databases | Embeddings speichern und suchen |
| Quantization | Modelle kleiner machen für Inference |

## 📚 Ressourcen

1. **[The Illustrated Transformer – Jay Alammar](https://jalammar.github.io/illustrated-transformer/)** ⭐ Muss-Lesen
2. **[HuggingFace – Fine-Tuning Guide](https://huggingface.co/docs/transformers/training)** ⭐
3. **[Andrej Karpathy – Let's build GPT (YouTube)](https://www.youtube.com/watch?v=kCc8FmEb1nY)** ⭐ GPT von Grund auf
4. **[LangChain Docs](https://python.langchain.com/)** RAG in der Praxis

## 💡 Fine-Tuning mit HuggingFace

```python
from transformers import AutoModelForSequenceClassification, Trainer, TrainingArguments

model = AutoModelForSequenceClassification.from_pretrained(
    "bert-base-german-cased", num_labels=2
)

training_args = TrainingArguments(
    output_dir="./results",
    num_train_epochs=3,
    per_device_train_batch_size=16,
    evaluation_strategy="epoch",
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=train_dataset,
    eval_dataset=eval_dataset,
)
trainer.train()
```

## RAG Pipeline

```
User Query → [Embedding Model] → Vector → [Vector DB Search] 
→ Relevante Chunks → [LLM] + Query → Antwort
```

## 🎯 Checkliste

- [ ] Ich verstehe Self-Attention mathematisch
- [ ] Ich habe ein Modell auf eigenen Daten fine-getuned
- [ ] Ich habe eine RAG-Pipeline implementiert
- [ ] Ich kenne den Unterschied BERT vs. GPT-style Modelle
