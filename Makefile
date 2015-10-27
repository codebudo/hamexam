VERSION ?= latest

.PHONY: all
all: docker
	@echo "Done!"

.PHONY: docker
docker:
	docker build --tag ham:$(VERSION) .
