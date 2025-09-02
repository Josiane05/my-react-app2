import PropTypes from 'prop-types'
function Client(props){
    return(
        <div className="client">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Client: {props.isClient ? "Yes" : "No"}</p>
        </div>
    );

}
Client.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isClient: PropTypes.bool,
}

export default Client;