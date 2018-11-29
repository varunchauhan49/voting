import React, { Component } from 'react';
import { Doughnut,defaults} from 'react-chartjs-2';
import { Row, Col, Button } from 'reactstrap';

// defaults.labelFontSize = 24;
// defaults.global.legend.display = false;

const doughnut = {
  labels: [
    'Yes',
    'No'
  ],
  datasets: [
    {
      data: [1,1],
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

class Poll extends Component {
  constructor(props,context){
    super(props,context);
    this.state = {
      votes: props.json.answer.options.length || 0,
      title: props.json.title || "",
      dateItem: props.json.publishedDate || 0,
      graphData:{}
    }
  }

  componentDidMount(){
    let colors = ['#e66c1e','#103a6d','#77aac6','#bd2130','#17a2b8','#ffc107','#d39e00'];
    
    let gData = {
      labels: [],
      datasets: [
        {
          data: [],
          backgroundColor: [
          ],
          hoverBackgroundColor: [
          ],
        }],
    };
    this.props.json.answer.options.map((item,i) => {
      gData.labels.push(item.label);
      gData.datasets[0].data.push(1);
      gData.datasets[0].backgroundColor.push(colors[i]);
      gData.datasets[0].hoverBackgroundColor.push(colors[i]);
    })
    this.setState({graphData:gData})
  }

  handleClick(key){
    let {votes,graphData} = this.state;
    let index = graphData.labels.indexOf(key);
    graphData.datasets[0].data[index] = graphData.datasets[0].data[index] + 1;

    this.setState({votes: votes + 1,
      graphData: graphData})
  }

  render() {
    const {graphData, votes, dateItem,title} = this.state;

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
    let currDate = new Date(dateItem * 1000);
    let monthsArr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let dateString = currDate.getDate() + ' ' + monthsArr[currDate.getMonth()] + ' ' + currDate.getFullYear()
    let self = this;
    let buttonList = [];
    this.props.json.answer.options.map((item,i) => {
      buttonList.push (
        <Button
          key={"button-" + item.id}
          style={{color:'white',background:'#e66c1e',border:'0px',marginRight:'10px'}}
            onClick={() => self.handleClick(item.label)} 
            size="sm">
          <strong>{item.label}</strong>
        </Button>
      )
    });
    return (
      <Row>
        <Col xs="12" sm="6">
          <div id="pollTitleDiv" key="pollTitleDiv" style={pollTitleDiv}>
            <i className="fa fa-comment" aria-hidden="true"></i>
            <span style={pollTitleCss}>Today's Poll</span>
          </div>
          <div id="pollHeadingDiv" key="pollHeadingDiv" style={pollHeadingDiv}>
            <span>{title}</span>
            <strong style={dateCss}>
              {dateString}
            </strong>
          </div>
          <div id="voteButton" style={voteButtonCss}>
            {buttonList}
          </div>
          <div id="totalVotes" key="totalVotes" style={totalVotes}>
            <span>Total number of votes recorded: {votes}</span>
          </div>
        </Col>
        <Col xs="12" sm="6">
          <Doughnut data={graphData} redraw={true}  />
        </Col>
        <hr />
      </Row>

    );
  }
}

export default Poll;
