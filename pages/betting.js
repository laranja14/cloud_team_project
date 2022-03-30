import Axios from 'axios';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button } from "semantic-ui-react"
import Betline from '../src/component/Betline';

export default function Batting() {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState(false)
    function checkLogin() {
        Axios.get('/api/isLogin').then((res) => {
            if (res.status === 200 && res.data.name) {
                //로그인
                setIsLogin(true)
            } else {
                //로그인 실패
                router.push("/login")
            }
        })
    }


    function logout() {
        Axios.get('/api/logout').then(res => {
            if (res.status === 200) {
                router.push("/")
            }
        })
    }

    useEffect(() => {
        checkLogin();
    }, [])
    return (
        <>
            <div style={{ textAlign: "right", margin: "20px" }}>
                {isLogin && <Button onClick={logout}>Logout</Button>}
            </div>

            <div>
                <div style={{ textAlign: "center", margin: "30px" }}>
                    <h2>오늘</h2>
                </div>
                <Betline></Betline>
                <Betline></Betline>
                <div style={{ textAlign: "center", margin: "30px" }}>
                    <h2>내일</h2>
                </div>
                <Betline></Betline>
                <Betline></Betline>
                <div style={{ textAlign: "center", margin: "30px" }}>
                    <h2>다음 주</h2>
                </div>
                <Betline></Betline>
                <Betline></Betline>
                <Betline></Betline>
                <Betline></Betline>
            </div>
        </>
    )
}