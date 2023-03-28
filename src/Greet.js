import React, { Component } from 'react'
import { Greet2 } from './Greet2';

export class Greet extends Component {

    constructor(props) {
      super(props)
        console.log("In parent constructor!")
      this.state = {
         name1: "stage1"
      }
    }
    static getDerivedStateFromProps(props, state){
        // Cannot call this.setState, since static. 
        console.log("In parent getDerivedStateFromProps!")
        //Returns an object that represents new state. 
        return {
            name1 : props.attr
        };
    }


    test = ()=> {
        this.setState({name1 : "stage2"});
    }
    //reads this.state and this.props and returns jsx. Cannot change state or interact with dom or make ajax calls is prohibited
  render() {
    console.log("In parent render!")
    return (
      <div>
       {this.state.name1}
       <Greet2 attr= "payal2"/>
      </div>
    )
  }

//: Called when component and all child components have been rendered to dom. here we can interact with dom, call ajaxmethods to load data  
  componentDidMount(){
    console.log("In parent componentDidMount!")
        this.setState({name1: "new state"})
    }
}

export default Greet
