import Link from "next/link"
import { Icon, Button, Segment } from 'semantic-ui-react'

export default function Gnb() {
    return (
        <div style={{ paddingLeft: 50, paddingRight: 50 }}>
            <Segment inverted textAlign='center' >
                <Button.Group >
                    <Link href={"http://localhost:3000/batting"}>
                        <Button inverted>경기 배팅</Button>
                    </Link>
                    <Link href={"http://localhost:3000/information"}>
                        <Button inverted>팀 소개</Button>
                    </Link>
                    <Link href={"http://localhost:3000/board"}>
                        <Button inverted>게시판</Button>
                    </Link></Button.Group>

                <Link href={"http://localhost:3000/login"}>
                    <Button inverted circular floated='right' style={{ marginLeft: -70 }} >
                        로그인
                    </Button>
                </Link>
            </Segment>
        </div>
    )
}