//input alanı 

import React from 'react'
import { useState } from 'react';

    const CategoryForm = ({onAddCategory}) =>{
    const [category, setCategory] = useState({name:"", id:"",status:[]});
    function handleClick(e) {
        const newCategory = {name:category.name,id:Math.random(),status:[]}
        // // Defaultta yaptığı işlemi engeller
        // e.preventDefault()
        onAddCategory(newCategory) 
        setCategory({name:""})
    }
    return (
        <div>
        
            <input
                onChange={(e) => {
                    setCategory({name:e.target.value});
                }}
                value={category.name}
            />
            {/* butonda map dönüyorsa buton içerisindeki method arrow function şeklinde yazılabilir  */}
            <button onClick={handleClick}>EKLE</button>
        </div>

    )
}

export default CategoryForm