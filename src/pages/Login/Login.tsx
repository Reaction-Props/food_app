import Headling from "../../components/Headling/Headling.tsx";
import {Button} from "../../components/Button/Button.tsx";
import {Link} from "react-router-dom";
import styles from "./Login.module.css";
import {FormEvent, useState} from "react";
import axios, {AxiosError} from "axios";
import {PREFIX} from "../../helpers/API.ts";


export type LoginForm = {
    email: {
        value: string
    };
    password: {
        value: string
    };
}

export const Login = () => {

    const [error, setError] = useState<string | null>()

    const submit = async (e: FormEvent) => {
        e.preventDefault()
        setError(null)
        const target = e.target as typeof e.target & LoginForm
        const {email, password} = target
        console.log(email.value, password.value)
        await sendLogin(email.value, password.value)
    }

    const sendLogin = async (email: string, password: string) => {
        try {
            const {data} = await axios.post(`${PREFIX}/auth/login`, {email, password})
            console.log(data)
        }
        catch (e) {
            if (e instanceof AxiosError) {
                setError(e.response?.data.message)
            }
        }
    }
    return (
        <div className={styles['login']}>
        <Headling>Einlogen</Headling>
            {error && <div className={styles['error']}>{error}</div>}
            <form className={styles['form']} onSubmit={submit}>
                <div className={styles['field']}>
                    <label htmlFor="email">Email: </label>
                    <input id="email" name="email" placeholder="Email"/>
                </div>
                <div className={styles['field']}>
                    <label htmlFor="password">Password: </label>
                    <input id="password" name="password" placeholder="Password"/>
                </div>
                <Button type="submit" appearance="big">Einloggen</Button>
            </form>
            <div className={styles['register']}>
                <div>Hast du keine Konto?</div>
                <div><Link to="/auth/register">Jetzt Registrieren</Link></div>
            </div>
        </div>
    )
}
