import style from './Showcase.module.scss';

import { ProductType } from '../../types/Product';

import Product from './Product';

import chevron_left from '@assets/images/main/chevron_left.svg';
import chevron_right from '@assets/images/main/chevron_right.svg';

interface Props {
    products: ProductType[],
    showCategories?: boolean
}

const Showcase: React.FC<Props> = ({ products, showCategories }) => {
    const subCategories = [
        'Celular',
        'Acessórios',
        'Tablets',
        'Notebooks',
        'Tvs',
        'Ver todos'
    ]

    return(
        <div className={style.Container}>
            <p className={style.Title}>Produtos Relacionados</p>
            {
                showCategories ? (
                    <nav className={style.NavMenu}>
                        {
                            subCategories.map((subCategory) => (
                                <a href="#">{subCategory}</a>
                            ))
                        }
                    </nav>
                ) : (
                    <p className={style.SubTitle}>Ver todos</p>
                )
            }

            <div className={style.ProductsArea}>
                <div className={style.Swipe}>
                    <img src={chevron_left} alt="<" />
                </div>
                {
                    products.map((product, index) => (
                        <Product product={product} key={index} />
                    ))
                }
                <div className={style.Swipe}>
                    <img src={chevron_right} alt=">" />
                </div>
            </div>
        </div>
    )
}

export default Showcase