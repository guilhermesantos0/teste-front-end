import style from './Category.module.scss';

interface CategoryType {
    name: string,
    icon: string
}

const Category: React.FC<CategoryType> = ({ name, icon }) => {
    return (
        <div className={style.Container}>
            <div className={style.IconContainer}>
                <img src={icon} alt={name} width={61} height={61} />
            </div>
            <p className={style.Name}>{name}</p>
        </div>
    )
}

export default Category