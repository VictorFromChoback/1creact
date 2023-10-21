import styles from "./ReviewTitle.module.scss";


function ReviewTitle(props) {
    return <div className={styles.ReviewTitle}>
        {props.title}
    </div>
}

export default ReviewTitle;