import React from 'react';
import { Tovar } from '../../API';
import CardTovar from '../CardTovar/CardTovar';
import "./TovarList.css"
interface TovarList{
    tovars:Tovar[]
    limit:[number,number]
}

const TovarList: React.FC<TovarList> = ({tovars,limit}) => {
    return (

                <div className='comp-list'>
                    <div className='comp-list-2'>
                        <div className='products-list'>
                            {tovars.slice(limit[0],limit[1]).map(t=><CardTovar key={t.key} tovar={t}/>)}
                        </div>
                    </div>
                </div>


    );
};

export default TovarList;