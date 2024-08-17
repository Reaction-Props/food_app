import styles from "./Layout.module.css";
import {Button} from "../../components/Button/Button.tsx";
import {useEffect} from "react";
import {NavLink, Outlet} from "react-router-dom";
import {useLocation} from "react-router-dom";


export const Layout = () => {

    const location = useLocation();

    useEffect(() => {
        console.log(location)
    }, [location]);
    return (
        <div className={styles['layout']}>
            <div className={styles['sidebar']}>
                <div className={styles['user']}>
                    <img src="/avatar.png" alt="user"/>
                    <div className={styles['name']}>Daniel Linker</div>
                    <div className={styles['email']}>dima.linki@web.com</div>
                </div>
                <div className={styles['menu']}>
                    <NavLink to="/" className={styles['link']}>
                        <img src="/menu-icon.svg" alt="menu"/>
                        Menü</NavLink>
                    <NavLink to="/cart" className={styles['link']}>
                        <img src="/cart-icon.svg" alt="cart"/>
                        Cart</NavLink>
                </div>
                <Button className={styles['power']}>
                    <img src="/power.svg" alt="power"/> Logout
                </Button>
            </div>
            <div className={styles['content']}>
                <Outlet/>
            </div>
        </div>
    )
}
