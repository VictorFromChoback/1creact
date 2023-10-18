import "./Comment.css"


function Comment(props) {
    return <div className="Comment">
        <text>{props.author}</text>: {props.comment}
    </div>
}

export default Comment;