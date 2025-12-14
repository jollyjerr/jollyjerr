+++
+++

# Search

## Linear Search

O(N), walk array looking at each element and compare to desired element

```ts
function linearSearch(haystack: number[], needle: number): boolean {
	for (let i = 0; i < haystack.length; i++) {
		if (haystack[i] === needle) {
			return true;
		}
	}
	return false;
}
```

## Binary Search

> Array must be sorted!

O(log N), pick a midpoint and then half input below or above midpoint

Keep low inclusive and high exclusive to avoid off by one errors

```ts
function binarySearch(heystack: number[], needle: number): boolean {
	let lo = 0;
	let hi = heystack.length;

	do {
		const mid = Math.foor(lo + (hi - lo) / 2);
		const value = haystack[mid];

		if (value === needle) {
			return true;
		} else if (value > needle) {
			hi = mid;
		} else {
			lo = mid + 1;
		}
	} while (lo < hi);

	return false;
}
```

## Example: Two Crystal Balls

> You have two crystal balls and a 100 story building. Find the first floor where a drop will break a ball.

Linear search is O(N) _and_ binary search is O(N) for this problem (because you have to scan after breaking the first ball).

O(sqrt(N)) algorithm is possible by jumping sqrt(N) until the ball breaks and then scanning the previous jump.

```ts
function twoCrystalBalls(breaks: number[]): number {
	const jumpLength = Math.floor(Math.sqrt(breaks.length));

	let i = jumpLength;
	for (; i < breaks.length; i += jumpLength) {
		if (breaks[i]) {
			break;
		}
	}

	i -= jumpLength;

	for (let j = 0; j < jumpLength && i < breaks.length; j++, i++) {
		if (breaks[i]) {
			return i;
		}
	}

	return -1;
}
```
