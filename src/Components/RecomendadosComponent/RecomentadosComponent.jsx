import React from 'react';
import '../RecomendadosComponent/recomendadosStyle.css';
import image1 from '../../Resources/Transparent-Products/pizza-queso.png';
import RecomendadoItem from './RecomendadoItem';

function RecomendadosComponent() {
    const imgUrl = '../../Resources/Transparent-Products/pizza-queso.png';
    return (
        <>
            <h1 className='title-recomendados'>
                Recomendados de la Casa
            </h1>
            <div className='recomendados-container'>

                <RecomendadoItem badget={'Popular'} title={'Pizza Especial de queso'} urlImage={image1} />
            </div>
        </>
    );
}

export default RecomendadosComponent;