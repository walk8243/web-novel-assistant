chrome.commands.onCommand.addListener((command: string, tab: chrome.tabs.Tab) => {
	console.debug('Command received:', command, tab);
	if (!tab.id) {
		return;
	}

	chrome.tabs.sendMessage(tab.id, { command })
		.then((response: unknown) => {
			console.debug(response);
		})
		.catch((error: any) => {
			if (error instanceof Error) {
				if (error.message === 'Could not establish connection. Receiving end does not exist.') {
					console.debug('The command was executed in an unrelated tab.');
					return;
				}
			}
			console.error('Error sending message:', error);
		});
});
