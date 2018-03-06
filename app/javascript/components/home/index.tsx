import * as React from "react"
import * as ReactDOM from "react-dom"
import PropTypes from "prop-types"
import UnText from "./unText"
import ButtonName from "./buttonName"

export interface HomeProps { names: number[]; }

class Index extends React.Component<HomeProps, any>{
  constructor(props) {
    super(props)
    this.state = {
      name_index: 0
    }
    this.setRandomIndex = this.setRandomIndex.bind(this)
  }
  setRandomIndex(){
    this.setState({
      name_index: getRandomInt(0, 3)
    })
  }
  render() {
    return (
      <div>
        <p>
          {this.props.names[this.state.name_index]}
        </p>
        <button onClick={this.setRandomIndex}>Seleccionador</button>
        <UnText></UnText>
        <ButtonName defaultName='Pepito'></ButtonName>
      </div>
   )
  }
}
 export default Index

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function formatName(person: User){
  return "Hello, " + person.firstName + " " + person.lastName;
}

interface User {
  firstName: string;
  lastName: string;
}
let user = { firstName: "Jane", lastName: "User" };
