import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {

    const [ categories, setCategories] = useState( ['casa'] )
    
    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) {
            
            return;
        }
        
       

       // setCategories( cat => ([...cat,'Hola']))


        setCategories([newCategory,...categories])


    }
   

    return (
        <>


        <h1>Gif Expert App</h1>

        <AddCategory 
            onNewCategory={(event) => onAddCategory(event) } 
        />

            { 
            categories.map( (category, i) => (
               
                    <GifGrid 
                    key={category+i} 
                    category={ category } 
                    />
                    
                )

            )
            }


       


        </>
    )

}