import React from 'react';
import styled from "styled-components";
import {BiSearch} from "react-icons/bi";

const Navbar = () => {
    return (
        <Nav>
            <div className="title">
                <h4>Hi, John</h4>
                <h1> Welcome to <span>ITaxi dashboard</span></h1>
            </div>
            <div className="search">
                <BiSearch/>
                <input type="text" placeholder='search ...'/>
            </div>
        </Nav>
    );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: #fff;

  .title {
    h1 {
      span {
        margin-left: 0.5rem;
        color: #fff;
        font-family: 'Dongle', sans-serif;
        letter-spacing: 0.2rem;
      }
    }
  }

  .search {
    background-color: #212121;
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    border-radius: 1rem;

    svg {
      color: #fff;
    }

    input {
      background-color: transparent;
      border: none;
      color: #fff;
      font-family: 'Dongle', sans-serif;
      letter-spacing: 0.3rem;
      font-size: 1.5rem;

      &:focus {
        outline: none;
      }

      &::placeholder {
        color: #fff;
        font-family: 'Dongle', sans-serif;
        font-size: 1.5rem;
      }
    }

  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    .title {
      h1 {
        span {
          display: block;
          margin: 1rem 0;
          /* letter-spacing: 0; */
        }
      }
    }
  }
`

export default Navbar;