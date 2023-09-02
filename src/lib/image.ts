export function sizedImage(url: string, sizes: number[]) {
	const [width, height] = sizes;
	return `${url}?tr=w-${width},h-${height}`;
}

export const imageSizes = {
	sm: [400, 400],
	md: [1200, 630],
	lg: [1600, 900]
};
