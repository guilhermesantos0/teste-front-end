import style from './Partners.module.scss';

import Partner from './Partner';

const Partners = () => {
    return (
        <div className={style.Container}>
            <Partner />
            <Partner />
        </div>
    )
}

export default Partners