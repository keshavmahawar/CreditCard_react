import React from "react";
import styled from "styled-components";
const InputGroup = styled.div`
	margin: 30px 0px;
	border-bottom: 2px solid #eb6c84;
	padding: 3px;
	position: relative;

	& .label {
		font-size: 12px;
		margin-bottom: 8px;
	}

	& .iconInputGroup {
		display: flex;
		align-items: baseline;
		color: #eb6c84;
	}

	& input {
		width: calc(100% - 20px);
		padding: 0px 10px;
		font-size: 25px;
		border: none;
    }
    & input:focus{
        outline: 0px;
    }
`;
const FlexDiv = styled.div`
	display: flex;

	& > div {
		flex: 1;
		margin-left: 70px;
	}
	& > div:first-child {
		margin-left: 0px;
	}
`;

const FontBig = styled.div`
	font-size: 25px;
`;

const CenterLine = styled(FontBig)`
	text-align: center;
	& span {
		color: #eb6c84;
		font-weight: 700;
	}
`;

const StyledButton = styled.div`
	font-size: 25px;
	padding: 15px;
	width: 150px;
	margin: 20px auto;
	background-color: #ea515a;
	border-radius: 15px;
	color: white;
	text-align: center;
`;
function Form(props) {
	let { parentRef } = props;
	let { state } = parentRef;
	let inputListMain = [
		{ label: "CARDHOLDER NAME", name: "name", icon: "fas fa-user" },
		{ label: "CARD NUMBER", name: "cardNo", icon: "fas fa-credit-card" },
	];
	let inputListSecondary = [
		{ label: "EXPIRY MONTH", name: "month", icon: "fas fa-calendar" },
		{ label: "EXPIRY YEAR", name: "year", icon: "fas fa-calendar" },
		{ label: "CVC", name: "cvc", icon: "fas fa-lock" },
	];
	return (
		<div>
			<FontBig>Payment details</FontBig>
			{inputListMain.map((group) => (
				<InputGroup key={group.name}>
					<div className="label">{group.label}</div>
					<div className="iconInputGroup">
						<i className={group.icon}></i>
						<input
							type="text"
							name={group.name}
							value={state[group.name]}
							onChange={parentRef.formHandler}
						/>
					</div>
				</InputGroup>
			))}
			<FlexDiv>
				{inputListSecondary.map((group) => (
					<InputGroup key={group.name}>
						<div className="label">{group.label}</div>
						<div className="iconInputGroup">
							<i className={group.icon}></i>
							<input
								type="text"
								name={group.name}
								value={state[group.name]}
								onChange={parentRef.formHandler}
							/>
						</div>
					</InputGroup>
				))}
			</FlexDiv>

			<CenterLine>
				Payment amount: <span>12 30₹</span>
			</CenterLine>
			<StyledButton>PAY</StyledButton>
		</div>
	);
}

export default Form;
