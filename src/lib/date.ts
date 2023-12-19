import * as dateFns from 'date-fns';

export function safeFormat(date: string, fallback = '') {
	try {
		return dateFns.format(new Date(date), 'MMMM d, y');
	} catch {
		return fallback;
	}
}
