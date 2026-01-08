+++
title = "Crafting Interpreters"
+++

# Crafting Interpreters

> https://craftinginterpreters.com/

Compilers and interpreters are same same but different. Compiling is an
implementation technique where you translate a source language to a lower-level
form (normally) and don't execute it. Interpreters execute the source code
immediately, but many interpreters translate the code to another form first
which means they _have_ a compiler.

Compilers are made up of some to all of these steps:

Front End:

- Scanning (lexical analysis) to tokens
- Parsing to a nested structure of the grammar (abstract syntax tree)
- Static analysis (binding, resolution, scope, type checking for typed languages) this info can be
  added as attributes to the AST or to a symbol table.

Middle End:

- Intermediate Representations (interface between source and destination
  implementations)
- Optimization

Back End:

- Code generation (CPU instructions or byte-code/p-code)
- Virtual Machine (emulate a chip written in a language with wide support)
- Runtime (inserted into executable)

Shortcuts:

- Single pass compiler (compile on first read without revisiting)
- Tree walk interpreters (evaluate each node on AST at a time)
- Transpiler (compile to another source language)
- Just in time (compile to native on the clients architecture)
