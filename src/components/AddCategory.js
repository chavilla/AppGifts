import React, { useState } from 'react';

import PropTypes from 'prop-types';

const AddCategory = ({setCategory}) => {

    const [inputValue,setInputValue]=useState('');

    const handleChange=(value)=>{
        //console.log('handleChange called');
        setInputValue(value);
    }


    const handleSubmit=(e)=>{
        e.preventDefault();

       // console.log('handle submit');

        if(inputValue.trim().length<3) return false;

        setCategory(state=>[inputValue]);
        setInputValue('');
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            <input
                type='text'
                onChange={(e)=>handleChange(e.target.value)}
                value={inputValue}
                placeholder='Agrega un Héroe'
            />
        </form>
     );
}

AddCategory.propTypes={
    setCategory:PropTypes.func.isRequired
}

export default AddCategory;