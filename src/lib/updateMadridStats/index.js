import fs from 'fs';
import adaptRegionData from './adaptRegionData';
import extractDataFromCSVFile from './extractDataByRegionFromCSVFile';
import fetchLatestStats from './fetchLatestStats';

export default async function updateMadridStats() {
  await fetchLatestStats();
  const dataByRegion = await extractDataFromCSVFile();
  const transformedMadridData = adaptRegionData(dataByRegion.MD);
  const madridStatsJSON = JSON.stringify(transformedMadridData);

  fs.writeFile('./data/madrid_stats.json', madridStatsJSON, (err) => {
    if (err) {
      console.log('Error writing JSON: ', err);
    } else {
      console.log('Success!');
    }
  });
}

updateMadridStats();
