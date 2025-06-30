import style from './Product.module.scss';

import { ProductType } from '../../../types/Product';

interface Props {
    product: ProductType
}

const Product: React.FC<Props> = ({ product }) => {

    // ATENÇÃO: ASSUMINDO QUE OS PREÇOS ESTÃO EM REAIS
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(price);
    };

    return (
        <div className={style.Container}>
            <div className={style.ImageContainer}>
                <img src={product.photo} alt={product.productName} />
            </div>
            <p className={style.ProductName}>{product.productName}</p>
            <s className={style.OldPrice}>{formatPrice(product.price)}</s>
            <p className={style.Price}>{formatPrice(product.price)}</p>
            <p>ou 2x de {formatPrice(product.price / 2)} sem juros</p>
            <p>Frete grátis</p>
            <button className={style.Button}>Comprar</button>
        </div>
    )
}

export default Product;