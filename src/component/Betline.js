import styles from '../../styles/Betline.module.css';

// export default function Betline() {
//     return (
//         <div className={styles.betlineWide}>
//             <div className={styles.tournament}>Champions Korea</div>
//             <duv className={styles.matchup}>
//                 <button className={styles.leftMatch} >
//                     <div className={styles.leftTeam} >T1</div>
//                     <div className={styles.leftOdds} >1.26</div>
//                 </button>
//                 <div className={styles.middle}>VS</div>
//                 <button className={styles.rightMatch}>
//                     <div className={styles.rightOdds}>3.85</div>
//                     <div className={styles.rightTeam}>Gen.G</div>
//                 </button>
//             </duv>
//             <div className={styles.betlineDate}>3월 30일 18:00</div>
//         </div>
//     )
// }

export default function Betline({ list }) {
    console.log(list)
    return (
        <div>
            {list.betline && list.betline.items.map((item) => (
                <div className={styles.betlineWide}>
                    <div className={styles.tournament}>{item.tournament}</div>
                    <div className={styles.matchup}>
                        <button className={styles.leftMatch} >
                            <div className={styles.leftTeam} >{item.leftTeam}</div>
                            <div className={styles.leftOdds} >{item.leftOdds}</div>
                        </button>
                        <div className={styles.middle}>VS</div>
                        <button className={styles.rightMatch}>
                            <div className={styles.rightOdds}>{item.rightOdds}</div>
                            <div className={styles.rightTeam}>{item.rightTeam}</div>
                        </button>
                    </div>
                    <div className={styles.betlineDate}>{item.betlineDate}</div>
                </div>
            ))}
        </div>

    )
}