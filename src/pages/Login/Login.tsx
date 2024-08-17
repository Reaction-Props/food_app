import Headling from "../../components/Headling/Headling.tsx";
import {Button} from "../../components/Button/Button.tsx";
import {Link} from "react-router-dom";
import styles from "./Login.module.css";


export const Login = () => {
    return (
        <div className={styles['login']}>
        <Headling>Einlogen</Headling>
            <form className={styles['form']}>
                <div className={styles['field']}>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" placeholder="Email"/>
                </div>
                <div className={styles['field']}>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" placeholder="Password"/>
                </div>
            </form>
            <Button type="submit" appearance="big">Einloggen</Button>
            <div className={styles['register']}>
                <div>Hast du keine Konto?</div>
                <div><Link to="/auth/register">Jetzt Registrieren</Link></div>
            </div>
        </div>
    )
}
