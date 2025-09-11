import React, {useState} from 'react';

function MyComponent(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployeed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("spongebob");
     
    }

    const incrementAge = () => {
        setAge(age + 2);
    }

    const toggleEmployeedStatus = () => {
        setIsEmployeed(!isEmployeed);
    }

    return(<div>
               <p>Name: {name}</p>
               <button onClick={updateName}>set Name</button>

                <p>Age: {age}</p>
               <button onClick={incrementAge}>incrementAge</button>

               <p>Is employeed: {isEmployeed ? "Yes" : "No"}</p>
               <button onClick={toggleEmployeedStatus}>Taggle status</button>

           </div>)
}
export default MyComponent