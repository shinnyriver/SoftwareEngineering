import React from 'react';

function Ex1() {
    const hello = () => {
        return "Hello World!";
    };

    return (
        <div className="Ex1">
            <p id="demo">{hello()}</p>
        </div>
    );
}

export default Ex1;
