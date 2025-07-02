import style from './Partner.module.scss';

const Partner = () => {
    return (
        <div className={style.Container}>
            <div className={style.TextArea}>
                <p className={style.Title}>Parceiros</p>
                <p className={style.Subtitle}>Lorem ipsum dolor sit, amet consectetur</p>
                <button className={style.Button}>Confira</button>
            </div>
        </div>
    )
}

export default Partner;