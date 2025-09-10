
function List(){

    const fruits = ["Apple", "Orange", "Banana", "coconat", "pinapple"];
    const listItems = fruits.map(fruit => <li>{fruit}</li>);

    return(<ul>{listItems}</ul>);
}
export default List