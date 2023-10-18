import "./Review.css"
import ReviewTitle from "../ReviewTitle/ReviewTitle";
import Like from "../Like/Like";
import CommentList from "../CommentList/CommentList";
import ReviewText from "../ReviewText/ReviewText";


function Review(props) {
    return <div className="Review">
        <ReviewTitle title={props.reviewData.title}/>
        <ReviewText text={props.reviewData.text}/>
        <CommentList articleId={props.reviewData.articleId}/>
        <Like likes={props.reviewData.currentLikes}/>
    </div>
}

export default Review;