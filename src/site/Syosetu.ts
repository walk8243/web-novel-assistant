import type {Site} from './Site';

export const Syosetu = (): Site => {

	const goToNextPage = () => {
		const nextPageButton = document.querySelector('.c-pager .c-pager__item--next');
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
		const previousPageButton = document.querySelector('.c-pager .c-pager__item--before');
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
		const indexPageButton = document.querySelector('.c-announce a:first-child');
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
		const bookmarkButton = document.querySelector('.c-menu .c-menu__item>.c-bookmark-button');
		if (bookmarkButton && bookmarkButton instanceof HTMLAnchorElement) {
			bookmarkButton.click();
			return { completed: true };
		}

		return {
			error: 'Bookmark button not found',
			completed: false,
		};
	};

	return {
		name: 'syosetu',
		goToNextPage,
		goToPreviousPage,
		goToIndexPage,
		putBookmark,
	};
}
