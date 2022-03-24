import Axios from 'axios';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button } from "semantic-ui-react"

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
            배팅 페이지
            {isLogin && <Button onClick={logout}>Logout</Button>}
        </>
    )
}