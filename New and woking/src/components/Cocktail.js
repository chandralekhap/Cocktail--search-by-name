import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = (props) => {

 // console.log('cocktails', props.items.id)
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={props.items.image} alt={props.items.name} />
      </div>
      <div className='cocktail-footer'>
        <h3>{props.items.name}</h3>
        <h4>{props.items.glass}</h4>
        <p>{props.items.info}</p>
        <Link to={`/cocktail/${props.items.id}`} className='btn btn-primary btn-details'>
          details
        </Link>
      </div>
    </article>
  )
}

export default Cocktail
