
function List(){

    const fruits = [{id: 1, name:"Apple", calories: 95},
                    {id: 2, name:"Orange", calories: 45},
                    {id: 3, name:"Banana", calories: 105}, 
                    {id: 4, name:"coconat", calories: 159}, 
                    {id: 5, name:"pinapple", calories: 37}];

    //fruits.sort((a, b) => a.name.localeCompare(b.name)); //ALPHABETICAL
    //fruits.sort((a, b) => b.name.localeCompare(a.name)); //REVERSE ALPHABETICAL
    //fruits.sort((a, b) => a.calories - b.calories); // NUMERIC
    // fruits.sort((a, b) => b.calories - a.calories); // REVERSE NUMERIC

    //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100); //LOWCALFRUITS
    //const highCalFruits = fruits.filter(fruit => fruit.calories >= 100); //HIGHCALFRUITS
    
    const listItems = fruits.map(fruits => <li key={fruits.id}>
                                                       {fruits.name}: &nbsp;
                                                       <b>{fruits.calories}</b></li>);

    return(<ol>{listItems}</ol>);
}
export default List