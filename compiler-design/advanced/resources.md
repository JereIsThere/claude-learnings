# Compiler Design Advanced 🔴

JIT-Kompilierung, LLVM, und Sprachdesign.

## Themen

| Thema | Was |
|-------|-----|
| JIT Compilation | Just-in-Time: Bytecode → Maschinencode zur Laufzeit |
| GC Algorithms | Mark-and-Sweep, Reference Counting |
| LLVM Backend | Echten Maschinencode erzeugen |
| SSA Form | Static Single Assignment |
| Tracing JIT | HotSpots erkennen und optimieren |
| Coroutines | Kooperatives Multitasking im Compiler |

## 📚 Ressourcen

1. **[LLVM Kaleidoscope Tutorial](https://llvm.org/docs/tutorial/MyFirstLanguageFrontend/)** ⭐ Sprache mit echtem LLVM-Backend
2. **[Engineering a Compiler (Cooper & Torczon)](https://www.elsevier.com/books/engineering-a-compiler/)** Akademisches Standardwerk
3. **[Dragon Book (Compilers: Principles, Techniques, Tools)](https://en.wikipedia.org/wiki/Compilers:_Principles,_Techniques,_and_Tools)** Das Referenzwerk
4. **[V8 Blog (JavaScript Engine)](https://v8.dev/blog)** JIT in der Praxis

## 💡 Warum JIT so schnell ist

```
Interpreter:  Source → [parse] → AST → [evaluate] = langsam
AOT Compiler: Source → [compile] → Binary → [run] = schnell, aber unflexibel
JIT:          Source → Bytecode → [run] → HotSpot detected → [compile to native] → schnell UND flexibel
```

## 🎯 Checkliste

- [ ] Ich verstehe den Unterschied JIT vs. AOT
- [ ] Ich kenne Garbage Collection Algorithmen
- [ ] Ich habe ein LLVM-Tutorial durchgearbeitet
- [ ] Ich verstehe SSA Form und warum sie nützlich ist
