import style from './Showcase.module.scss';

import { ProductType } from '../../types/Product';

import Product from './Product';

import chevron_left from '@assets/images/main/chevron_left.svg';
import chevron_right from '@assets/images/main/chevron_right.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

interface Props {
    products: ProductType[],
    showCategories?: boolean,
    className?: string
}

const Showcase: React.FC<Props> = ({ products, showCategories, className }) => {
    const subCategories = [
        'Celular',
        'Acessórios',
        'Tablets',
        'Notebooks',
        'Tvs',
        'Ver todos'
    ]

    return(
        <div className={`${style.Container} ${className}`}>
            <div className={style.Top}>
                <span className={style.Line}></span>
                <p className={style.Title}>Produtos Relacionados</p>
                <span className={style.Line}></span>
            </div>
            {
                showCategories ? (
                    <nav className={style.NavMenu}>
                        {
                            subCategories.map((subCategory) => (
                                <a href="#" className={style.SubCategory}>{subCategory}</a>
                            ))
                        }
                    </nav>
                ) : (
                    <p className={style.Subtitle}>Ver todos</p>
                )
            }

            <div className={style.ProductsArea}>
                <div className={style.Swipe}>
                    <img src={chevron_left} alt="<" />
                </div>
                <div style={{ width: '1270px', height: '500px' }}>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={18}
                        slidesPerView={4}
                        navigation={{
                            nextEl: `${style.SwipeRight}`,
                            prevEl: `${style.SwipeLeft}`
                        }}
                        className="mySwiper"
                    >
                        {products.map((product, index) => (
                            <SwiperSlide
                                key={index}
                                style={{ width: '304px', height: '500px' }} // ajuste conforme o tamanho do seu card
                            >
                                <Product product={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className={style.Swipe}>
                    <img src={chevron_right} alt=">" />
                </div>
            </div>
        </div>
    )
}

export default Showcase