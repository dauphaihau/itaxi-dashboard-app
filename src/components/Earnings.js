import React from 'react';
import {Area, AreaChart, ResponsiveContainer, Tooltip} from "recharts";

import {chartData} from '../assets/data/chartData'
import styled from "styled-components";
import {cardStyles} from "./ReusableStyles";

const Earnings = () => {
    return (
        <Section>
            <div className="top">
                <div className="info">
                    <h5>This month earnings</h5>
                    <h1>$682.5</h1>
                    <div className="growth">
                        <span>+2.45%</span>
                    </div>
                </div>
            </div>
            <div className="chart">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        width={500}
                        height={400}
                        data={chartData}
                        margin={{top: 0, left: 0, right: 0, bottom: 0}}
                    >
                        <Tooltip cursor={false}/>
                        <Area
                            animationBegin={800}
                            animationDuration={2000}
                            type="monotone"
                            dataKey="data"
                            stroke="#fff"
                            fill="#7E7A713D"
                            strokeWidth={4}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </Section>
    );
}

const Section = styled.section`
  ${cardStyles};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 20rem;
  padding: 2rem 0 0 0;

  .top {
    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.2rem;

      h5 {
        font-size: 1.8rem;
      }

      h1 {
        font-size: 3rem;
        line-height: 2rem;
      }

      .growth {
        background-color: #505050;
        padding: 0.5rem;
        border-radius: 1rem;
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

  .chart {
    height: 70%;

    .recharts-default-tooltip {
      background-color: black !important;
      border-color: black !important;
    }
  }
`

export default Earnings;