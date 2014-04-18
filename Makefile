MOCHA = node_modules/.bin/mocha



dev:
	$(MOCHA) --watch --reporter spec

test:
	$(MOCHA)

options-json:
	node scripts/download-api-http-endpoints.js



.PHONY: test