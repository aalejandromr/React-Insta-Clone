import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SearchBar = (props) => {
  return (
    <nav className="main-navbar">
      <div className="left-side">
          <FontAwesomeIcon icon={['fab', 'instagram']} size="3x"/>
          <span> | </span>
          <h1> 
            Instagram
          </h1>
      </div>
      <div className="center-side">
        <FontAwesomeIcon icon={['fas', 'search']} size="1x"/>
        <input type="text" placeholder="Search" onChange={props.handleSearch}/>
      </div>
      <div className="right-side">
          <FontAwesomeIcon icon={['far', 'compass']} size="2x"/>
          <FontAwesomeIcon icon={['far', 'heart']} size="2x"/>
          <FontAwesomeIcon icon={['far', 'user']} size="2x"/>
      </div>
    </nav>
  )
}

export default SearchBar;