import "./Review.css"
import ReviewTitle from "../ReviewTitle/ReviewTitle";
import Like from "../Like/Like";


function Review(props) {
    return <div className="Review">
        <ReviewTitle title={props.reviewData.title}/>
        <text>Review</text>: {props.reviewData.text}
        <Like likes={props.reviewData.currentLikes}/>
    </div>
}

export default Review;