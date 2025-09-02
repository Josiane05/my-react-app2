import propTypes from 'prop-Types'
function Client(props){
    return(
        <div className="client">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Client: {props.isClient ? "Yes" : "No"}</p>
        </div>
    );

}
Client.protoTypes = {
    name: propTypes.string,
    age: propTypes.number,
    isClient: propTypes.bool,

}
export default Client;