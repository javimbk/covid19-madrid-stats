export default function getGraphData({ data, filterProp }) {
  return data
    .filter((dataPoint) => dataPoint[filterProp]) // Remove blanks from the beginning.
    .map((dataPoint) => (
      {
        x: dataPoint.date,
        y: dataPoint[filterProp],
      }
    ));
}
