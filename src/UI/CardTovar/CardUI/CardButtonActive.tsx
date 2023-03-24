import React, { useState } from 'react';
import { Tovar } from '../../../API';
import { addtovar, deletetovar } from '../../../reducer/korzina';
import { store } from '../../../reducer/store';

interface Act{
    tovar:Tovar
}

const CardButtonActive:React.FC<Act> = ({tovar}) => {
    const [a,setA]=useState(0)
    function redkoshik (a:boolean){
        a? store.dispatch(addtovar(tovar)) : store.dispatch(deletetovar(tovar))

        setA(store.getState().korzina.tovar.length)
    }

    return (
        <div className='koshik'>
            <div className='koshik-b'>
                <div className='koshik-active'>
                    <div className='koshik-active-block'>
                        <div onClick={()=>redkoshik(false)} className='remove'>
                            <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0H12V2H0V0Z" fill="red"></path></svg>
                        </div>
                        <div className='count'>
                            {store.getState().korzina.tovar.length} шт
                        </div>
                        <div onClick={()=> redkoshik(true)} className='add'>
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6696 7.36608H7.36605V12.6696H5.59819V7.36608H0.294617V5.59822H5.59819V0.294647H7.36605V5.59822H12.6696V7.36608Z" fill="red"></path></svg>
                        </div>
                    </div>
                </div>
                <div className='koshik-active'>

                </div>
            </div>
        </div>
    );
};

export default CardButtonActive;