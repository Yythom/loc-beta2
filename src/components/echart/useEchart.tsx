/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import * as echarts from 'echarts';
import { useEffect, useState } from 'react';
import echart_theme from './theme';

export interface useEchartOption {
	title?: string,
	x_data: string[] | number[],
	x_name?: string,
	y_name?: string,
	dataSource: string[] | number[] | undefined
}

function useEchart(classname: string, option: useEchartOption,) {
	const [chart, setEChart] = useState<echarts.ECharts>();

	useEffect(() => {
		const dom: HTMLElement | null = document.querySelector('.' + classname)
		if (dom && option?.dataSource) {
			let myChart = echarts.init(dom, echart_theme);
			myChart.setOption({

				title: {
					text: option?.title || ''
				},
				xAxis: [
					{
						data: option.x_data,
						name: option?.x_name
					}
				],
				yAxis: [
					{
						type: 'value',
						name: option?.y_name
					}
				],
				series: [
					{
						symbol: 'none',
						data: option?.dataSource,
						type: 'line',
					}
				],
				tooltip: {
					trigger: 'axis',
					//支持字符串模板和回调函数两种形式,模板变量有 {a}, {b}，{c}，{d}，{e}，分别表示系列名，数据名，数据值等
					// formatter: "{c0}",
					formatter: (p: any[]) => {
						const str = p.map(e => {
							const x = `${option?.x_name || ''}: $${e.axisValue}`;
							const y = `${option?.y_name || ''}${e.value}`;
							return `${x}`
						}).join(' ')
						return str
					},
				},
			});
			setEChart(myChart);
		}
	}, [option?.dataSource])

	return [
		chart,
	]
}

export default useEchart