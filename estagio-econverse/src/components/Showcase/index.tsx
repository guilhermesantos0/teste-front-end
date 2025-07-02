import style from './Showcase.module.scss';

import { ProductType } from '../../types/Product';

import Product from './Product';
import Modal from '../Modal';

import chevron_left from '@assets/images/main/chevron_left.svg';
import chevron_right from '@assets/images/main/chevron_right.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';

interface Props {
    products: ProductType[],
    showCategories?: boolean,
    className?: string
}

const Showcase: React.FC<Props> = ({ products, showCategories, className }) => {
    const [modalProduct, setModalProduct] = useState<ProductType | null>(null);

    const subCategories = [
        {
            name: 'Celular',
            selected: true
        },
        {
            name: 'Acessórios'
        },
        {
            name: 'Tablets'
        },
        {
            name: 'Notebooks'
        },
        {
            name: 'Tvs'
        },
        {
            name: 'Ver todos'
        }
    ]

    useEffect(() => {
        if (modalProduct) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [modalProduct]);

    return(
        <>
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
                                    <a href="#" className={`${style.SubCategory} ${subCategory.selected ? style.Selected : ''}`}>{subCategory.name}</a>
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
                                    <Product product={product} onProductClick={setModalProduct} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className={style.Swipe}>
                        <img src={chevron_right} alt=">" />
                    </div>
                </div>
            </div>

             {modalProduct && (
                <Modal product={modalProduct} onClose={() => setModalProduct(null)} />
            )}
        </>
    )
}

export default Showcase