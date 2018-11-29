import React, { Component } from 'react';
import { Doughnut,defaults} from 'react-chartjs-2';
import { Row, Col, Button } from 'reactstrap';

// defaults.labelFontSize = 24;
// defaults.global.legend.display = false;

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

class PollList extends Component {
  constructor(props,context){
    super(props,context);
    this.state = {
      votes: props.votes || 0
    }
  }
  render() {
    const {votes} = this.state;

    let pollTitleDiv = {
      padding:'10px',
      textAlign:'left',
      color:'rgba(16, 58, 109, 0.85)'
    };
    let pollTitleCss = {
      marginLeft: '10px',
      fontSize:'22px',
      fontWeight:'600'
    };
    let pollHeadingDiv = {
      padding:'0px 20px 20px 30px',
      textAlign:'left',
    }
    let voteButtonCss = {
      padding: '20px 20px 20px 40px',
      textAlign:'left'
    }
    let dateCss = {
      marginLeft:'10px',
      fontSize:'14px',
      color:'#3c6491'
    }
    let totalVotes={
      textAlign:'left',
      padding:'20px',
      fontSize:'13px',
      fontWeight:'500'
    }
    let currDate = new Date(1516605447 * 1000);
    let monthsArr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let dateString = currDate.getDate() + ' ' + monthsArr[currDate.getMonth()] + ' ' + currDate.getFullYear()
    return (
      <Row>
        <Col xs="12" sm="6">
          <div id="pollTitleDiv" key="pollTitleDiv" style={pollTitleDiv}>
            <i className="fa fa-comment" aria-hidden="true"></i>
            <span style={pollTitleCss}>Today's Poll</span>
          </div>
          <div id="pollHeadingDiv" key="pollHeadingDiv" style={pollHeadingDiv}>
            <span>Is bitcoin worth the time and money that mining requires?</span>
            <strong style={dateCss}>
              {dateString}
            </strong>
          </div>
          <div id="voteButton" style={voteButtonCss}>
            <Button style={{color:'white',background:'#e66c1e',border:'0px'}} size="sm">
              <strong>Yes</strong>
            </Button>
            <Button style={{color:'white',background:'#103a6d',border:'0px'}} size="sm">
              <strong>No</strong>
            </Button>
          </div>
          <div id="totalVotes" key="totalVotes" style={totalVotes}>
            <span>Total number of votes recorded: {votes}</span>
          </div>
        </Col>
        <Col xs="12" sm="6">
          <Doughnut data={doughnut}  />
        </Col>
        <hr />
      </Row>

    );
  }
}

export default PollList;
