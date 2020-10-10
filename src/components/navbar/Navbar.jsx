import React from "react";
import styled from "styled-components";

const StyledNavbar = styled.div`
    height: 50px;
    background-color: #ea515a;
    box-shadow: #000a 0px 0px 20px 0.5px;
    color: white;
    position: relative;
    text-align: right;
`
const Logo = styled.div`
    font-size: 25px;
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-weight: 900;
    @media (max-width: 1050px){
        display: none;
    }
`
const Link = styled.a`
    position: relative;
    font-size: 20px;
    top: 15px;
    margin: 20px;
    transform: translateY(-50%);
    font-weight: 700;
    @media (max-width: 1050px){
        font-size: 15px
    }
`


function Navbar() {
	return <StyledNavbar>
        <Logo>
            Payment Gateway
        </Logo>
        <Link>
            About us
        </Link>
        <Link>
            Faq
        </Link>
    </StyledNavbar>
}

export default Navbar;
