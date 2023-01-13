import React from "react";
import { Component} from "react";

class RobotForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            type : '',
            name : '',
			mass : ''
        }
        this.handleChange = (evt) => {
            this.setState({
                [evt.target.name] : evt.target.value
            })
        }
    }
    render(){
        return <div>
            <label>Please enter name:</label>
            <input id="name" name="name" onChange={this.handleChange} />
            <label>Please enter robot type:</label>
            <input id="type" name="type" onChange={this.handleChange} />     
            <label>Please enter mass:</label>        
            <input id="mass" name="mass" onChange={this.handleChange} />
             <input type="button"  value="add" onClick={() => this.props.onAdd({
              type : this.state.type,
              name : this.state.name,
              mass : this.state.mass,
            })} />
        </div>
    }
}

export default RobotForm;