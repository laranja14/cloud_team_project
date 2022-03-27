import Axios from "axios"
import Link from 'next/link'
import { Header, Icon, Button } from 'semantic-ui-react'

export default function Top() {
    return (
        <div style={{ display: 'flex' }}>
            <Link href={"http://localhost:3000"}>
                <Header as='h1' icon textAlign='center'>
                    <Icon name='ticket' color='' />
                    <Header.Content>PageName</Header.Content>
                </Header>
            </Link>
            <div>
                <Link href={"http://localhost:3000/login"}>
                    <div style={{ margin: 20, marginLeft: -60 }}>
                        login
                    </div>
                </Link>
            </div>
        </div >
    )
}

// function Guest() {
//     return (
//         <Link href={"http://localhost:3000/login"}>
//             <div style={{ margin: 20, marginLeft: -60 }}>
//                 login
//             </div>
//         </Link>
//     )
// }

// function User() {
//     return (
//         <Link href={"../../pages/api/logout"}>
//             <div style={{ margin: 20, marginLeft: -60 }}>
//                 login
//             </div>
//         </Link>
//     )
// }