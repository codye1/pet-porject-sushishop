import React, { useEffect, useState } from 'react';
import { Tovar } from '../../API';
import { useAppDispatch } from '../../hooks';
import { addtovar, deletetovar } from '../../reducer/korzina';
import { store } from '../../reducer/store';
import './CardTovar.css'
import Action from './CardUI/Action';
import CardButton from './CardUI/CardButton';
import CardButtonActive from './CardUI/CardButtonActive';
import CardLables from './CardUI/CardLables';
import PriceInAction from './CardUI/PriceInAction';
import ShefRec from './CardUI/ShefRec';

interface Card{
    tovar:Tovar
}
const CardTovar: React.FC<Card> = ({tovar}) => {
    const [koshiktovar,setKosiktovar]=useState(0)
    const disp= useAppDispatch()
    function redkoshik (a:boolean){
        a? store.dispatch(addtovar(tovar)) : store.dispatch(deletetovar(tovar))
        setKosiktovar(store.getState().korzina.tovar.length)
    }
    return (
        <div  className='card'>
            <img src={tovar.photo} alt="" />
            <CardLables tovar={tovar}/>
            <div className='back-card'>
                <strong>
                    <span style={{whiteSpace:'nowrap'}}>{tovar.harch.weight} Г</span>
                    <span className='card-atr'></span>
                </strong>
                <h2 className='card-title-block'>
                    <a  className='card-title' href='' title={tovar.title}>{tovar.title}</a>
                </h2>
                <p className='card-desck' title={tovar.body} >{tovar.body}</p>
                <div className='card-price'>
                    <div className='price'>
                        {tovar.action>0? <PriceInAction price={tovar.price} action={tovar.action}/> : <div className='current-price'>{tovar.price} грн</div> }
                    </div>

                {store.getState().korzina.tovar.length===0?<div onClick={()=>redkoshik(true)} className='button-card'  > <CardButton/> </div>
                :
                <div className='koshik'>
                    <div className='koshik-b'>
                        <div className='koshik-active'>
                            <div className='koshik-active-block'>
                                <div onClick={()=>redkoshik(false)} className='remove'>
                                    <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0H12V2H0V0Z" fill="red"></path></svg>
                                </div>
                                <div className='count'>
                                    {store.getState().korzina.tovar.filter((o)=>o.id===tovar.id).length} шт
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
                }

                </div>
            </div>
        </div>
    );
};

export default CardTovar;