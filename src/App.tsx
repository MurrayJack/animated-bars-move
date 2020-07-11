import * as React from "react";
import "./styles.css";
import { Animate } from "react-move";

var colors = ["#236997", "#52aaeb", "#a75e07", "#f4a22d", "#f95b3a"];

var data = [
  [36, 26, 9, 9, 26],
  [34, 32, 15, 6, 18],
  [29, 36, 23, 7, 11],
  [21, 35, 30, 12, 7],
  [14, 31, 35, 19, 6],
  [8, 24, 36, 27, 10],
  [6, 16, 33, 33, 16],
  [8, 10, 27, 36, 24],
  [13, 6, 19, 35, 31],
  [21, 7, 12, 30, 35],
  [29, 11, 7, 23, 36],
  [34, 18, 6, 15, 32]
];

function AnimatedBar(props) {
  const { height } = props;
  return (
    <Animate
      start={{ height }}
      enter={{ height: [height], timing: 1 }}
      update={{ height: [height], timing: 1 }}
    >
      {state => <Bar {...props} height={state.height} />}
    </Animate>
  );
}

function Bar({ x, y, width, height, fill }) {
  return (
    <rect x={x} y={y - height} width={width} height={height} fill={fill} />
  );
}

export default function App() {
  var [index, setIndex] = React.useState(0);
  var values = data[index % data.length];
  return (
    <div onClick={() => setIndex(index + 1)} className="App">
      <svg version="1.1" viewBox="0 0 240 135">
        <g>
          {values.map((d, i) => (
            <AnimatedBar
              x={60 + 24 * i}
              y={115}
              width={24}
              height={(d * 95) / 36}
              fill={colors[i]}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
