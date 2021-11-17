import React,{Component} from 'react'
import { FaBeer } from 'react-icons/fa';
import { AiFillEdit } from "react-icons/ai";

class TextEdit extends Component {
    state={
        sentence:'hello good morning!',
        trigger:true
    };
    ToggleEl=()=>{
        this.setState({trigger:!this.state.trigger});
    };
    changeLis=(e)=>{
        this.setState({sentence:e.target.value})
    };


    render() {
        return(

            this.state.trigger?<div >{this.state.sentence}<AiFillEdit onClick={this.ToggleEl}/></div>:<div><input value={this.state.sentence} onBlur={this.ToggleEl} onChange={this.changeLis} /><AiFillEdit onClick={this.ToggleEl}/></div>
        )
    }

}

export default TextEdit;
