/* eslint-disable @typescript-eslint/no-unused-vars */
import { memo } from "react";
import useEchart, { sourceItem, useEchartOption } from "./useEchart";

const ProEchart = memo(({
	classname,
	option,
	dataSource,
}: {
	classname: string;
	option: useEchartOption;
	dataSource: any
}) => {

	const [echart] = useEchart(classname, option, dataSource)

	return <div className={classname} style={{
		width: '100%',
		height: '40rem'
	}}>

	</div>
})
export default ProEchart