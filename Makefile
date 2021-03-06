SHELL = /bin/sh
COMPILER = ./bin/compile.js
STYLUS = ./node_modules/stylus/bin/stylus
YUI_COMPRESSOR = java -jar ./bin/yuicompressor-2.4.6.jar

JS_SOURCES = $(addprefix src/js/, \
  core.js \
  locale.js \
  utils.js \
  validators.js \
  plan.js \
  account.js \
  billing_info.js \
  subscription.js \
  transaction.js \
  ui.js\
  states.js\
)

DOM_SOURCES = $(addprefix src/dom/, \
	contact_info_fields.jade \
	billing_info_fields.jade \
	subscribe_form.jade \
	update_billing_info_form.jade \
	one_time_transaction_form.jade \
	terms_of_service.jade \
)

all: node_modules build build/recurly.min.js build/recurly.fr.min.js build/recurly.es.min.js themes/default/recurly.css

release: clean all package

build:
	mkdir -p build

build/recurly.js: $(JS_SOURCES) $(DOM_SOURCES)
	$(COMPILER) en $^ > $@

build/recurly.fr.js: $(JS_SOURCES) $(DOM_SOURCES)
	$(COMPILER) fr $^ > $@

build/recurly.es.js: $(JS_SOURCES) $(DOM_SOURCES)
	$(COMPILER) es $^ > $@

build/recurly.min.js: build/recurly.js
	rm -f build/recurly.min.js
	$(YUI_COMPRESSOR) build/recurly.js -o build/recurly.min.js

build/recurly.fr.min.js: build/recurly.fr.js
	rm -f build/recurly.fr.min.js
	$(YUI_COMPRESSOR) build/recurly.fr.js -o build/recurly.fr.min.js

build/recurly.es.min.js: build/recurly.es.js
	rm -f build/recurly.es.min.js
	$(YUI_COMPRESSOR) build/recurly.es.js -o build/recurly.es.min.js

themes/default/recurly.css: themes/default/recurly.styl
	$(STYLUS) $^

clean:
	rm -rf build

node_modules: package.json
	npm install
	touch node_modules

package:
	node updatePackage.js

.PHONY: clean
