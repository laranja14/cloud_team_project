import Axios from 'axios';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import React from "react";
import {
    Checkbox,
    Menu,
    Sidebar,
    Button
} from "semantic-ui-react"
import Betline from '../src/component/Betline';
import BettingBar from '../src/component/Bettingbar';
import { $CombinedState } from 'redux';

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

    const [list, setList] = useState([]);

    function getData() {
        Axios.get('/api/betline').then((res) => {
            console.log(res.data);
            setList(res.data)
        })
    }

    useEffect(() => {
        getData();
    }, []);


    return (
        <>

            <div style={{ textAlign: "right", margin: "20px" }}>
                {isLogin && <Button onClick={logout}>Logout</Button>}
            </div>
            <div style={{ display: "flex", border: "solid" }}>
                <div style={{ border: "solid", flex: 3 }}>
                    <div style={{ textAlign: "center", margin: "30px" }}>
                        <h2>오늘</h2>
                    </div>
                    <Betline list={list} />
                    <div style={{ textAlign: "center", margin: "30px" }}>
                        <h2>내일</h2>
                    </div>
                    <Betline list={list} />
                    <div style={{ textAlign: "center", margin: "30px" }}>
                        <h2>다음 주</h2>
                    </div>
                    <Betline list={list} />
                </div>
                <div style={{ border: "solid", color: "blue", flex: 1, backgroundColor: "#242737" }}>
                    <BettingBar />
                </div>

            </div>
        </>
    )
}