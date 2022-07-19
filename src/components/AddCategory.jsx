import React from 'react'
import { useState } from 'react'


export const AddCategory = ({setCategory}) => {
    const [value, setValue]= useState("");
    const [error, seterror]= useState(false);


    const searchGif = e =>{
        e.preventDefault()
        if (value===""){
            seterror(true);
            return;
        }
        seterror(false);
        setCategory(value);
        setValue("")
        // console.log("wnter form");
    }
  return (
    <>
            <form onSubmit={searchGif}>
                <input type="tex" placeholder='Search...'
                    onChange={e => setValue(e.target.value)}
                    value={value}
                
                />
            </form>
            {error? <p className='error'>El campo no puede estar vacio</p> : ""}
            
    </>
    
  )
}
