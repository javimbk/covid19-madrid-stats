import React from 'react';
import './App.css';
import LineGraph from './components/LineGraph';
import madridData from './data/madrid_stats.json';
import getGraphData from './utils/getGraphData';

function App() {
  // FIXME: Iterate through the data once and return all datasets.
  const madridCurrentHospitalizedGraphData = getGraphData({ data: madridData, filterProp: 'currentHospitalized' });
  const madridCurrentICUGraphData = getGraphData({ data: madridData, filterProp: 'currentICU' });
  const madridAccumulatedPositives = getGraphData({ data: madridData, filterProp: 'accumulatedPositives' });

  const colors = ['#e8c1a0', '#f47560', '#f1e15b', '#e8a838', '#61cdbb', '#97e3d5'];

  return (
    <div className="App">
      <h1>Estado Actual Hospitales de Madrid</h1>
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
