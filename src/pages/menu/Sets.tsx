import React from 'react';
import { useGetSetsQuery } from '../../API';
import TovarList from '../../UI/TovarList/TovarList';
import './Menu.css'
const Sets = () => {
    const {data,error,isLoading}=useGetSetsQuery()

    return (
        <div className='container-menu'>
            <div className="menu-header">
                <h1 className="page-title">Сети</h1>
                <div className="filter-sorting-trigger">
                    <strong className="fs-title">
                        <img src="https://kyiv.sushi-master.ua/img/products/filters.svg" alt="Sorting &amp; Filter"/>
                        Фільтр і сортування
                    </strong>
                </div>
            </div>
            {data && <TovarList tovars={data} limit={[0,data.length]} />}
        </div>
    );
};

export default Sets;