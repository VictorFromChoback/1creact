import "./ReviewText.css";


function ReviewText(props) {
    return <div className="ReviewText">
        <text>Review</text>: {props.text}
    </div>
}

export default ReviewText;