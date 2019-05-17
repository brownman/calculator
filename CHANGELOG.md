version 0.0.5

code base:
---
basic calc: src/calculator.js
- method: process

interfaces:
-----
* Web interface: 
- npm server
- url: /calculate?phrase=3*5

* Cli interface: 
- interface/cli.js --help
- Example: interface/cli.js calculate '3*5'

* Testing:
- npm test
