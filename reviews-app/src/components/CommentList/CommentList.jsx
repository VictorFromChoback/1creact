import "./CommentList.css";
import Comment from "../Comment/Comment";
import commentImage from "../../assets/images/comment.svg";
import arrowImage from "../../assets/images/arrow_down.svg";
import getComments from "../../utils/get-comments";
import LoadingCircle from "../LoadingCircle/LoadingCircle";
import DeleteButton from "./DeleteButton/DeleteButton";
import {useState} from "react";


function CommentList(props) {

    const [showComment, updateShowState] = useState(false);
    const [comments, updateComments] = useState(null);
    const [wasSwapped, updateWasSwapped] = useState(false);

    function swapHideShow() {
        if (!wasSwapped) {
            getComments(props.articleId).then(fetchedComments => updateComments(fetchedComments));
        }
        updateWasSwapped(() => true)
        updateShowState(showState => ~showState);
    }

    function deleteComment(index) {
        let newComments = [...comments]
        newComments.splice(index, 1)
        updateComments(() => newComments);
    }

    const commentsContent = comments ? <ul>
        {comments.map((item, index) =>
            <li>
                <DeleteButton onClick={() => deleteComment(index)}/>
                <img src={commentImage} alt="comment"/>
                <Comment comment={item.text} author={item.author}/>
            </li>)}
    </ul> : <LoadingCircle/>;

    return <div className="CommentList">
        <div style={{display: showComment ? null : "none"}}>
            {commentsContent}
        </div>
        <div className="CommentListButton">
            <button onClick={swapHideShow} style={{transform: showComment ? "rotate(180deg)" : null}}>
                <img src={arrowImage} alt="arrowImage"/>
            </button>
        </div>
    </div>
}

export default CommentList;