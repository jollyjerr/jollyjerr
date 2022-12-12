install:
	pnpm install

dev:
	pnpm dev

build:
	pnpm build

package:
	pnpm package

preview:
	pnpm preview

prepare:
	pnpm prepare

typecheck:
	pnpm check

lint:
	pnpm lint

format:
	pnpm format
	
ci:
	make install && make typecheck && make lint && make build
