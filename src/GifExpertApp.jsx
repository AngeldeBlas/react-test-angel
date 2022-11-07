import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {
        // ESTO NO FUNCA EN REACT categories.push('valorant');
        if(categories.includes(newCategory))
            return;
        setCategories( [...categories, newCategory] );
    }

    return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>
        
        {/* input */}
        <AddCategory 
            //setCategories={ setCategories }
            onNewCategory={event => onAddCategory(event) }
        />

        {/* listado de gifs */}
        
            {categories.map(category => {
                return <GifGrid 
                    key={category} 
                    category={category}
                />
            })}
            
            {/* GiftItem */}
    </>    
    )
}
