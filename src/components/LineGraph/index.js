import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveLine } from '@nivo/line';
import customPropTypes from '../customPropTypes';
import LineGraphPointSymbol from './LineGraphPointSymbol';

export default function LineGraph({ data, color }) {
  return (
    <ResponsiveLine
      data={data}
      margin={{
        top: 50, right: 30, bottom: 50, left: 60,
      }}
      colors={[color]}
      animate
      xScale={{
        type: 'time',
        format: '%Y-%m-%d',
        precision: 'day',
      }}
      xFormat="time:%d-%m-%Y"
      yScale={{
        type: 'linear',
        stacked: false,
        min: 'auto',
        max: 'auto',
      }}
      axisBottom={{
        format: '%d %b',
        tickValues: 6,
      }}
      curve="natural"
      pointSymbol={LineGraphPointSymbol}
      pointSize={8}
      pointBorderWidth={1}
      pointBorderColor={{
        from: 'color',
        modifiers: [['darker', 0.3]],
      }}
      useMesh
      enableSlices={false}
    />
  );
}

LineGraph.propTypes = {
  data: customPropTypes.shapes.lineGraphData.isRequired,
  color: PropTypes.string.isRequired,
};
