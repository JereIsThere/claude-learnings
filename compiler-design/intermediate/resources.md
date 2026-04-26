# Compiler Design Intermediate 🟡

Semantic Analysis, Code Generation, und Virtual Machines.

## Konzepte

| Thema | Was |
|-------|-----|
| Symbol Table | Variablen/Typen verwalten |
| Type Checking | Typen zur Compile-Zeit prüfen |
| IR (Intermediate Representation) | Zwischen AST und Maschinencode |
| Stack Machine | Einfachste VM-Architektur |
| Register Allocation | Variablen in CPU-Register zuweisen |
| Constant Folding | `2+3` → `5` zur Compile-Zeit |

## 📚 Ressourcen

1. **[Crafting Interpreters – Part II (Bytecode VM)](https://craftinginterpreters.com/a-bytecode-virtual-machine.html)** ⭐
2. **[Writing a Compiler in Go](https://compilerbook.com/)** Praxis-orientiert
3. **[LLVM Tutorial](https://llvm.org/docs/tutorial/)** Professionelle IR

## 💡 Einfache Stack Machine

```python
class VM:
    def __init__(self):
        self.stack = []
    
    def execute(self, instructions):
        for op, *args in instructions:
            if op == 'PUSH':   self.stack.append(args[0])
            elif op == 'ADD':  self.stack.append(self.stack.pop() + self.stack.pop())
            elif op == 'PRINT':print(self.stack.pop())

vm = VM()
vm.execute([('PUSH', 3), ('PUSH', 4), ('ADD',), ('PRINT',)])  # → 7
```

## 🎯 Checkliste

- [ ] Ich kann einen Type-Checker implementieren
- [ ] Ich verstehe Intermediate Representation
- [ ] Ich habe eine einfache Stack-VM gebaut
- [ ] Ich verstehe Constant Folding und Optimization

## Weiter: [Advanced](../advanced/resources.md)
