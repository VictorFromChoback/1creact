import styles from './AppBody.module.scss'


function AppBody({children}) {
    return <div className={styles.AppBody}>
        {children}
    </div>
}

export default AppBody;