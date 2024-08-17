import Search from "../../components/Search/Search.tsx";
import Headling from "../../components/Headling/Headling.tsx";
import styles from "./Menu.module.css";
import {PREFIX} from "../../helpers/API.ts";
import {Product} from "../../components/interfaces/product.interfaces.ts";
import {useEffect, useState} from "react";
import axios, {AxiosError} from "axios";
import {MenuList} from "./MenuList/MenuList.tsx";



export const Menu = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | undefined>("");

    const getMenu = async () => {
        try {
            setIsLoading(true)
            const {data} = await axios.get<Product[]>(`${PREFIX}/products`);
            setProducts(data)
            setIsLoading(false)
        }catch (e) {
            console.error(e)
            if (e instanceof AxiosError) {
                setError(e.message)
            }
            setError(error)
            setIsLoading(false)
            return;
        }
    }

    useEffect(() => {
        getMenu();
    }, []);

    return (
        <div>
            <div className={styles['head']}>
                <Headling>Menu</Headling>
                    <Search placeholder="Gib dein essen..." />
            </div>
            <div>
                {error && <>Error: {error}</>}
                {!isLoading && <MenuList products={products}/>}
                {isLoading && <div className={styles['line-spinner']}>...ladet...</div>}
            </div>
        </div>
    );
}


export default Menu;

