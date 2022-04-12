import styles from '../../styles/Betline.module.css';

export default function Betline({ list }) {
    return (
        <div>
            {list.map((item) => (
                <div className={styles.betlineWide}>
                    <div className={styles.tournament}>{item.tournament}</div>
                    <duv className={styles.matchup}>
                        <button className={styles.leftMatch} >
                            <div className={styles.leftTeam} >{item.leftTeam}</div>
                            <div className={styles.leftOdds} >{item.leftOdds}</div>
                        </button>
                        <div className={styles.middle}>VS</div>
                        <button className={styles.rightMatch}>
                            <div className={styles.rightOdds}>{item.rightOdds}</div>
                            <div className={styles.rightTeam}>{item.rightTeam}</div>
                        </button>
                    </duv>
                    <div className={styles.betlineDate}>{item.betlineDate}</div>
                </div>
            ))}
        </div>
    )
}