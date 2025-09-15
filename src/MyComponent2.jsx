import React, {useState} from 'react';

function MyComponent2(){

    const[car, setCar] = useState({year: 2024, 
                                   make:"Ford", 
                                   model:"Mustang"})

    return<div>
              <p>Your Favorite Car is: {car.year} {car.make} {car.model}</p>
              <input type="number" value={car.year}/><br/>
              <input type="text" value={car.make}/><br/>
              <input type="text" value={car.model}/><br/>
          </div>;
}
export default MyComponent2