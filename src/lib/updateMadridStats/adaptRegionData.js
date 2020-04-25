export default function adaptRegionData(data) {
  return data.map(transformDataPoint);
}

function transformDataPoint(dataPoint) {
  return {
    date: transformDateString(dataPoint.FECHA),
    accumulatedPositives: transformNumericValue(dataPoint.CASOS),
    currentHospitalized: transformNumericValue(dataPoint.Hospitalizados),
    currentICU: transformNumericValue(dataPoint.UCI),
  };
}

function transformDateString(dateString) {
  const [day, month, year] = dateString.split('/');

  return `${year}-${month}-${day}`;
}

function transformNumericValue(value) {
  return value === '' ? null : value;
}
