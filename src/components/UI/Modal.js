import styles from './Modal.module.css'
import ReactDOM from 'react-dom'
const ModalOverly = (props) => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>
                <p className={styles.text}>{props.children}</p>
            </div>
        </div>
    )
}
const Modal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(
                <ModalOverly
                 children={props.children}/>,
                 document.getElementById('modal'),
            )}
        </>
    )
}
export default Modal