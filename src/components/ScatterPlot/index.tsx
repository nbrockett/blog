// // import React from "react"
// import React, { useState, useEffect } from "react"
// import * as D3 from "d3"
// import { useD3 } from "d3blackbox"

// const barChartStyle = {
//   /* styles skipped for brevity */
// }

// const getRandomData = () =>
//   D3.range(20).map(() => ({ x: Math.random(), y: Math.random() }))


// const Axis = ({ x, y, scale, axisType, ticks = 10 }: any) => {
//   const fnName = axisType === "left" ? "axisLeft" : "axisBottom"
//   const ref = useD3(el => D3.select(el).call(D3[fnName](scale).ticks(ticks)))

//   return (<g transform={`translate(${x}, ${y})`} ref={ref} />)
// }


// interface DatapointInterface {
//     cx: number;
//     cy: number;
//     r: number;
//   }

// const Datapoint = ({ cx, cy, r } : DatapointInterface) => {
//   const [degrees, setDegrees] = useState(0)
//   const data = getRandomData()
//   const height = r
//   const width = r
//   const xScale = D3.scaleLinear()
//     .domain([0, 1])
//     .range([0, width])
//   const yScale = D3.scaleLinear()
//     .domain([0, 1])
//     .range([height, 0])

//   return (
//     <g transform={`translate(${cx}, ${cy}) rotate(${degrees})`}>
//       {/* create a scatterplot of the actual data */}
//       {data.map((d:number, i:number) => (
//         <circle
//           key={`datapoint-${i}`}
//           cx={xScale(d.x)}
//           cy={yScale(d.y)}
//           r={1}
//         />
//       ))}
//       <Axis x={0} y={0} scale={yScale} axisType="left" ticks={2} />
//       <Axis x={0} y={height} scale={xScale} axisType="bottom" ticks={2} />
//     </g>
//   )
// }


// export default class ScatterPlot extends React.Component {
//     data = getRandomData()
//     height = 400
//     width = 400
//     xScale = D3.scaleLinear()
//         .domain([0, 1])
//         .range([45, this.width - 10])
//     yScale = D3.scaleLinear()
//         .domain([0, 1])
//         .range([this.height - 45, 5])
    
//     render() {
//         return (
//         <svg width={this.width} height={this.height}>

//         {this.data.map((d: any, i: number) => (
//             <Datapoint
//             key={`${d.x}${d.y}`}
//             cx={this.xScale(d.x)}
//             cy={this.yScale(d.y)}
//             r={50}
//             // index={i}
//             />
//         ))}
//         <Axis x={40} y={0} scale={this.yScale} axisType="left" />
//         <Axis x={0} y={this.height - 40} scale={this.xScale} axisType="bottom" />
//         </svg>
//     )
//     }
// }


/* ScatterPlot-with-trendline.jsx
Requires: react and d3 (ie  `npm install -S react d3`)
See the LinearGraph for an example of calling ScatterPlot
*/
import React from "react"
import { scaleLinear, max, axisLeft, axisBottom, select } from "d3"

function sortNumber(a, b) {
  return a - b
}

interface IScatterPlotBase {
  data: number[][];
}

class ScatterPlotBase extends React.Component {
  // constructor(props:IScatterPlotBase) {
  //   super(props)
  // }

  props: any

  render() {
    const margin = { top: 20, right: 15, bottom: 60, left: 60 }
    const width = 800 - margin.left - margin.right
    const height = 600 - margin.top - margin.bottom
    const data = this.props.data

    const x = scaleLinear()
      .domain([
        0,
        max(data, function(d) {
          return d[0]
        })
      ])
      .range([0, width])

    const y = scaleLinear()
      .domain([
        0,
        max(data, function(d) {
          return d[1]
        })
      ])
      .range([height, 0])

    return (
      <div>
        <h3> Scatter Plot with Trend Line </h3>
        <svg
          width={width + margin.right + margin.left}
          height={height + margin.top + margin.bottom}
          className="chart"
        >
          <g
            transform={"translate(" + margin.left + "," + margin.top + ")"}
            width={width}
            height={height}
            className="main"
          >
            <RenderCircles data={data} scale={{ x, y }} />
            <TrendLine data={data} scale={{ x, y }} />
            <Axis
              axis="x"
              transform={"translate(0," + height + ")"}
              scale={axisBottom().scale(x)}
            />
            <Axis
              axis="y"
              transform="translate(0,0)"
              scale={axisLeft().scale(y)}
            />
          </g>
        </svg>
      </div>
    )
  }
}

class RenderCircles extends React.Component {
  render() {
    let renderCircles = this.props.data.map((coords, i) => (
      <circle
        cx={this.props.scale.x(coords[0])}
        cy={this.props.scale.y(coords[1])}
        r="8"
        style={{ fill: "rgba(25, 158, 199, .9)" }}
        key={i}
      />
    ))
    return <g>{renderCircles}</g>
  }
}

class TrendLine extends React.Component {
  render() {
    let x_coords = this.props.data.map(n => {
      return n[0]
    })
    let y_coords = this.props.data.map(n => {
      return n[1]
    })
    const trendline = linearRegression(y_coords, x_coords)

    // Lowest and highest x coordinates to draw a plot line
    const lowest_x = x_coords.sort(sortNumber)[0]
    const hightest_x = x_coords.sort(sortNumber)[x_coords.length - 1]
    const trendline_points = [
      [lowest_x, trendline(lowest_x)],
      [hightest_x, trendline(hightest_x)]
    ]

    return (
      <line
        x1={this.props.scale.x(trendline_points[0][0])}
        y1={this.props.scale.y(trendline_points[0][1])}
        x2={this.props.scale.x(trendline_points[1][0])}
        y2={this.props.scale.y(trendline_points[1][1])}
        style={{ stroke: "black", strokeWidth: "2" }}
      />
    )
  }
}

class Axis extends React.Component {
  componentDidMount() {
    const node = this.refs[this.props.axis]
    select(node).call(this.props.scale)
  }

  render() {
    return (
      <g
        className="main axis date"
        transform={this.props.transform}
        ref={this.props.axis}
      />
    )
  }
}

function linearRegression(y, x) {
  var lr = {}
  var n = y.length
  var sum_x = 0
  var sum_y = 0
  var sum_xy = 0
  var sum_xx = 0
  var sum_yy = 0

  for (var i = 0; i < y.length; i++) {
    sum_x += x[i]
    sum_y += y[i]
    sum_xy += x[i] * y[i]
    sum_xx += x[i] * x[i]
    sum_yy += y[i] * y[i]
  }

  lr["slope"] = (n * sum_xy - sum_x * sum_y) / (n * sum_xx - sum_x * sum_x)
  lr["intercept"] = (sum_y - lr.slope * sum_x) / n
  lr["r2"] = Math.pow(
    (n * sum_xy - sum_x * sum_y) /
      Math.sqrt((n * sum_xx - sum_x * sum_x) * (n * sum_yy - sum_y * sum_y)),
    2
  )

  return x => {
    return lr.slope * x + lr.intercept
  }
}

// import React from "react"
// import ScatterPlot from "./ScatterPlot-with-trendline"

var data:number[][] = [[0, 3],[5, 13],[10, 22],[15, 36],[20, 48],[25, 59],[30, 77],[35, 85],[40, 95],[45, 105],[50, 120],[55, 150],[60, 147],[65, 168],[70, 176],[75, 188],[80, 199],[85, 213],[90, 222],[95, 236],[100, 249]]

export default class ScatterPlot extends React.Component {
  render() {
    return <ScatterPlotBase data={data} />
  }
}


