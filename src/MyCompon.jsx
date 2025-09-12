import React, {useState} from 'react';

function MyCompon(){

    const[name, setName] = useState("");

    function handleNameChange(event){
        setName(event.target.value);
    }
    
    return(<div>
              <input value={name} onChange={handleNameChange}/>
           </div>);
}
export default MyCompon