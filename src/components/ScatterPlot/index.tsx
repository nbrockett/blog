// import React from "react"
import React, { useState, useEffect } from "react"
import * as D3 from "d3"
import { useD3 } from "d3blackbox"

const barChartStyle = {
  /* styles skipped for brevity */
}

const getRandomData = () =>
  D3.range(20).map(() => ({ x: Math.random(), y: Math.random() }))


const Axis = ({ x, y, scale, axisType, ticks = 10 }: any) => {
  const fnName = axisType === "left" ? "axisLeft" : "axisBottom"
  const ref = useD3(el => D3.select(el).call(D3[fnName](scale).ticks(ticks)))

  return (<g transform={`translate(${x}, ${y})`} ref={ref} />)
}


interface DatapointInterface {
    cx: number;
    cy: number;
    r: number;
  }

const Datapoint = ({ cx, cy, r } : DatapointInterface) => {
  const [degrees, setDegrees] = useState(0)
  const data = getRandomData()
  const height = r
  const width = r
  const xScale = D3.scaleLinear()
    .domain([0, 1])
    .range([0, width])
  const yScale = D3.scaleLinear()
    .domain([0, 1])
    .range([height, 0])

  return (
    <g transform={`translate(${cx}, ${cy}) rotate(${degrees})`}>
      {/* create a scatterplot of the actual data */}
      {data.map((d:number, i:number) => (
        <circle
          key={`datapoint-${i}`}
          cx={xScale(d.x)}
          cy={yScale(d.y)}
          r={1}
        />
      ))}
      <Axis x={0} y={0} scale={yScale} axisType="left" ticks={2} />
      <Axis x={0} y={height} scale={xScale} axisType="bottom" ticks={2} />
    </g>
  )
}


export default class ScatterPlot extends React.Component {
    data = getRandomData()
    height = 400
    width = 400
    xScale = D3.scaleLinear()
        .domain([0, 1])
        .range([45, this.width - 10])
    yScale = D3.scaleLinear()
        .domain([0, 1])
        .range([this.height - 45, 5])
    
    render() {
        return (
        <svg width={this.width} height={this.height}>

        {this.data.map((d: any, i: number) => (
            <Datapoint
            key={`${d.x}${d.y}`}
            cx={this.xScale(d.x)}
            cy={this.yScale(d.y)}
            r={50}
            // index={i}
            />
        ))}
        <Axis x={40} y={0} scale={this.yScale} axisType="left" />
        <Axis x={0} y={this.height - 40} scale={this.xScale} axisType="bottom" />
        </svg>
    )
    }
}