import { Syosetu } from '../site/Syosetu';
import { Commander } from '../presentation/Commander';

(() => {
	const site = Syosetu();
	const commander = Commander(site);
	chrome.runtime.onMessage.addListener((message: unknown, _sender, sendResponse) => {
		commander.exec(message, sendResponse);
	});
})();
