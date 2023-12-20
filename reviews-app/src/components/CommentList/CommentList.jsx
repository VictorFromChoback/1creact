import styles from "./CommentList.module.scss";
import Comment from "../Comment/Comment";
import commentImage from "../../assets/images/comment.svg";
import arrowImage from "../../assets/images/arrow_down.svg";
import getComments from "../../utils/get-comments";
import LoadingCircle from "../LoadingCircle/LoadingCircle";
import DeleteButton from "./DeleteButton/DeleteButton";
import {useState} from "react";
import cnBind from "classnames/bind";


const cx = cnBind.bind(styles);


function CommentList(props) {
    const [showComment, updateShowState] = useState(false);
    const [comments, updateComments] = useState(null);
    const [wasSwapped, updateWasSwapped] = useState(false);

    const commentsContentClass = cx("CommentsListContent", { show : showComment });
    const buttonShowMoreClass = cx("CommentListButton.button", { rotate : showComment });

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

    return <div className={styles.CommentList}>
        <div className={commentsContentClass}>
            {commentsContent}
        </div>
        <div className={styles.CommentListButton}>
            <button onClick={swapHideShow} className={buttonShowMoreClass}>
                <img src={arrowImage} alt="arrowImage"/>
            </button>
        </div>
    </div>
}

export default CommentList;