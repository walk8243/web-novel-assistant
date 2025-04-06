import type {Site} from './Site';

export const Alphapolis = (): Site => {

	const goToNextPage = () => {
		const nextPageButton = document.querySelector('.episode-navigation .novel-navigation-link-next>a');
		if (nextPageButton && nextPageButton instanceof HTMLAnchorElement) {
			nextPageButton.click();
			return { completed: true };
		}

		return {
			error: 'Next page button not found',
			completed: false,
		};
	};

	const goToPreviousPage = () => {
		const previousPageButton = document.querySelector('.episode-navigation .novel-navigation-link-prev>a');
		if (previousPageButton && previousPageButton instanceof HTMLAnchorElement) {
			previousPageButton.click();
			return { completed: true };
		}

		return {
			error: 'Previous page button not found',
			completed: false,
		};
	};

	const goToIndexPage = () => {
		const indexPageButton = document.querySelector('.episode-navigation>a');
		if (indexPageButton && indexPageButton instanceof HTMLAnchorElement) {
			indexPageButton.click();
			return { completed: true };
		}

		return {
			error: 'Index page button not found',
			completed: false,
		};
	};

	const putBookmark = () => {
		const bookmarkButton = document.querySelector('#main .novel-body>.bookmark');
		if (bookmarkButton && bookmarkButton instanceof HTMLElement) {
			bookmarkButton.click();
			return { completed: true };
		}

		return {
			error: 'Bookmark button not found',
			completed: false,
		};
	};

	return {
		name: 'alphapolis',
		goToNextPage,
		goToPreviousPage,
		goToIndexPage,
		putBookmark,
	};
}
