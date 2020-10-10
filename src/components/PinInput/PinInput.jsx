import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const StyledInput = styled.input`
	font-size: 25px;
	width: 50px;
	text-align: center;
	padding: 10px 0px;
	margin: 5px;
	border: 1px solid
		${(props) =>
			props.correct === null ? "gray" : props.correct ? "#5cb85c" : "#d9534f"};
	border-radius: 10px;
	color: ${(props) =>
		props.correct === null ? "black" : props.correct ? "#5cb85c" : "#d9534f"};
	background-color: ${(props) =>
		props.correct === null ? "white" : props.correct ? "#e2e8e7" : "#fae3e4"};
	&:focus {
		outline: none;
		box-shadow: #5969ff 0px 0px 7px 0.5px;
		/* box-shadow:  0px 0px 3px inset; */
	}
`;

class PinInput extends React.Component {
	constructor(props) {
		super(props);
		this.values = Array(this.props.length).fill("");
		this.reference = [];
	}
	inputHandler = (e, index) => {
		let { value } = e.target;

		const { inputLimitLength, length } = this.props;

		if (value.length === inputLimitLength && index + 1 !== length) {
			this.reference[index + 1].value = "";
			this.values[index + 1] = "";
			this.reference[index + 1].focus();
		}

		this.values[index] = value;
		this.props.onChange(this.values.join(""));
	};
	keyPress = (e, index) => {
		const { inputLimitLength, length } = this.props;
		const { value } = e.target;
		if (e.key === "Backspace") {
			if (value.length === 0 && index !== 0) {
				this.reference[index - 1].focus();
			}
		} else {
			if (value.length >= inputLimitLength && index + 1 !== length) {
				this.reference[index + 1].value = "";
				this.reference[index + 1].focus();
			} else if (value.length >= inputLimitLength && index + 1 === length) {
				e.preventDefault();
			}
		}
	};
	pasteHandler = (e, index) => {
		let stringPasted = e.clipboardData.getData("text");

		let sLength = stringPasted.length;
		let { length: inputLength, inputLimitLength } = this.props;
		let stringIterator = 0,
			inputIterator = index;

		while (stringIterator < sLength && inputIterator < inputLength) {
			 const inputString = stringPasted.slice(
				stringIterator,
				stringIterator + inputLimitLength
            );
            this.reference[inputIterator].value = inputString
            this.values[inputIterator] = inputString
			this.reference[inputIterator].focus();
			stringIterator += inputLimitLength;
			inputIterator++;
		}
		this.props.onChange(this.values.join(""));
		e.preventDefault();
	};
	render() {
		return (
			<div>
				{this.values.map((_, index) => (
					<StyledInput
						type="text"
						key={index}
						onPaste={(e) => this.pasteHandler(e, index)}
						onChange={(e) => this.inputHandler(e, index)}
						onKeyDown={(e) => this.keyPress(e, index)}
						ref={(n) => (this.reference[index] = n)}
						correct={this.props.correctState}
					/>
				))}
			</div>
		);
	}
}
PinInput.protoTypes = {
	length: PropTypes.number,
	inputLimitLength: PropTypes.number,
};

PinInput.defaultProps = {
	length: 4,
	inputLimitLength: 4,
};

export default PinInput;
