import React, { useState} from 'react'

function MyComponent3(){

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood(){

    }

    function handleRemoveFood(){

    }

    return (<div>
                <h1>List Of Food</h1>
                <ul>
                    {foods.map((food, index) => <li key = {index}>{food}</li>)}
                </ul>
                <input type="text" id="foodinput" placeholder="Enter Food Name"/>
            </div>);
}
export default MyComponent3;