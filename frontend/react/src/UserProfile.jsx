const UserProfile =(props)=>{
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.age}</p>
            <img src={`https://randomuser.me/api/portraits/${props.gender}/75.jpg`}/>
        </div>

    )
}

export default UserProfile;