export interface Site {
	name: string;
	goToNextPage: () => ResultInfo;
	goToPreviousPage: () => ResultInfo;
}

export interface ResultInfo {
	error?: string;
	completed: boolean;
}
