
export interface DashboardInterface {
	list: DataList[];
	page: number;
	page_size: number;
	total: number;
}

export interface DataList {
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


export interface DashboardParams {
	"page": number,
	"page_size": number,
	"search"?: {
		"address": string,
		"swapTimes": number,
		"timeRange": number
	},
	"sort": {
		"invest"?: string,
		"profit"?: string,
		"profitRate"?: string,
		"swapTimes"?: string
	}
}