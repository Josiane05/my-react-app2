
function Client(props){
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Client: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );

}
export default Client;