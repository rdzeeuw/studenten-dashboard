import React from 'react';
import './main.css'
// import {VictoryBar, VictoryChart} from 'victory'

function Main({data}) {


  return (
    <main className="main">
        <h3 className="main-title">Main</h3>

        {/* <VictoryChart
          style={{tickLabels: {fontSize: 120}}}
          width='860'
          height='300'
          domainPadding={50}
          padding={{top: 10, bottom: 40, left: 80, right: 100}}
        >
          <VictoryBar data={data} x='exercise' y='difficulty' />
        </VictoryChart> */}
    </main>
    )
}

export default Main;
