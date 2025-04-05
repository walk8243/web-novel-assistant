import { Alphapolis } from '../site/Alphapolis';
import { Commander } from '../presentation/Commander';

(() => {
	const site = Alphapolis();
	const commander = Commander(site);
	chrome.runtime.onMessage.addListener((message: unknown, _sender, sendResponse) => {
		commander.exec(message, sendResponse);
	});
})();
