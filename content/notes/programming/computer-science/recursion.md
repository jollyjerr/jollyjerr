+++
+++

# [Recursion](./recursion.md)

Useful when a normal loop approach does not work well. Especially if there is a branching factor.

1. Create a base case
2. recurse
   a. pre operation
   b. do recurse
   c. post operation

As you recurse you are placing functions on the stack who have a return address to the function
above them that called them.

Biggest tip is to move everything you possibly can into the base case.
Don't try and prevent function calls, just exit early in base case logic.

Example: Maze Solver

```ts
type Point = {
	x: number;
	y: number;
};

const directions = [
	[-1, 0],
	[1, 0],
	[0, -1],
	[0, 1]
];

function walk(
	maze: string[],
	wall: string,
	curr: Point,
	end: Point,
	seen: boolean[][],
	path: Point[]
): boolean {
	// Base Case
	// 1. Off the map
	if (curr.x < 0 || curr.x >= maze[0].length || curr.y < 0 || curr.y >= maze.length) {
		return false;
	}
	// 2. On a wall
	if (maze[curr.y][curr.x] === wall) {
		return false;
	}
	// 3. Already seen
	if (seen[curr.y][curr.x]) {
		return false;
	}
	// 4. At the end
	if (curr.x === end.x && curr.y === end.y) {
		// end point needs to be pushed in order for path to be complete
		path.push(end);
		return true;
	}

	// Recurse
	// 1. pre operation
	seen[curr.y][curr.x] = true;
	path.push(curr);
	// 2. do recurse
	for (let i = 0; i < directions.length; i++) {
		const [x, y] = directions[i];
		if (
			walk(
				maze,
				wall,
				{
					x: curr.x + x,
					y: curr.y + y
				},
				end,
				seen,
				path
			)
		) {
			// exit because we found the end
			return true;
		}
	}
	// 3. post operation
	path.pop();
	return false;
}

function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
	const seen: boolean[][] = [];
	const path: Point[] = [];

	for (let i = 0; i < maze.length; i++) {
		seen.push(new Array(maze[0].length).fill(false));
	}

	walk(maze, wall, start, end, seen, path);

	return path;
}
```
