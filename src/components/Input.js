import React from "react";

function Input ({type,placeholder},ref) {

    return <input ref={ref} type={type} placeholder = {placeholder}/>
}

const forwardRefInput = React.forwardRef(Input);

export default forwardRefInput;