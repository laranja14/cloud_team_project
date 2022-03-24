import Link from "next/link"
import { Button, Segment } from 'semantic-ui-react'

export default function Gnb() {
    return (
        <div>
            <Segment inverted textAlign='center'>
                <Link href={"http://localhost:3000/batting"}>
                    <Button inverted>경기 배팅</Button>
                </Link>
                <Link href={"http://localhost:3000/information"}>
                    <Button inverted>팀 소개</Button>
                </Link>
                <Link href={"http://localhost:3000/board"}>
                    <Button inverted>게시판</Button>
                </Link>
            </Segment>
        </div>
    )
}