import React, { Component } from 'react';
import Poll from './Poll';
import PollList from './PollList';
import { Card, CardBody} from 'reactstrap';
import pollData from './pollData';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


class App extends Component {
  constructor(props,context){
    super(props,context);
    this.state = {
      pollJson: pollData.polls,
      selected: pollData.polls[0]
    }
  }
  handleSelect(id){
    let select;
    const {pollJson} = this.state;
    pollJson.forEach((item) => {
      if(item.id ===id){
        select = item;
      }
    });
    this.setState({selected:select})
  }
  render() {
    const {pollJson, selected} = this.state;
    let self = this;
    return (
      <div className="App" style={{padding:'10%'}}>
        <Poll votes={158} json={selected} />
        <Card style={{marginTop:'10%'}}>
          <CardBody>
            <div className="row container-fluid">
              {
                pollJson.map((item,i) => {
                  if(item.id !== selected.id){
                    return (<PollList key={"poll-" + i} json={item} clickitem={() => self.handleSelect(item.id)} />)
                  }
                })
              }
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default App;
