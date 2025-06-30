import { useEffect, useState } from 'react';
import style from './App.module.scss';

// COMPONENTES
import Category from './components/Category';
import Showcase from './components/Showcase';

// IMAGES / HEADER
import shield from '@assets/images/header/shield.svg';
import truck from '@assets/images/header/truck.svg'
import card from '@assets/images/header/card.svg';
import glass from '@assets/images/header/glass.svg';

import box from '@assets/images/header/box.svg';
import heart from '@assets/images/header/heart.svg';
import user from '@assets/images/header/user.svg';
import cart from '@assets/images/header/cart.svg';

import crown from '@assets/images/header/crown.svg';

// IMAGES / CATEGORIES
import tech from '@assets/images/main/categories/tech.svg';
import supermarket from '@assets/images/main/categories/supermarket.svg';
import beverages from '@assets/images/main/categories/beverages.svg';
import tools from '@assets/images/main/categories/tools.svg';
import health from '@assets/images/main/categories/health.svg';
import sports from '@assets/images/main/categories/sports.svg';
import fashion from '@assets/images/main/categories/fashion.svg';

// TYPES
import { ProductType } from './types/Product';

function App() {

    const [products, setProducts] = useState<ProductType[]>();

    const categories = [
        {
            name: 'Tecnologia',
            icon: tech
        },
        {
            name: 'Supermercado',
            icon: supermarket
        },
        {
            name: 'Bebidas',
            icon: beverages
        },
        {
            name: 'Ferramentas',
            icon: tools
        },
        {
            name: 'Saúde',
            icon: health
        },
        {
            name: 'Esportes e Fitness',
            icon: sports
        },
        {
            name: 'Moda',
            icon: fashion
        },
    ]

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json')
            const productsList = await response.json();

            if(productsList.success) setProducts(productsList.products)
        }

        fetchProducts();
    }, [])

    return (
        <div className={style.Container}>

            <header className={style.Header}>
                <section className={style.TopSection}>
                    <div className={style.TopSeciontText}>
                        <img src={shield} alt="Shield" />
                        <span className={style.InfoText}>Compra <span className={style.InfoHighlight}>100% segura</span></span>
                    </div>
                    <div className={style.TopSeciontText}>
                        <img src={truck} alt="Truck" />
                        <span className={style.InfoText}><span className={style.InfoHighlight}>Frete gráris</span> acima de R$ 200</span>
                    </div>
                    <div className={style.TopSeciontText}>
                        <img src={card} alt="Card" />
                        <span className={style.InfoText}><span className={style.InfoHighlight}>Parcele</span> suas compras</span>
                    </div>
                </section>

                <section className={style.MiddleSection}>
                    <img src="/logo.png" alt="Econverse" />
                    <div className={style.SearchContainer}>
                        <input type="text" placeholder='O que você está buscando?' />
                        <img src={glass} alt="" />
                    </div>
                    <ul className={style.ActionButtons}>
                        <li><img src={box} alt="Box" /></li>
                        <li><img src={heart} alt="Heart" /></li>
                        <li><img src={user} alt="User" /></li>
                        <li><img src={cart} alt="Cart" /></li>
                    </ul>
                </section>

                <section className={style.BottomSection}>
                    <nav className={style.CategoriesContainer}>
                        <ul className={style.Categories}>
                            <li className={style.Category}>Todas as categorias</li>
                            <li className={style.Category}>Supermercado</li>
                            <li className={style.Category}>Livros</li>
                            <li className={style.Category}>Moda</li>
                            <li className={style.Category}>Lançamentos</li>
                            <li className={`${style.Category} ${style.Selected}`}>Ofertas do dia</li>
                            <li className={style.Category}><img src={crown} alt="Crown" />Assinatura</li>
                        </ul>
                    </nav>
                </section>

                <main>
                    <div className={style.Banner}>
                        <p className={style.Title}>Venha conhecer nossas promoções</p>
                        <div className={style.SubTitle}>
                            <p>50% Off</p>
                            <p>nos produtos</p>
                        </div>
                        <button className={style.Button}>Ver produto</button>
                    </div>

                    <nav className={style.Categories}>
                        {
                            categories.map((category) => (
                                <Category name={category.name} icon={category.icon} />
                            ))
                        }
                    </nav>

                    {
                        products && ( <Showcase products={products} /> )
                    }

                </main>


            </header>

        </div>    
    )
}

export default App
