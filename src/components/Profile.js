import React from 'react';
import styled from "styled-components";

import {HiOutlineLocationMarker} from "react-icons/hi";
import imgAvatar from '../assets/images/who.png'
import {cardStyles} from "./ReusableStyles";

const Profile = () => {
    return (
        <Section>
            <div className="image">
                <img src={imgAvatar} alt=""/>
            </div>
            <div className="title">
                <h2>John</h2>
                <i className={HiOutlineLocationMarker}/>
                <span>NEW YORK, USA</span>
            </div>
            <div className="info">
                <div className="info__item">
                    <h5>Days at work</h5>
                    <h3>28</h3>
                </div>
                <div className="info__item">
                    <h5>Rides</h5>
                    <h3>427</h3>
                </div>
                <div className="info__item">
                    <h5>Hours</h5>
                    <h3>76</h3>
                </div>
            </div>

        </Section>
    );
}

const Section = styled.section`
  ${cardStyles};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .image {
    max-height: 10rem;
    border-radius: 20rem;
    overflow: hidden;

    img {
      height: 10rem;
      width: 10rem;
      object-fit: cover;
      border-radius: 20rem;
      transition: .5s ease-in-out;

      &:hover {
       transform: scale(1.1);
      }
    }
  }

  .title {
    text-align: center;

    h2 {
      color: #fff;
      font-family: 'Dongle', sans-serif;
      letter-spacing: 0.3rem;
    }
    
    span {
      line-height: 8px;
    }
  }

  .info {
    display: flex;
    gap: 1rem;

    &__item {
      text-align: center;

      h3 {
        line-height: 8px;
      }

    }
  }
`

export default Profile;











