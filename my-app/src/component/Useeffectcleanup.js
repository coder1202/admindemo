import React, { useEffect, useState } from 'react'

const Useeffectcleanup = () => {
    const [widthCount, setwidthCount] = useState(window.screen.width);

    const actualWidth = () => {
        console.log(window.innerWidth);
        setwidthCount(window.innerWidth);
    }

    useEffect  (() => {
        console.log("add event");
        window.addEventListener("resize", actualWidth);
        return()=>
        {
            console.log("Remove event");
            window.removeEventListener("resize",actualWidth);   
        }
    });
    return (

        <div>
            <p>the actual size of the window is :</p>
            <h1> {widthCount}</h1>
        </div>
    )
}

export default Useeffectcleanup