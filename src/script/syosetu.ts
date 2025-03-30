chrome.runtime.onMessage.addListener((message: unknown, _sender, sendResponse) => {
	console.debug('Received message:', message);

	if (typeof message !== 'object' || message === null || 'command' in message === false) {
		console.log('Invalid message format');
		sendResponse({ error: 'Invalid message format', completed: false });
		return;
	}

	if (message.command === 'next-page') {
		const nextPageButton = document.querySelector('.c-pager .c-pager__item--next');
		if (!nextPageButton || nextPageButton instanceof HTMLAnchorElement === false) {
			console.log('Next page button not found');
			sendResponse({ error: 'Next page button not found', completed: false });
			return;
		}

		nextPageButton.click();
	} else if (message.command === 'prev-page') {
		const previousPageButton = document.querySelector('.c-pager .c-pager__item--before');
		if (!previousPageButton || previousPageButton instanceof HTMLAnchorElement === false) {
			console.log('Previous page button not found');
			sendResponse({ error: 'Previous page button not found', completed: false });
			return;
		}

		previousPageButton.click();
	}

	sendResponse({ site: 'syosetu', completed: true });
});
