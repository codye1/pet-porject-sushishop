import React from 'react';
import { Tovar } from '../../API';
import './CardTovar.css'

interface Card{
    tovar:Tovar
}

const CardTovar: React.FC<Card> = ({tovar}) => {
    return (
        <div className='card'>
            <img src={tovar.photo} alt="" />
            <div className='back-card'>
                <strong>
                    <span>{tovar.harch.weight} Г</span>
                    <span className='card-atr'></span>
                </strong>
                <h2 className='card-title-block'>
                    <a className='card-title' href='' title={tovar.title}>{tovar.title}</a>
                </h2>
                <p className='card-desck' title={tovar.body} >{tovar.body}</p>
                <div className='card-price'>
                    <div className='price'>
                        <div className='current-price'>{tovar.price} грн</div>
                    </div>
                    <div className='koshik'></div>
                </div>
            </div>
        </div>
    );
};

export default CardTovar;