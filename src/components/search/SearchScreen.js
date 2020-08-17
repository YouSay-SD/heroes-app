import React from 'react'
import { heroes } from '../../data/heroes'
import { HeroCard } from '../heroes/HeroCard';

export const SearchScreen = () => {

  const heroesFiltered = heroes;

  const handleSearch = () => {
    
  }

  return (
    <div>
      
      <h1>Search Screen</h1>
      <hr />

      <div className="row">

        <div className="col-5">

          <h4>Search Form</h4>
          <hr />

          <form>

            <input 
              type="text"
              placeholder="Find your hero"
              className="form-control"
            />

            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
            >
              Search...
            </button>

          </form>

        </div>

        <div className="col-7">

          <h4>Results</h4>
          <hr />

          {

            heroesFiltered.map( hero => (
              <HeroCard
                key={ hero.id }
                { ...hero }
              />
            ))

          }

        </div>

      </div>

    </div>
  )
}
