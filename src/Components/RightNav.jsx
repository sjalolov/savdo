import React from 'react';
import styled from 'styled-components';
import {Link, NavLink} from 'react-router-dom';



const Ul = styled.ul`
list-style: none;
display: flex;
flex-flow: row nowrap;
padding-top: 80px;
z-index: 10;
padding-right: 10%;
  
.menu{
    padding: 18px 12px;
    padding-left: 40px;
    padding-right: 40px;
}

.active{
    box-shadow: 0px 5px 0px darkred;
}

.navlink{
    text-decoration: none;
    color: black;
    font-weight: bold;
    padding-bottom: 10px;
}



@media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 50vh;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
        color: #fff;
    }

}



`

const RightNav = () => {
    return(
        <Ul>
            {/* <li className="menu">
            <NavLink activeClassName="active" className="navlink" exact to="/">Home <span className="sr-only"></span></NavLink>
            </li> */}
            <li className="menu">
            <NavLink activeClassName="active" className="navlink" exact to="checkout">Checkout</NavLink>
            </li>
            <li className="menu">
            <NavLink activeClassName="active" className="navlink" exact to="transactions">Transactions</NavLink>
            </li>
        </Ul>
    )
}

export default RightNav;