import {UserFavoriteFoods} from './UserFavoriteFoods';
import { UserUsername } from './USerUsername';
import PropTypes from 'prop-types'

function UserProfile(props){
    console.log(props)
    return (
        <div>
            <UserUsername username={props.username}></UserUsername>
            <div>
                <span>Email: </span> 
                <span>bob@gmail.com</span>
                <br />
                <b>Age: </b><span>{props.age}</span>
            </div>
        
           
            <UserFavoriteFoods></UserFavoriteFoods>
            <br />
        {props.favoriteFoods.map((food, index) => (
            <div key={index}>
                <b>Favorite Food {index + 1}: </b><span>{food.name}</span>
            </div>
        ))}
        </div>
    )
}

UserProfile.protoTypes = {
    username: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    favoriteFoods: PropTypes.array.isRequired
}

export default UserProfile;
