import type { Site } from '../site/Site';

export const Commander = (site: Site) => {

	const exec = (message: unknown, sendResponse: (response?: any) => void): boolean => {
		console.debug('Received message:', message);
		if (typeof message !== 'object' || message === null || 'command' in message === false) {
			sendResponse({ error: 'Invalid message format', completed: false });
			return false;
		}

		if (typeof message.command !== 'string') {
			sendResponse({ error: 'Invalid command type', completed: false });
			return false;
		}
		
		const result = _execCommand(message.command);
		sendResponse({ site: site.name, ...result });
		return result.completed;
	};

	const _execCommand = (command: string): { error?: string, completed: boolean } => {
		switch (command) {
			case 'next-page':
				return site.goToNextPage();
			case 'prev-page':
				return site.goToPreviousPage();
			case 'index':
				return site.goToIndexPage();
			case 'bookmark':
				return site.putBookmark();
			default:
				return { error: 'Invalid command', completed: false };
		}
	};

	return {
		exec,
	};
};
