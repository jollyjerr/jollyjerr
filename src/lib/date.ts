import { format } from 'date-fns';

export function safeFormat(date: string, fallback = '') {
	try {
		return format(new Date(date), 'MMMM d, y');
	} catch {
		return fallback;
	}
}
