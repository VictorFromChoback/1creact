import "./DeleteButton.css";


function DeleteButton({onClick}) {
    return <div className="DeleteButton">
        <button onClick={onClick}>
            X
        </button>
    </div>
}

export default DeleteButton;
