brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

setup: install
	npx simple-git-hooks

install:
	npm ci

test:
	npm test

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix