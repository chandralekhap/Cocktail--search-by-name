import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('a')
  const [ cocktails, setCocktails] = useState([])

  const fetchApi =  async () => {
 
    
    try{
      setLoading(true);

      console.log('searchTerm', searchTerm)
    const response = await fetch (`${url}${searchTerm}`);
    const data = await response.json();

    console.log('searchTerm in context', searchTerm)

   // console.log(Data);
 // setTours((prevTour)=>([...prevTour, ...Tours]));
 const { drinks } = data
 if (drinks) {
   const newCocktails = drinks.map((item) => {
     const {
       idDrink,
       strDrink,
       strDrinkThumb,
       strAlcoholic,
       strGlass,
     } = item

     return {
       id: idDrink,
       name: strDrink,
       image: strDrinkThumb,
       info: strAlcoholic,
       glass: strGlass,
     }
   })
   setCocktails(newCocktails)

  }
  setLoading(false);
   
    }
    catch (e){

      console.log(e);
      setLoading(false)
    }
  }
  

  useEffect(()=>{
  
      fetchApi()
  },[searchTerm])
  return <AppContext.Provider value={{

    loading,
    setSearchTerm,
    cocktails,
    searchTerm

  }}>{children}
  
  </AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
