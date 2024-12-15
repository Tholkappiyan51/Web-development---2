import React, { useState } from 'react'

const Hoc1 = (Wrapped) => {
    return function Hoc1(props)
    {
        const[count,setCount]=useState(0);
        const click=()=>{
            setCount(count+1);
        };
        const mouse=()=>{
            setCount(count+1);
        };
        return (
            <Wrapped
            count={count}
            click={click}
            mouse={mouse}
            {...props}>
            </Wrapped>
            )
    };
}

export default Hoc1