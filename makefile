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
	pnpm typecheck

lint:
	pnpm lint

format:
	pnpm format
	
ci:
	make install && make typecheck && make format && make lint && make build
