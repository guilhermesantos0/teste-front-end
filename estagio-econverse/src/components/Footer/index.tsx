import style from './Footer.module.scss';

// IMAGES
import Instagram from '@assets/images/footer/instagram.svg?react';
import Facebook from '@assets/images/footer/facebook.svg?react';
import Linkedin from '@assets/images/footer/linkedin.svg?react';

const Footer: React.FC = () => {
    return (
        <footer className={style.Container}>
            <div className={style.MainArea}>
                <div className={style.LeftContent}>
                    <div className={style.TopContent}>
                        <a href="#" className={style.Logo}>
                            <img src="/logo.png" alt="Econverse" loading="lazy" />
                        </a>
                        <p className={style.Text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className={style.SocialMedia}>
                        <Instagram className={style.Icon} />
                        <Facebook  className={style.Icon} />
                        <Linkedin className={style.Icon} />
                    </div>
                </div>

                <span className={style.Line}></span>

                <nav className={style.Navigation}>
                    <div className={style.Column}>
                        <h3 className={style.Title}>Institucional</h3>
                        <ul className={style.Options}>
                            <li className={style.Option}><a href="#">Sobre Nós</a></li>
                            <li className={style.Option}><a href="#">Movimento</a></li>
                            <li className={style.Option}><a href="#">Trabalhe conosco</a></li>
                        </ul>
                    </div>
                    <div className={style.Column}>
                        <h3 className={style.Title}>Ajuda</h3>
                        <ul className={style.Options}>
                            <li className={style.Option}><a href="#">Suporte</a></li>
                            <li className={style.Option}><a href="#">Fale Conosco</a></li>
                            <li className={style.Option}><a href="#">Perguntas Frequentes</a></li>
                        </ul>
                    </div>
                    <div className={style.Column}>
                        <h3 className={style.Title}>Termos</h3>
                        <ul className={style.Options}>
                            <li className={style.Option}><a href="#">Termos e Condições</a></li>
                            <li className={style.Option}><a href="#">Política de Privacidade</a></li>
                            <li className={style.Option}><a href="#">Troca e Devolução</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className={style.Credits}>
                <p className={style.Text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </footer>
    );
};

export default Footer;