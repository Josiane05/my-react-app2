import React, {useState} from 'react';

function MyComponent(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);

    const updateName = () => {
        setName("spongebob");
     
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    return(<div>
               <p>Name: {name}</p>
               <button onClick={updateName}>set Name</button>

                <p>Age: {age}</p>
               <button onClick={incrementAge}>incrementAge</button>
           </div>)
}
export default MyComponent