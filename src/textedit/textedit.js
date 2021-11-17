import React,{Component} from 'react'
//new fresh dlc

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
            this.state.trigger?<div onClick={this.ToggleEl}>{this.state.sentence}</div>:<input value={this.state.sentence} onBlur={this.ToggleEl} onChange={this.changeLis}/>
        )
    }

}

export default TextEdit;
