import { useEffect, useState } from 'react';
import style from './App.module.scss';

// COMPONENTES
import Category from './components/Category';
import Showcase from './components/Showcase';
import Partners from './components/Partners';
import Footer from './components/Footer';

// IMAGES / HEADER - Importando como componentes React com ?react
import ShieldIcon from '@assets/images/header/shield.svg?react';
import TruckIcon from '@assets/images/header/truck.svg?react';
import CardIcon from '@assets/images/header/card.svg?react';
import GlassIcon from '@assets/images/header/glass.svg?react';

import BoxIcon from '@assets/images/header/box.svg?react';
import HeartIcon from '@assets/images/header/heart.svg?react';
import UserIcon from '@assets/images/header/user.svg?react';
import CartIcon from '@assets/images/header/cart.svg?react';

import CrownIcon from '@assets/images/header/crown.svg?react';

// IMAGES / CATEGORIES - Importando como componentes React com ?react
import TechIcon from '@assets/images/main/categories/tech.svg?react';
import SupermarketIcon from '@assets/images/main/categories/supermarket.svg?react';
import BeveragesIcon from '@assets/images/main/categories/beverages.svg?react';
import ToolsIcon from '@assets/images/main/categories/tools.svg?react';
import HealthIcon from '@assets/images/main/categories/health.svg?react';
import SportsIcon from '@assets/images/main/categories/sports.svg?react';
import FashionIcon from '@assets/images/main/categories/fashion.svg?react';

// TYPES
import { ProductType } from './types/Product';

function App() {

    const [products, setProducts] = useState<ProductType[]>();

    const categories = [
        {
            name: 'Tecnologia',
            icon: TechIcon,
            selected: true
        },
        {
            name: 'Supermercado',
            icon: SupermarketIcon
        },
        {
            name: 'Bebidas',
            icon: BeveragesIcon
        },
        {
            name: 'Ferramentas',
            icon: ToolsIcon
        },
        {
            name: 'Saúde',
            icon: HealthIcon
        },
        {
            name: 'Esportes e Fitness',
            icon: SportsIcon
        },
        {
            name: 'Moda',
            icon: FashionIcon
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

            <header className={style.Header}  role="header">
                <section className={style.TopSection}>
                    <div className={style.TopSeciontText}>
                        <ShieldIcon width={20} height={20} aria-hidden="true" />
                        <span className={style.InfoText}>Compra <span className={style.InfoHighlight}>100% segura</span></span>
                    </div>
                    <div className={style.TopSeciontText}>
                        <TruckIcon width={20} height={20} aria-hidden="true" />
                        <span className={style.InfoText}><span className={style.InfoHighlight}>Frete gráris</span> acima de R$ 200</span>
                    </div>
                    <div className={style.TopSeciontText}>
                        <CardIcon width={20} height={20} aria-hidden="true" />
                        <span className={style.InfoText}><span className={style.InfoHighlight}>Parcele</span> suas compras</span>
                    </div>
                </section>

                <section className={style.MiddleSection}>
                    <img src="/logo.png" alt="Econverse" />
                    <div className={style.SearchContainer} role="search">
                        <input type="text" placeholder='O que você está buscando?' aria-label="Campo de busca de produtos" />
                        <GlassIcon width={28} height={28} className={style.Glass} />
                    </div>
                    <ul className={style.ActionButtons} aria-label="Ações do usuário">
                        <li aria-label="Meus pedidos"><BoxIcon aria-hidden="true" className={style.Icon} /></li>
                        <li aria-label="Lista de desejos"><HeartIcon className={style.Icon} aria-hidden="true" /></li>
                        <li aria-label="Minha conta"><UserIcon className={style.Icon} aria-hidden="true" /></li>
                        <li aria-label="Carrinho de compras"><CartIcon className={style.Icon} aria-hidden="true" /></li>
                    </ul>
                </section>

                <section className={style.BottomSection}>
                    <nav className={style.CategoriesContainer} aria-label="Navegação principal">
                        <ul className={style.Categories}>
                            <li className={style.Category}>Todas as categorias</li>
                            <li className={style.Category}>Supermercado</li>
                            <li className={style.Category}>Livros</li>
                            <li className={style.Category}>Moda</li>
                            <li className={style.Category}>Lançamentos</li>
                            <li className={`${style.Category} ${style.Selected}`}>Ofertas do dia</li>
                            <li className={style.Category}><CrownIcon className={style.CrownIcon} aria-hidden="true" />Assinatura</li>
                        </ul>
                    </nav>
                </section>
            </header>

            <main className={style.Main} role="main">
                <div className={style.Banner} role="banner">
                    <p className={style.Title}>Venha conhecer nossas promoções</p>
                    <p className={style.SubTitle}><span className={style.Highlight}>50% Off</span> nos produtos</p>
                    <button className={style.Button}>Ver produto</button>
                </div>

                <nav className={style.Categories} role='categories'>
                    {
                        categories.map((category, index) => (
                            <Category key={index} name={category.name} icon={category.icon} selected={category.selected} />
                        ))
                    }
                </nav>

                { products && ( <Showcase products={products} showCategories className={style.Showcase} /> ) }

                <Partners />

                { products && ( <Showcase products={products} className={style.Showcase} /> ) }

                <Partners />

                { products && ( <Showcase products={products} className={style.Showcase} /> ) }

                <section className={style.BrandsSection} aria-labelledby="brands-title">
                    <p id='brands-title' className={style.Title}>Navegue por marcas</p>
                    <ul className={style.Brands}>
                        <li className={style.Brand}><img src="/logo.png" alt="Econverse" loading="lazy" /></li>
                        <li className={style.Brand}><img src="/logo.png" alt="Econverse" loading="lazy" /></li>
                        <li className={style.Brand}><img src="/logo.png" alt="Econverse" loading="lazy" /></li>
                        <li className={style.Brand}><img src="/logo.png" alt="Econverse" loading="lazy" /></li>
                        <li className={style.Brand}><img src="/logo.png" alt="Econverse" loading="lazy" /></li>
                    </ul>
                </section>

                { products && ( <Showcase products={products} className={style.Showcase} /> ) }

            </main>

            <section className={style.Newsletter} aria-labelledby="newsletter-title">
                <div className={style.NewsletterText}>
                    <p id="newsletter-title" className={style.Title}>Inscreva-se</p>
                    <p className={style.Subtitle}>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
                </div>
                <form action="subscribe" method="post" aria-labelledby="newsletter-title">
                    <div className={style.FormInputs}>
                        <input type="text" className={style.Input} placeholder='Digite seu nome' aria-label='Nome Completo' />
                        <input type="email" className={style.Input} placeholder='Digite seu e-mail' aria-label='Endereço de Email' />
                        <button type="submit" className={style.Button} aria-label="Inscrever-se na newsletter">Inscrever</button>
                    </div>
                    <div className={style.FormTerms}>
                        <input type="checkbox" id="terms" />
                        <label htmlFor="terms">Aceito os termos e condições</label>
                    </div>
                </form>
            </section>

            <Footer />

        </div>    
    )
}

export default App

