import React from 'react';
import { Tovar, useGetSetsQuery } from '../../API';
import TovarList from '../../UI/TovarList/TovarList';

const ShefRec = () => {
    const {data,error,isLoading}=useGetSetsQuery()
    const tovars: Tovar[]= []
    data?.map((d)=>d.shef && tovars.push(d))

    return (
        <div>
            {data? <TovarList limit={[8,data.length]} tovars={tovars}/> : !data}
        </div>
    );
};

export default ShefRec;