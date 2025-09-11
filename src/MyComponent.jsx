import React, {useState} from 'react';

function MyComponent(){

    let [name, setName] = useState();

    const updateName = () => {
        name = "spongebob";
        console.log(name);
    }

    return(<div>
               <p>Name: {name}</p>
               <button onClick={updateName}>set Name</button>
           </div>)
}
export default MyComponent