import React from 'react';

interface PriceInAction{
    price:number
    action:number
}


const PriceInAction = ({price,action}:PriceInAction) => {
    return (
        <div className='prices'>
            <div className='action-price'>
                {Math.ceil(price-((price/100)*action))}грн
            </div>
            <div className='old-price'>
                {price}грн
            </div>
        </div>
    );
};

export default PriceInAction;