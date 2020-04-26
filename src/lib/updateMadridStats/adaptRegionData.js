export default function adaptRegionData(data) {
  return data.map(transformDataPoint);
}

function transformDataPoint(dataPoint) {
  return {
    date: transformDateString(dataPoint.FECHA),
    accumulatedPositives: positivesFromBothTests(dataPoint),
    currentHospitalized: transformNumericValue(dataPoint.Hospitalizados),
    currentICU: transformNumericValue(dataPoint.UCI),
  };
}

function positivesFromBothTests(dataPoint) {
  const positiveOldValue = getNumberOrZero(dataPoint.CASOS);
  const positivePCR = getNumberOrZero(dataPoint['PCR+']);
  const positiveAC = getNumberOrZero(dataPoint['TestAc+']);

  const total = positiveOldValue + positivePCR + positiveAC;
  return total === 0 ? null : total.toString();
}

function transformDateString(dateString) {
  const [day, month, year] = dateString.split('/');

  return `${year}-${month}-${day}`;
}

function transformNumericValue(value) {
  return value === '' ? null : value;
}

function getNumberOrZero(value) {
  // eslint-disable-next-line radix
  return value === '' ? 0 : parseInt(value);
}
