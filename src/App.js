import React from 'react';
import './App.css';
import LineGraph from './components/LineGraph';
import madridData from './data/madrid_stats.json';
import getGraphData from './utils/getGraphData';
import { humanizeDateString } from './utils/formatUtils';

function App() {
  // FIXME: Iterate through the data once and return all datasets.
  const madridCurrentHospitalizedGraphData = getGraphData({ data: madridData, filterProp: 'currentHospitalized' });
  const madridCurrentICUGraphData = getGraphData({ data: madridData, filterProp: 'currentICU' });
  const madridAccumulatedPositives = getGraphData({ data: madridData, filterProp: 'accumulatedPositives' });

  const latestDataFrom = madridData[madridData.length - 1].date;

  const colors = ['#e8c1a0', '#f47560', '#f1e15b', '#e8a838', '#61cdbb', '#97e3d5'];

  return (
    <div className="App">
      <h1>Estado Actual Hospitales de Madrid</h1>
      <h3>
        Últimos datos correspondientes al día anterior:
        {' '}
        {humanizeDateString(latestDataFrom)}
      </h3>
      <p style={{ textAlign: 'left' }}>
        La finalidad de esta web es ofrecer de manera sencilla el estado actual
        de la carga del sistema sanitario de Madrid.
        <br />
        Los datos son los reportados por la propia Comunidad de Madrid al
        Ministerio de Sanidad y se actualizan cada día por la mañana.
      </p>
      <p style={{ textAlign: 'left' }}>
        Con esto no se pretende decir que ya hemos superado la crisis del COVID-19, sólo
        ofrecer unos datos que creemos son más fiables que el numero de positivos (que realmente es
        varias magnitudes mayor) y reconocer el gran trabajo que están haciendo nuestros sanitarios
        a pesar de no disponer de los medios necesarios debido a las decisiones tomadas por los
        distintos gobiernos a lo largo de los años.
      </p>
      <br />
      <div className="main-dashboard">
        <div id="main-dashboard-hospitalized" className="main-dashboard__element">
          <div className="main-dashboard__element__title">Hospitalizados</div>
          <div className="main-dashboard__element__subtitle">{madridCurrentHospitalizedGraphData[madridCurrentHospitalizedGraphData.length - 1].y}</div>
        </div>

      </div>
      <h4>Evolución de hospitalizados a lo largo de los días</h4>
      <div style={{ height: 400, maxWidth: 900, minWidth: 0, margin: '0 auto' }}>
        <LineGraph
          data={[
            {
              id: 'Madrid Hospitalized',
              data: madridCurrentHospitalizedGraphData,
            },
          ]}
          color={colors[5]}
        />
      </div>
      <div className="main-dashboard">
        <div id="main-dashboard-icu" className="main-dashboard__element">
          <div className="main-dashboard__element__title">Camas UCI ocupadas</div>
          <div className="main-dashboard__element__subtitle">{madridCurrentICUGraphData[madridCurrentICUGraphData.length - 1].y}</div>
        </div>
      </div>
      <h4>Evolución de camas de UCI ocupadas a lo largo de los días</h4>
      <div style={{ height: 400, maxWidth: 900, minWidth: 0, margin: '0 auto' }}>
        <LineGraph
          data={[
            {
              id: 'Madrid ICU',
              data: madridCurrentICUGraphData,
            },
          ]}
          color={colors[1]}
        />
      </div>
      <div className="main-dashboard">
        <div id="main-dashboard-positives" className="main-dashboard__element">
          <div className="main-dashboard__element__title">Positivos COVID19</div>
          <div className="main-dashboard__element__subtitle">{madridAccumulatedPositives[madridAccumulatedPositives.length - 1].y}</div>
        </div>
      </div>
      <h4>Número total de casos positivos de COVID19 identificados a lo largo de los días</h4>
      <div style={{ height: 400, maxWidth: 900, minWidth: 0, margin: '0 auto' }}>
        <LineGraph
          data={[
            {
              id: 'Madrid Identified Cases',
              data: madridAccumulatedPositives,
            },
          ]}
          color={colors[0]}
        />
      </div>
    </div>
  );
}

export default App;
