import styles from "./Comment.module.scss"


function Comment(props) {
    return <div className={styles.Comment}>
        <text>{props.author}</text>: {props.comment}
    </div>
}

export default Comment;