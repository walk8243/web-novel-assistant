export interface Site {
	name: string;
	goToNextPage: () => ResultInfo;
	goToPreviousPage: () => ResultInfo;
	goToIndexPage: () => ResultInfo;
	putBookmark: () => ResultInfo;
}

export interface ResultInfo {
	error?: string;
	completed: boolean;
}
