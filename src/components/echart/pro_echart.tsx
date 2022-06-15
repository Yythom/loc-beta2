/* eslint-disable @typescript-eslint/no-unused-vars */
import { number } from "echarts";
import { memo } from "react";
import useEchart, { sourceItem, useEchartOption } from "./useEchart";

interface dataItem {
	name: string,
	list: (string | number)[]
	y_option?: any  // showSymbol:是否展示线点  smooth：是否平滑
}

const ProEchart = memo(({
	classname,
	option,
	dataSource,
}: {
	classname: string;
	option: useEchartOption;
	dataSource: dataItem[] | dataItem[][]
}) => {

	const [echart] = useEchart(classname, option, dataSource)

	return <div className={classname} style={{
		width: '100%',
		height: '400px',
	}}>

	</div>
})
export default ProEchart