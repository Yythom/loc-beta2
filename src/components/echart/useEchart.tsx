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
}
/** 
 * @param option   
 * splitLine 隐藏背景的网格线属性
 */
export interface sourceItem {
	name: string,
	list: number[] | number[][] | string[] | string[][],
	y_option?: Record<string, any>
}
// 获取最大值方法
function calMax(arr: any) {
	var max = Math.max.apply(null, arr); // 获取最大值方法
	var maxint = Math.ceil(max / 5); // 向上以5的倍数取整
	var maxval = maxint * 5 + 5; // 最终设置的最大值
	return maxval; // 输出最大值
}
// 获取最小值方法
function calMin(arr: any) {
	var min = Math.min.apply(null, arr); // 获取最小值方法
	var minint = Math.floor(min / 1); // 向下以1的倍数取整
	var minval = minint * 1 - 5; // 最终设置的最小值
	return minval; // 输出最小值
}
function useEchart(classname: string, option: useEchartOption,
	dataSoure: any
) {
	const [chart, setEChart] = useState<echarts.ECharts>();

	useEffect(() => {
		const dom: HTMLElement | null = document.querySelector('.' + classname)
		if (dom && dataSoure) {
			const series = []
			const yAxis = []
			const legend: any = []
			if (Array.isArray(dataSoure[0])) {
				dataSoure.forEach((e: any, i: number) => {
					const list = e[0]?.list || []
					const name = e[0]?.name || ''
					series.push({
						symbol: 'none',
						data: list,
						name,
						type: 'line',
						yAxisIndex: i, // 两边y轴数据显示必须加
						valueFormatter: function (value: any) {
							return value + name;
						},
						smooth: true
					})
					yAxis.push({
						type: 'value',
						name,
						splitLine: true,
						...e[i]?.y_option,
					})
					legend.push(name)
				})
			} else {
				if (dataSoure[0]) {
					const list = dataSoure[0]?.list || []
					const name = dataSoure[0]?.name || ''
					series.push({
						symbol: 'none',
						name: name,
						data: list,
						type: 'line',
						smooth: true
					})
					yAxis.push({
						type: 'value',
						name: name,
						splitLine: true,
						...dataSoure[0].y_option,
					})
					legend.push(name)
				}
			}
			if (!series[0]) return
			const myChart = echarts.init(dom, echart_theme);
			const opt = {
				title: {
					text: option?.title || ''
				},
				xAxis: [
					{
						...option.x_option,
						splitLine: true
					}
				],
				// 提示线条是哪根
				legend: {
					data: legend
				},
				yAxis,
				series,
				tooltip: {
					trigger: 'axis',
					//支持字符串模板和回调函数两种形式,模板变量有 {a}, {b}，{c}，{d}，{e}，分别表示系列名，数据名，数据值等
					// formatter: "{c0}",
					// formatter: (p: any[]) => {
					// 	const str = p.map(e => {
					// 		const x = `${option?.x_option?.name || ''}: ${e.axisValue}`;
					// 		const y = `${e.value}`;
					// 		return `${x}`
					// 	}).join(' ')
					// 	return str
					// },
				},
			}
			console.log(opt);

			myChart.setOption(opt);
			setEChart(myChart);
		}
	}, [dataSoure])

	return [
		chart,
	]
}

export default useEchart