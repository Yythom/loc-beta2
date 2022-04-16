/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import * as echarts from 'echarts';
import { useEffect, useState } from 'react';
import echart_theme from './theme';

export interface useEchartOption {
	title?: string,
	x_option: {
		name?: string,
		data: string[] | number[],
		show?: boolean
	}
	y_option: {
		name?: string,
		show?: boolean
	}
}
/** 
 * @param option   
 * splitLine 隐藏背景的网格线属性
 */

function useEchart(classname: string, option: useEchartOption, dataSoure: number[] | number[][],) {
	const [chart, setEChart] = useState<echarts.ECharts>();

	useEffect(() => {
		const dom: HTMLElement | null = document.querySelector('.' + classname)
		if (dom && dataSoure) {
			const series = []
			if (Array.isArray(dataSoure[0])) {
				dataSoure.forEach(e => {
					series.push({
						symbol: 'none',
						data: e,
						type: 'line',
						smooth: true
					})
				})
			} else {
				series.push({
					symbol: 'none',
					data: dataSoure,
					type: 'line',
					smooth: true
				})
			}

			const myChart = echarts.init(dom, echart_theme);
			myChart.setOption({
				title: {
					text: option?.title || ''
				},
				xAxis: [
					{
						...option.x_option
					}
				],
				yAxis: [
					{
						type: 'value',
						...option.y_option,
					}
				],
				series,
				tooltip: {
					trigger: 'axis',
					//支持字符串模板和回调函数两种形式,模板变量有 {a}, {b}，{c}，{d}，{e}，分别表示系列名，数据名，数据值等
					// formatter: "{c0}",
					formatter: (p: any[]) => {
						const str = p.map(e => {
							const x = `${option?.x_option?.name || ''}: ${e.axisValue}`;
							const y = `${option?.y_option?.name || ''}${e.value}`;
							return `${x}`
						}).join(' ')
						return str
					},
				},
			});
			setEChart(myChart);
		}
	}, [dataSoure])

	return [
		chart,
	]
}

export default useEchart