import React from "react";

function Ex1_2() {
    
    const hello = (val) => {return "hello " + val;}
    

    return (
        <div className="Ex1">
            <p id="demo">{hello("world!")}</p>
        </div>
    );
}

export default Ex1_2;