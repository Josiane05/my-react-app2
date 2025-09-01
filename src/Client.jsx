
function Client(props){
    return(
        <div className="client">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Client: {props.isClient ? "Yes" : "No"}</p>
        </div>
    );

}
export default Client;