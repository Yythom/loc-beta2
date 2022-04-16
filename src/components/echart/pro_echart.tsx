/* eslint-disable @typescript-eslint/no-unused-vars */
import { memo } from "react";
import useEchart, { useEchartOption } from "./useEchart";

const ProEchart = memo(({
	classname,
	option,
	dataSource,
}: {
	classname: string;
	option: useEchartOption;
	dataSource: number[] | number[][],
}) => {

	const [echart] = useEchart(classname, option, dataSource)

	return <div className={classname} style={{
		width: '100%',
		height: '40rem'
	}}>

	</div>
})
export default ProEchart