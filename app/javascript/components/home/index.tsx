import * as React from "react"
import * as ReactDOM from "react-dom"
import PropTypes from "prop-types"

export interface HomeProps { names: number[]; }

class Index extends React.Component<HomeProps, any>{
  render() {
    return (
      <div>
        <p>
          {this.props.names[0]}
        </p>
        <h1>
          {this.props.names[1]}
        </h1>
        <button>Seleccionador</button>
      </div>
   )
  }
}
 export default Index

function formatName(person: User){
  return "Hello, " + person.firstName + " " + person.lastName;
}

interface User {
  firstName: string;
  lastName: string;
}
let user = { firstName: "Jane", lastName: "User" };
