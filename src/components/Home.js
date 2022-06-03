import React from 'react';
import Button from '@mui/material/Button';
import {
    Link
  } from "react-router-dom";
const Home = () => {

    return (
        <div>
            <h3>Please click on any of the button below:</h3>
            <Link to="/first">
            <Button>Falsy Input</Button>
            </Link>
            <div>
            <Link to="/second">
            <Button>Array Input</Button>
            </Link>

            </div>
            <Link to="/third">
            <Button>Any other input</Button>
            </Link>
        </div>
    );
};

export default Home;