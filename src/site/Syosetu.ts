import type {Site, ResultInfo} from './Site';

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

	return {
		name: 'syosetu',
		goToNextPage,
		goToPreviousPage,
	};
}
