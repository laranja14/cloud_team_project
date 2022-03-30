import Link from "next/link"

export default function aaa() {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>aaa</h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <ol>
                    <li>
                        <Link href="http://localhost:3000/boards/aaa">aaa</Link>
                    </li>
                    <li>
                        <Link href="http://localhost:3000/boards/bbb">bbb</Link>
                    </li>
                </ol>
            </div>
        </div >
    )
}

