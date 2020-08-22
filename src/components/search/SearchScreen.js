import React from 'react'
import queryString from 'query-string';
import { heroes } from '../../data/heroes'
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';

export const SearchScreen = ({ history }) => {

  const location = useLocation();
  console.log(location);

  const heroesFiltered = heroes;

  const [ formValues, handleInputChange ] = useForm({
    searchText: ''
  });

  const { searchText } = formValues;

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${ searchText }`);
  }

  return (
    <div>
      
      <h1>Search Screen</h1>
      <hr />

      <div className="row">

        <div className="col-5">

          <h4>Search Form</h4>
          <hr />

          <form onSubmit={ handleSearch }>

            <input 
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="searchText"
              value={ searchText }
              onChange={ handleInputChange }
              autoComplete="off"
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
