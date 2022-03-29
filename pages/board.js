import Link from "next/link"

export default function Board() {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Board_main</h1>
            <div>
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

