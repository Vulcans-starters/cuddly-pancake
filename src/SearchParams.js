import React, {useState} from 'react';

const SearchParams = () => {
  const [location, updateLocation] = useState("NewYork, NY")
  return (
    <div>
      <h1>{location}</h1>
    <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Enter The Location"
            onChange={e => updateLocation(e.target.value)}
          />
        </label>
        
        <button>Submit</button>
    </form>
        </div>
      )
}


export default SearchParams