import Axios from "axios"
import { Button, Form } from "semantic-ui-react"
import { useRouter } from "next/router";

export default function Login() {
    const router = useRouter();
    function login() {
        Axios.post("/api/login").then((res) => {
            if (res.status === 200) {
                //로그인 성공
                router.push("/betting")
            }
        })
    }
    return (
        <div style={{ padding: "100px 0", textAlign: "center" }}>
            <Form>
                <Form.Field inline>
                    <input placeholder="ID" />
                </Form.Field>
                <Form.Field inline>
                    <input type="password" placeholder="Password" />
                </Form.Field>
                <Button onClick={login}>Login</Button>
            </Form>
        </div>
    )

}