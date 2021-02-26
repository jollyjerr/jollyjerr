build:
	mkdir -p public_functions
	go get ./...
	go build -o public_functions/email ./functions/email
	go build -o public_functions/climbs ./functions/climbs
	yarn build
