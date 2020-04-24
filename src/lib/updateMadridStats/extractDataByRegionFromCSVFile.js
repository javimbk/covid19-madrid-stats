
import Papa from 'papaparse';
import fs from 'fs';

export default async function extractDataByRegionFromCSVFile() {
  const fullData = await loadAndParseFile();
  const groupedData = groupDataByRegion(fullData);

  return groupedData;
}

async function loadAndParseFile(filePath) {
  const csvFile = fs.readFileSync('./data/raw/latestStats.csv');
  const csvData = csvFile.toString();

  return new Promise(resolve => {
    Papa.parse(csvData, {
      header: true,
      complete: (results) => {
        resolve(results.data);
      }
    });
  });
}

function groupDataByRegion(fullData) {
  return fullData.reduce((acc, current) => {
    const regionId = current['CCAA'];
    if (regionId.length !== 2) { return acc; }

    if (!acc[regionId]) {
      acc[regionId] = [];
    }

    acc[regionId].push(current);
    return acc;
  }, {});
}