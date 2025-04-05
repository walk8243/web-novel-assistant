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

	return {
		name: 'alphapolis',
		goToNextPage,
		goToPreviousPage,
	};
}
