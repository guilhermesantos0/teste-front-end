import style from './Footer.module.scss';

// IMAGES
import instagram from '@assets/images/footer/instagram.svg';
import facebook from '@assets/images/footer/facebook.svg';
import linkedin from '@assets/images/footer/linkedin.svg';

const Footer: React.FC = () => {
    return (
        <footer className={style.Footer}>
        <div className={style.MainArea}>
            <div className={style.MainContainer}>
                <div className={style.LeftContent}>
                    <a href="#" className={style.Logo}>
                        <img src="/logo.png" alt="Econverse" />
                    </a>
                    <p className={style.Text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className={style.SocialMedia}>
                        <a href="#"><img src={instagram} alt="Instagram" /></a>
                        <a href="#"><img src={facebook} alt="Facebook" /></a>
                        <a href="#"><img src={linkedin} alt="LinkedIn" /></a>
                    </div>
                </div>
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
        </div>
        <div className={style.Credits}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        </footer>
    );
};

export default Footer;