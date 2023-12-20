import styles from "./DeleteButton.module.scss";


function DeleteButton({onClick}) {
    return <div className={styles.DeleteButton}>
        <button onClick={onClick}>
            X
        </button>
    </div>
}

export default DeleteButton;
