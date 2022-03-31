import styles from '../../styles/Betline.module.css';

export default function Betline() {
    return (
        <div className={styles.betlineWide}>
            <div className={styles.tournament}>Champions Korea</div>
            <duv className={styles.matchup}>
                <button className={styles.leftMatch} >
                    <div className={styles.leftTeam} >T1</div>
                    <div className={styles.leftMagn} >1.26</div>
                </button>
                <div className={styles.middle}>VS</div>
                <button className={styles.rightMatch}>
                    <div className={styles.rightMagn}>3.85</div>
                    <div className={styles.rightTeam}>Gen.G</div>
                </button>
            </duv>
            <div className={styles.betlineDate}>3월 30일 18:00</div>
        </div>
    )
}
