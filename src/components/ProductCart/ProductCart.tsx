import styles from './ProductCart.module.css'
import {ProductCartProps} from "./ProductCart.props";
import {Link} from "react-router-dom";
export const ProductCart = ({id, name, image, description, price, rating}: ProductCartProps) => {
    return (
        <Link to={`/product/${id}`}className={styles['link']}>
            <div className={styles['cart']}>

                <div className={styles['head']} style={{backgroundImage: `url(${image})`}}>
                    <div className={styles['price']}>
                        {price}&nbsp;
                        <span className={styles['currency']}>Euro</span>
                    </div>
                    <button className={styles['add-to-cart']}>
                        <img src="/add-to-cart.svg" alt="cart"/>
                    </button>
                    <div className={styles['rating']}>
                        {rating}
                        <img src={'/star.svg'} alt="rating"/>
                    </div>
                </div>
                <div className={styles['footer']}>
                    <div className={styles['title']}>{name}</div>
                    <div className={styles['description']}>{description}</div>
                </div>
            </div>
        </Link>

    )
}
