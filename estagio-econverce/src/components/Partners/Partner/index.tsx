import style from './Partner.module.scss';

import auxiliar_banner from '@assets/images/main/auxiliar_banner.png';

const Partner = () => {
    return (
        <div className={style.Container} style={{ backgroundImage: auxiliar_banner }}>
            <p className={style.Title}>Parceiros</p>
            <p className={style.Subtitle}>Lorem ipsum dolor sit, amet consectetur</p>
            <button className={style.Button}>Confira</button>
        </div>
    )
}

export default Partner;