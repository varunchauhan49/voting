import React, { Component } from 'react';
import { Doughnut,defaults} from 'react-chartjs-2';
import Poll from './Poll';
import PollList from './PollList';
import { Card, CardBody, CardColumns, CardHeader, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

defaults.labelFontSize = 24;
defaults.global.legend.display = false;

const doughnut = {
  labels: [
    'Red',
    'Green',
    'Yellow',
  ],
  options: {
    legend: {
       display: false
    },
    tooltips: {
       enabled: false
    }
},
  datasets: [
    {
      data: [34,66],
      backgroundColor: [
        '#e66c1e',
        '#103a6d',
      ],
      hoverBackgroundColor: [
        '#e66c1e',
        '#103a6d',
      ],
    }],
};

class App extends Component {
  render() {
    let pollListCss = {
      display: 'flex',
      flexWrap: 'wrap'
    }
    return (
      <div className="App">
        <Poll votes={158}/>
        <Row style={pollListCss}>
          <PollList style ={{flex: '1 0 50%'}}/>
          <PollList style ={{flex: '1 0 50%'}}/>
          <PollList style ={{flex: '1 0 50%'}}/>
          <PollList style ={{flex: '1 0 50'}}/>
        </Row>
      </div>
    );
  }
}

export default App;
