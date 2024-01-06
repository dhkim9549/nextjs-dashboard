'use client'

import React, {useEffect, useRef} from "react";
import { Card, Title } from "@tremor/react";

// import billboard.js
import bb, {area, bar, line, step, spline} from "billboard.js";
import "billboard.js/dist/billboard.css";  // default css

// import react wrapper
import BillboardJS, {IChart} from "@billboard.js/react";
// const BillboardJS = require("@billboard.js/react");  // for CJS

export default function BChart({chartData}) {

  // to get the instance, create ref and pass it to the component
  const chartComponent = useRef<IChart>();
  const options = {
    data: {
      columns: [
        chartData,
        ["data2", 200, 130, 90, 240, 130, 220],
        ["data3", 300, 200, 160, 400, 250, 250],
        ["data4", 200, 130, 90, 240, 130, 220],
        ["data5", 130, 120, 150, 140, 160, 150],
        ["data6", 90, 70, 20, 50, 60, 120],
        ["data7", 283, 170, 275, 143, 220, 255]
      ],
      type: bar(), // for ESM specify as: bar()
      types: {
        data3: spline(), // for ESM specify as: spline()
        data4: line(), // for ESM specify as: line()
        data6: area(), // for ESM specify as: area()
        data7: step(), // for ESM specify as: step()
      },
      groups: [
        [
          "data1",
          "data2"
        ]
      ]
    }
  };

  useEffect(() => {
    // get the instance from ref
    const chart = chartComponent.current?.instance;

    // call APIs
    if (chart) {
      // chart.load( ... );
    }
  }, []);

  return (
    <div className="w-full lg:w-[550px]">
      <Card>
        <Title>KODEX 200TR Performance (USD)</Title>
        <div className="w-full lg:w-[500px]">
          <BillboardJS bb={bb} options={options} ref={chartComponent} />
        </div>
      </Card>
    </div>
  );
}
