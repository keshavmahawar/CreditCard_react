import React from "react";
import PinInput from './PinInput'

class PinPage extends React.Component {
constructor(props) {
        super(props);
        this.state = {
            correct: null,
        }
    }
    onChange = (value) =>{
        if(value.length < 5){
            this.setState({correct: null})
        }
        else{

            if(value === "12345")
            this.setState({correct: true})
            else
            this.setState({correct: false})
        }
    }

    render() {
        return <div>
            <PinInput correctState={this.state.correct} onChange={this.onChange} length={5} inputLimitLength={1}/>
        </div>;
    }
}

export default PinPage;