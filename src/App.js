import React, { Component } from 'react';
import Poll from './Poll';
import PollList from './PollList';
import { Card, CardBody, CardColumns, CardHeader, Row, Col } from 'reactstrap';
import pollData from './pollData';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// defaults.labelFontSize = 24;
// defaults.global.legend.display = false;


class App extends Component {
  constructor(props,context){
    super(props,context);
    this.state = {
      pollJson: pollData.polls,
      selected: pollData.polls[0]
    }
  }
  render() {
    let pollListCss = {
      display: 'flex',
      flexWrap: 'wrap'
    }
    const {pollJson, selected} = this.state;
    return (
      <div className="App" style={{padding:'10%'}}>
        <Poll votes={158} json={selected} />
        <Card style={{marginTop:'10%'}}>
          <CardBody>
            <Row>
              <Col xs="12" sm="6">
                <PollList />
              </Col>
              <Col  xs="12" sm="6">
                <PollList />
              </Col>
            </Row>
            <Row>
              <Col xs="12" sm="6">
                <PollList />
              </Col>
              <Col  xs="12" sm="6">
                <PollList />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default App;
