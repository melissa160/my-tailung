import * as React from 'react'

class ButtonName extends React.Component <any, any>{
  constructor(props: string) {
    super(props)
    this.state = { name: this.props.defaultName }
  }
  public handleChange(event: any) : void {
    //this.setState({name: (this.state.name === this.props.defaultName) ?  "Camila" : "Pepito"})
    this.setState({ name: event.target.value})
  } 

  public render() {
    return(
      <div>
        {/*<button
          name = "update"
          onClick = { e => this.handleChange(e) }
        > Update
        </button>*/}
        <input
          onChange = { e => this.handleChange(e) }
        />
        <div>
          Hello { this.state.name }
        </div>
      </div>
    )
  }

}

export default ButtonName
