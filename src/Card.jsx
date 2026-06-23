import profilePic from './assets/Panda .jpeg'

function Card(){

    return(
        <div className = "card">
            <img className="profile-pic" src={profilePic} alt="Profile Picture"></img>
            <h2>Trench </h2>
            <p>I learn programming and play games all day</p>
        </div>
    );
}
export default Card