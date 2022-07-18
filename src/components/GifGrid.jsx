
import { useState, useEffect } from "react";

import { GifItem } from "./GifItem";

//import { getGifs } from "../helpers/getGifs"
import { useFetchGifs } from "../hooks/useFetchGifs";



export const GifGrid =  ({ category}) => {

        //custom hook
    const {images, isLoading} = useFetchGifs(category);

    
   
    
    return (
    <>
        <h3>{ category }</h3>
        
        {
            isLoading && (          
                <img width="300" src="/src/images/loading.gif" />
            ) 
        }

        
        <div className="card-grid">
            { 
            images.map((image) => (
                
               <GifItem 
               key={image.id}
               {... image}
                />

            ))
            }
            
            
           

        </div>
        
    
    
    </>
  )
}
