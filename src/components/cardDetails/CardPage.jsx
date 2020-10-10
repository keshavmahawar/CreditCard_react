import React from "react";
import Card from "./Card";
import Form from "./Form";
import styled from "styled-components";
const StyledCardPage = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	& .formWrapper {
		width: 500px;
	}
	& > div {
		padding: 40px 10px;
	}
	@media (max-width: 1050px) {
		flex-direction: column-reverse;
	}
`;

class CardPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "John Smith",
			cardNo: "4256 7890 5678 4532",
			month: "09",
			year: "20",
			cvc: "345",
		};
	}

	formHandler = ({ target: { name, value } }) => {
		this.setState({ [name]: value });
	};

	render() {
		return (
			<StyledCardPage>
				<div>
					<Card parentRef={this.state}/>
				</div>
				<div className="formWrapper">
					<Form parentRef={this}/>
				</div>
			</StyledCardPage>
		);
	}
}

export default CardPage;
