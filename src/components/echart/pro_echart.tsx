import { memo } from "react";
import useEchart, { useEchartOption } from "./useEchart";

const ProEchart = memo(({
	classname,
	option
}: {
	classname: string;
	option: useEchartOption;
}) => {

	const [echart] = useEchart(classname, option)

	return <div className={classname} style={{
		width: '50rem',
		height: '40rem'
	}}>

	</div>
})
export default ProEchart