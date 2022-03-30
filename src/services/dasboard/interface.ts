
export interface DashboardInterface {
	list: List[];
	page: number;
	page_size: number;
	total: number;
}

export interface List {
	id: number;
	address: string;
	investUsd: number;
	returnUsd: number;
	profitUsd: number;
	profitRate: number;
	swapNum: number;
	timeRange: number;
	tag: number;
	createAt: Date;
	updateAt: Date;
	enable: number;
}

