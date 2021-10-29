import React from 'react'
import Loading from '../components/Loading'
import {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {

  const {id} = useParams();
const [loading, setLoading] = useState(false)
const [cocktails, setCocktails] = useState([])

  const fetchDrinkById = async () =>{

    try {

      const response = await fetch(`${url}${id}`);
      const data = await response.json();


const {idDrink, strDrink, strAlcoholic, strCategory, strDrinkThumb} = data.drinks[0]


setCocktails({id: idDrink, name: strDrink, alcoholic: strAlcoholic, cat: strCategory, img: strDrinkThumb})

console.log('data in singleCocktails',cocktails.name )
    }catch(e){
      console.log(e)
    }

  }
  useEffect(()=>{
    
fetchDrinkById();
  }, [])
  return (
    <section className='section cocktail-section'>
    <Link to='/' className='btn btn-primary'>
      back home
    </Link>
    <h2 className='section-title'>{cocktails.name}</h2>
    <div className='drink'>
      <img src={cocktails.img} alt={cocktails.name}></img>
      <div className='drink-info'>
        <p>
          <span className='drink-data'>name :</span> {cocktails.name}
        </p>
        <p>
          <span className='drink-data'>category :</span> {cocktails.cat}
        </p>
        
        
      </div>
    </div>
  </section>
  )
}

export default SingleCocktail
