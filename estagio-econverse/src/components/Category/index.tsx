import style from './Category.module.scss';
import React from 'react';

interface CategoryType {
    name: string,
    icon: React.FC<React.SVGProps<SVGSVGElement>>,
    selected?: boolean
}

const Category: React.FC<CategoryType> = ({ name, icon: IconComponent, selected }) => {
    return (
        <div className={`${style.Container} ${selected ? style.Selected : ''}`}>
            <div className={style.IconContainer}>
                <IconComponent width={61} height={61} />
            </div>
            <p className={style.Name}>{name}</p>
        </div>
    )
}

export default Category

