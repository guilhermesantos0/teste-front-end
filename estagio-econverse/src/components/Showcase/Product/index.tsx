import style from './Product.module.scss';

import { ProductType } from '../../../types/Product';

interface Props {
    product: ProductType,
    onProductClick: (product: ProductType) => void;
}

const Product: React.FC<Props> = ({ product, onProductClick }) => {

    // ATENÇÃO: ASSUMINDO QUE OS PREÇOS ESTÃO COM 1 CASA DECIMAL
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(price / 10);
    };

    return (
        <>
            <div className={style.Container}>
                <div className={style.ImageContainer}>
                    <img className={style.Image} src={product.photo} alt={product.productName} loading="lazy" />
                </div>
                <div className={style.ProductInfoArea}>
                    <p className={style.Title}>{product.productName}</p>
                    <div className={style.PriceArea}>
                        <s className={style.OldPrice}>{formatPrice(product.price)}</s>
                        <p className={style.Price}>{formatPrice(product.price)}</p>
                    </div>
                    <p className={style.Installments}>ou 2x de {formatPrice(product.price / 2)} sem juros</p>
                    <p className={style.Freight}>Frete grátis</p>
                </div>
                <button className={style.Button} onClick={() => onProductClick(product)}>Comprar</button>
            </div>
        </>
    )
}

export default Product;