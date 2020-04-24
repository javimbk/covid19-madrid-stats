import fs from 'fs';
import fetch from 'node-fetch';
import { pipeline } from 'stream';
import { promisify } from 'util';

const streamPipeline = promisify(pipeline);

export default async function fetchLatestStats() {
  const response = await fetch('https://covid19.isciii.es/resources/serie_historica_acumulados.csv');
  if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);

  await streamPipeline(response.body, fs.createWriteStream('./data/raw/latestStats.csv'));
}
