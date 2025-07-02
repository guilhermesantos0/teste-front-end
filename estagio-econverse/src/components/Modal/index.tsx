import style from './Modal.module.scss';

import { ProductType } from '../../types/Product';
import { useEffect, useState } from 'react';

interface Props {
    product: ProductType;
    onClose: () => void;
}

const Modal: React.FC<Props> = ({ product, onClose }) => {

    const [quantity, setQuantity] = useState(1);

    const formatNumber = (val: number) => val.toString().padStart(2, '0');

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(price / 10);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/\D/g, '');
        const num = parseInt(raw || '1', 10);
        setQuantity(num < 1 ? 1 : num);
    };

    const handleBlur = () => {
        if (quantity < 1) setQuantity(1);
    };

    const handleIncrease = () => setQuantity(prev => prev + 1);
    const handleDecrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={style.ModalOverlay} onClick={handleOverlayClick}>
            <div className={style.Modal}>
                <button className={style.CloseButton} onClick={onClose}>✖</button>
                <img className={style.Photo} src={product.photo} alt={product.productName} loading="lazy" />
                <div className={style.Infos}>
                    <p className={style.Title}>{product.productName}</p>
                    <p className={style.Price}>{formatPrice(product.price)}</p>
                    <p className={style.Description}>{product.descriptionShort}</p>
                    <p className={style.SeeMore}>Veja mais detalhes do produto &rsaquo;</p>

                    <div className={style.Actions}>
                        <div className={style.InputArea}>
                            <button className={style.Minus} onClick={handleDecrease}>−</button>
                            <input
                                type="text"
                                value={formatNumber(quantity)}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                inputMode="numeric"
                                className={style.Input}
                            />
                            <button className={style.Plus} onClick={handleIncrease}>+</button>
                        </div>
                        <button className={style.Button}>Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal