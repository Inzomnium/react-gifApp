import { useState } from "react";





export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setinputValue] = useState('') 

  const enInputChange = (event) => {

    setinputValue(event.target.value);

  }

    const onSubmit = (event) => {
        event.preventDefault();
        //previene el gatillo de la funcion cuando hay 0 o 1 caracter en el inmput
        if (inputValue.trim(). length <= 1) return;
        //setCategories( categories  => [inputValue, ...categories])
        onNewCategory( inputValue.trim() );
        setinputValue(' ')
        
    }

    return (
        <form  onSubmit={onSubmit}>

        <input 
         type="text"
         placeholder="input text to search"
         value={inputValue}
         onChange={ (event) => enInputChange(event) }
        />
        

        </form>
    )


}