import React from 'react';

function Wrapper({children}){
    const style ={
        border: '3px solid green',
        padding: '16px',
    };
    return (
        <div style={style}>
            {children}
        </div>
    )
}
export default Wrapper;