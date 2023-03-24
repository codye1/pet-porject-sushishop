import React from 'react';
import { Tovar } from '../../../API';
import { addtovar } from '../../../reducer/korzina';
import { store } from '../../../reducer/store';

const CardButton = () => {
    return (
        <div className='koshik'>
            <div>
                <div className='koshik-block'>
                    <button className='koshik-button'>
                        <span className='koshik-text'>В кошик</span>
                        <span className='koshik-harak'></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardButton;