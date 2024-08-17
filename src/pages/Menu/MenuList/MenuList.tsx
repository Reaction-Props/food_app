import {ProductCart} from "../../../components/ProductCart/ProductCart.tsx";
import {MenuListProps} from "./MenuList.props.ts";
import styles from "./MenuList.module.css";


export const MenuList = ({products}: MenuListProps) => {
    return (
        <div className={styles.wrapper}>
            { products.map((p) => (
                <ProductCart
                    key={p.id}
                    id={p.id}
                    name={p.name}
                    description={p.ingredients.join(", ")}
                    rating={p.rating}
                    price={p.price}
                    image={p.image}
                />
            ))}
        </div>
    )
}
