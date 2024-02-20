// function based components
import React from "react";

// PascalCasing
function Message() {
    // jsx
    const name = "Patricia"
    if (name){
        return <h1>Hello {name}!</h1>; 
    }else{
        return <h1>Hello World!</h1>; 
    }
}

export default Message;