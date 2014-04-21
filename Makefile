MOCHA = node_modules/.bin/mocha
TESTEM = node_modules/.bin/testem



dev:
	$(MOCHA) --watch --reporter spec

devall:
	$(TESTEM)

test:
	$(TESTEM) ci

options-json:
	node scripts/download-api-http-endpoints.js



.PHONY: test