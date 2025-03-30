chrome.commands.onCommand.addListener((command: string, tab: chrome.tabs.Tab) => {
	console.debug('Command received:', command, tab);
	if (!tab.id) {
		return;
	}

	chrome.tabs.sendMessage(tab.id, { command })
		.then((response: unknown) => {
			// Handle response if needed
			console.debug(response);
		})
		.catch((error: any) => {
			// Handle error if needed
			console.error('Error sending message:', error);
		});
});
