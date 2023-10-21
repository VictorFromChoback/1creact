import styles from "./ReviewText.module.scss";


function ReviewText(props) {
    return <div className={styles.ReviewText}>
        <text>Review</text>: {props.text}
    </div>
}

export default ReviewText;