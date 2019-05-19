calculator
---
- evaluate string expression as math expression.

TODO
----
- input validation: 
1. whitelisted symbols
2. allowed range

- test input range: 
1. max/min range of input 
2. max/min range of output

- output sanitation:
1. disable error tracing
2. on error: show general message


NICE TO HAVE:
---
- docker 
- travis integration

USE
------
- cli interface: npm run cli:help
- web interface: npm run server
- run tests:     npm test

AVAILABLE COMMANDS
-----
```bash
#developer:
npm run cli:tokenize "5/3*9"
npm run cli:rpn "5/3*9"
npm run cli:ast "5/3*9"

#CLI user
npm run cli:calculate '6/2'
npm test

#web
npm run server
#then access
#http://localhost:3000
```

REFS:
-----
-  tokenizer: implement a buffer (theory+js code)
- https://medium.freecodecamp.org/how-to-build-a-math-expression-tokenizer-using-javascript-3638d4e5fbe9
- https://medium.freecodecamp.org/parsing-math-expressions-with-javascript-7e8f5572276e
