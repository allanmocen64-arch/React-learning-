function UserGreeting(props){
   
        if(props.isLoggedin){
            return <h2 className="welcome-message">Welcome {props.username}</h2>
        }
        else{
             return <h2 className="login-message">Please log in to continue</h2>
        }
    
}
UserGreeting.defaultProps = {
    isLoggedin: false,
    username: "Guest",
}
UserGreeting.propTypes = {
    isLoggedin: PropTypes.bool,
    username: PropTypes.string,
}

export default UserGreeting
