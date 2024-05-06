import React from 'react';
import '../PrincipalContainer/principal-container.css';
import OrderInfo from '../OrderInfo/OrderInfo';
import CarouselComponent from "../Carousel/Carousel";
import RecomendadosComponent from '../RecomendadosComponent/RecomentadosComponent';
import Franja from '../Franja/Franja';
import MenuContainer from '../MenuComponent/MenuContainer/MenuContainer';

function PrincipalContainer(){

    return(
        <div className='principal-container'>
            <OrderInfo />
            <CarouselComponent/>
            <RecomendadosComponent />
            <Franja />
            <MenuContainer/>
        </div>
    );

}

export default PrincipalContainer;