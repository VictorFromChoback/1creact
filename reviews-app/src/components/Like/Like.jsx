import "./Like.css";
import likeImage from "../../assets/images/like.svg"
import { useState } from "react";


function Like(props) {
    const [currentLikes, updateLikes] = useState(props.likes);
    const [isLiked, getLike] = useState(false)

    function incrementLikes() {
        getLike(liked => !liked);
        updateLikes(likes => isLiked ? likes - 1 : likes + 1);
    }
    
    return <div className="Like">
        <button onClick={incrementLikes} style={{backgroundColor: isLiked ? "#D27171" : null}}>
            {currentLikes}
            <img src={likeImage} alt="like"/>
        </button>
    </div>
}

export default Like;