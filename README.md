calculator
---
- evaluate string expression as math expression.

WORK-FLOW
---------
1 - describe in words before coding
2 - implement the basic code-base -> test from the cli -> add test suite -> extend the code-base

PRIORITIES
----
- tokenizer 
-- buffer (support sequance of digits-symbols)
--- digits: +1, +1.0, -1.00-0...-+.,.-0
--- operators: *,/,///,**,/**/,******

TODO
---
- calculate expression:
-- add tokenizer
-- add parse 
-- add evaluator 

DONE
------
- cli interface: npm run cli:help
- web interface: npm run server

REFS:
-----
-  tokenizer: implement a buffer (theory+js code)
-- https://medium.freecodecamp.org/how-to-build-a-math-expression-tokenizer-using-javascript-3638d4e5fbe9
