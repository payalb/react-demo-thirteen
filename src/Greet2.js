import React, { Component } from 'react'

export class Greet2 extends Component {

    constructor(props) {
      super(props)
      console.log("In child component!")
      this.state = {
         name1: "stage1"
      }
    }
    static getDerivedStateFromProps(props, state){
      console.log("In child getDerivedStateFromProps!")
        return {
            name1 : props.attr
        };
    }

    //if component should re-render or not. Compare existing props with new and if it should re-render or no.
    shouldComponentUpdate(nextProps, nextState){
      //should not call setState..
        return true;
    }


    test = ()=> {
        this.setState({name1 : "stage2"});
    }
  render() {
    console.log("In child render!")
    return (
      <div>
       {this.state.name1}
      </div>
    )
  }

  getSnapshotBeforeUpdate(prevProp, prevState){
      //called right before changes from virtual dom to be applied to DOM
      //Used to capture some info from the dom.
      //returned value, passed as 3rd parameter to componentDidUpdate method/
      return null;
  }
  
  componentDidMount(){
    console.log("In child componentDidMount!")
        this.setState({name1: "new state"})
    }

    componentDidUpdate(prevProps , prevState, snapshot){
      //called only once in each re-render cycle. Can make ajax calls. Can compare prevProps with new and then decide.
    }
}

export default Greet2
