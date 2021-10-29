import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {

  const {setSearchTerm, searchTerm} = useGlobalContext();

  const onChangeHandler = (event) =>{
   // console.log(event.target.value);

   setSearchTerm(event.target.value)
 //console.log('searchTerm in form', searchTerm)
  }

  const onSubmitHandler = (event) =>{

    event.preventDefault();

  }
//console.log('in SearchForm')
  return (
    <section className='section search'>
    <form className='search-form' onSubmit = {onSubmitHandler} >
      <div className='form-control'>
        <label htmlFor='name'>search your favorite cocktail</label>
        <input
          type='text'
          name='name'
          id='name'
         onChange = {onChangeHandler}
         value = {searchTerm}
        />
      </div>
    </form>
  </section>
  )
}

export default SearchForm
