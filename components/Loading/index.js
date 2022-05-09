import styles from './Loading.module.css';
function Loading() {
    return (
        <div className='fixed bg-white inset-0 flex-center z-[99]'>
            <div className={styles.div}>
                <span className={styles.span}></span>
                <span className={styles.span}></span>
                <span className={styles.span}></span>
                <span className={styles.span}></span>
            </div>
        </div>
    );
}

export default Loading;
