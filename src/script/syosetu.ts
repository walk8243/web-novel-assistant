document.getElementsByTagName('body')[0].style.backgroundColor = '#f00000';

chrome.runtime.onMessage.addListener((message: unknown, _sender, sendResponse) => {
	console.log('Received message:', message);
	sendResponse({ site: 'syosetu', completed: true });
});
