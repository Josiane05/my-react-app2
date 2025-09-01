import profilePic from './assets/profile.jpg'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card.title">Josiane</h2>
            <p>Aspiring Web developer passionate about creating modern, user-friendly websites. Specializing in React and front-end development</p>
        </div>
    );
}

export default Card