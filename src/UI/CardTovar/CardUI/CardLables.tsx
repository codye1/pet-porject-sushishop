
import React from 'react';
import { Tovar } from '../../../API';
import Action from './Action';
import ShefRec from './ShefRec';
interface Lable{
    tovar:Tovar
}

const CardLables:React.FC<Lable> = ({tovar}) => {
    return (
        <div className='card-lables'>
        {tovar.action>0 && <Action/> }
        {tovar.shef && <ShefRec/>}
        </div>
    );
};

export default CardLables;