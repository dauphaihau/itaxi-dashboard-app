import React from 'react';
import styled from "styled-components";
import {transactionsData} from "../assets/data/transactionsData";
import {HiArrowNarrowRight} from "react-icons/all";
import {cardStyles} from "./ReusableStyles";

const Transfers = () => {
    return (
        <Section>
            <div className='title'>
                <h2>YOUR TRANSFERS</h2>
            </div>
            <div className="transactions">
                {
                    transactionsData.map((item, index) => (
                        <div className='transaction'>
                            <div className='transaction__title'>
                                <div className='transaction__title__image'>
                                    <img src={item.image} alt=""/>
                                </div>
                                <div className='transaction__title__detail'>
                                    <h3>{item.name}</h3>
                                    <h5>{item.time}</h5>
                                </div>
                            </div>
                            <div className='transaction__amount'>
                                <span>{item.amount}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
            <a className="view" href="#">
                View all <HiArrowNarrowRight/>
            </a>
        </Section>
    );
}

const Section = styled.section`
  ${cardStyles};
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .title {
    h2 {
      color: #fff;
      font-family: 'Dongle', sans-serif;
      letter-spacing: 0.3rem;
    }
  }

  .transactions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;

    .transaction {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      &__title {
        display: flex;
        gap: 1rem;

        &__image {
          img {
            height: 50px;
            border-radius: 2rem;
          }
        }

        &__detail {
          h5 {
            line-height: 5px;
          }
        }
      }

      &__amount {
        background-color: #505050;
        padding: 0.2rem 0.5rem;
        width: 4rem;
        border-radius: 1rem;
        text-align: center;
        transition: 0.3s ease-in-out;

        &:hover {
          background-color: #fff;

          span {
            color: black;
          }
        }

        span {
          color: #fff;
        }
      }
    }
  }

  .view {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    margin-top: 1rem;
    gap: 0.5rem;

    svg {
      transition: 0.3s ease-in-out;
      font-size: 1.4rem;
    }

    &:hover {
      svg {
        transform: translateX(0.5rem);
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 375px) {
    .transactions {
      .transaction {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
    }
  }
`

export default Transfers;