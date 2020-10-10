import React from "react";
import styled from "styled-components";
const RightDiv = styled.div`
	text-align: right;
`;
const CardWrapper = styled.div`
	width: 400px;
	border-radius: 15px;
	background-color: #ea515a;
	color: white;
	height: 200px;
	box-shadow: #999 5px 5px 2em, whitesmoke 40px 40px, #cccc 50px 50px 2em;
	padding: 23px;
	margin-right: 45px;
	margin-bottom: 45px;
	@import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@600&display=swap");
	font-family: "Inconsolata", monospace;
`;
const FlexDiv = styled.div`
	display: flex;

	& > div {
		margin-right: 30px;
	}
	& > div > div {
		font-size: 10px;
		margin-bottom: 10px;
	}
`;
function Card(props) {
	let { name, cardNo, month, year, cvc } = props.parentRef;
	return (
		<CardWrapper>
			<RightDiv>
				<img src="./images/visa-logo.png" height="25px" alt="visa icon" />
			</RightDiv>
			<div
				style={{
					fontSize: "32px",
					margin: "30px 0px",
					marginTop: "60px",
					height: "32px",
				}}
			>
				{cardNo}
			</div>
			<FlexDiv>
				<div>
					<div>CARD HOLDER</div>
					{name}
				</div>
				<div>
					<div>EXPIRES</div>
					{month}/{year}
				</div>
				<div>
					<div>CVC</div>
					{cvc}
				</div>
			</FlexDiv>
		</CardWrapper>
	);
}

export default Card;
