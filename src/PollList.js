import React, { Component } from 'react';
import { Doughnut,defaults} from 'react-chartjs-2';
import { Row, Col } from 'reactstrap';

// defaults.labelFontSize = 24;
defaults.global.legend.display = false;

const doughnut = {
  datasets: [
    {
      data: [50,50],
      backgroundColor: [
        '#77aac6',
        '#d95e07',
      ],
      hoverBackgroundColor: [
        '#77aac6',
        '#d95e07',
      ],
    }],
};

export default function PollList (props) {
    let pollTitleDiv = {
      padding:'10px',
      textAlign:'left',
      color:'rgba(16, 58, 109, 0.85)'
    };
    let pollTitleCss = {
      marginLeft: '10px',
      fontSize:'22px',
      fontWeight:'600',
      cursor:'pointer'
    };
    let pollHeadingDiv = {
      padding:'0px 20px 20px 30px',
      textAlign:'left',
      cursor:'pointer'
    }
    let currDate = new Date(props.json.publishedDate * 1000);
    let monthsArr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let dateString = currDate.getDate() + ' ' + monthsArr[currDate.getMonth()] + ' ' + currDate.getFullYear();
    return (
      <div className="col-md-6 col-xs-12 col-sm-6 col-lg-6">
        <Row>
          <Col xs="12" sm="4">
            <Doughnut data={doughnut}  />
          </Col>
          <Col xs="12" sm="8" onClick={() => props.clickitem(props.json.id)}>
            <div id="pollTitleDiv" key="pollTitleDiv" style={pollTitleDiv}>
              <i className="fa fa-comment" aria-hidden="true"></i>
              <span style={pollTitleCss}>{dateString}</span>
            </div>
            <div id="pollHeadingDiv" key="pollHeadingDiv" style={pollHeadingDiv}>
              <span>{props.json.title}</span>
            </div>
          </Col>
          <hr />
        </Row>
      </div>

    );
  };
