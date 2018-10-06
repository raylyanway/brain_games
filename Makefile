install:
	npm install

talk:
	npx babel-node -- src/bin/brain-talk.js

even:
	npx babel-node -- src/bin/brain-even.js

calc:
	npx babel-node -- src/bin/brain-calc.js

gcd:
	npx babel-node -- src/bin/brain-gcd.js

publish:
	npm publish

lint:
	npx eslint .
