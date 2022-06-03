import React from 'react';

const Ipdiv = (props) => {
    const{ip}=props;
    console.log(props)

    console.log(ip)
    return (
        <div>
            {ip}
        </div>
    );
};

export default Ipdiv;