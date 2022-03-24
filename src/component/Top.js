import Axios from "axios"
import Link from 'next/link'
import { Header, Icon } from 'semantic-ui-react'

export default function Top() {
    return (
        <div style={{ display: 'flex' }}>
            <Link href={"http://localhost:3000"}>
                <Header as='h1' icon textAlign='center'>
                    <Icon name='ticket' color='' />
                    <Header.Content>PageName</Header.Content>
                </Header>
            </Link>
            <Link href={"http://localhost:3000/login"}>
                <div style={{ margin: 20, marginLeft: -60 }}>
                    login
                </div>
            </Link>
        </div >
    )
}