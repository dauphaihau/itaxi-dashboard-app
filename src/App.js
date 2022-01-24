import React from 'react';
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

const App = () => {
    return (
        <Div>
            <Sidebar/>
            <Dashboard/>
        </Div>
    );
}

const Div = styled.div`
  position: relative;
`

export default App;
