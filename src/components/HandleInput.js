import React,{useEffect,useState,useReducer} from 'react';
import Ipdiv from './Ipdiv';
import { Col } from "react-bootstrap";

const reducer = (state, action) => {
    switch(action.type) {
      case "Update":
        let newD = new Date();
        newD = newD.toLocaleString("en-US", {
            timeZone: "America/Los_Angeles"
          });
          state=newD;
        return (state);
      default:
        return state;
    }
  }

const HandleInput = (props) => {
    const {input}=props;
    const [state, dispatch] = useReducer(reducer, 0);
    var isArr=false;
    var isFalsy=false;
    var isOther=false;
    if(!input){
        isFalsy=true;
    }
    else if(Array.isArray(input))
    {
    isArr=true;
    }
    else{
        isOther=true;
    }

    useEffect(() => {
    setInterval(() => {
        dispatch({type: "Update"});
    }, 1000);
    }, []);

    return (
        <div>
            <h3>Handling various input types:</h3>

            {isFalsy && (<div>
                {state}
            </div>)}

            {isArr &&
                    (input?.map((ip) => {
                    return (
                        <Col md={3}>
                        {" "}
                        
                        <Ipdiv
                            key={ip}
                            id={ip}
                            ip={ip}
                        />{" "}
                        </Col>
                    );
                    }))}

            

            {isOther && (<div>
               <h4>Printing value of input prop:</h4> {input}
            </div>)}
            
        </div>
    );
};

export default HandleInput;