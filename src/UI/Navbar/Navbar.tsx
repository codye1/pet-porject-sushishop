import React, { useContext } from "react";
import { Link, Navigate, NavLink, useParams} from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    let navbar_down = [
        {site:"sets",name:'Сети'},
        {site:"rolls",name:'Роли'},
        {site:"filadelfiya",name:'Філадельфії'},
        {site:"californiya",name:'Каліфорнії'},
        {site:"sushi",name:'Суші'},
        {site:"deserts",name:'Десерти'},
        {site:"hotandsalat",name:'Гаряче та салати'},
        {site:"sups",name:'Супи'},
        {site:"drink",name:'Напої'},
        {site:"dops",name:'Доповнення'},
        {site:"action",name:'Акції'},
        {site:"shefrec",name:'Шев рекомендує'}]


    return (
        <header className="top-header">
            <div className="top-header-up">
                <div className="container">
                <div className="header-left">
                    <div className="city-phone-wrapper">
                        <div className="choose-city">
                                <div className="city">
                                    <p className="city-name">Київ</p>
                                </div>
                        </div>
                    </div>
                    <div className="header-lang-block">
                        <button className="lang-button">
                            <span className="lang">
                                UA
                                <img src="https://kyiv.sushi-master.ua/img/header/arrow-down.svg" alt="" style={{width:'17px',height:"17px"}} />
                            </span>
                            <span className="lang-cont"></span>
                        </button>
                    </div>
                    <a className="tell" href="tel:044 333 70 64">044 333 70 64</a>
                </div>
                <div className="header-center">
                    <div className="header-center-cont">
                        <Link to='/home'>
                            <img  className="navbar-center logo" src="https://x100-venus-sm-ua.gumlet.io/VENUS/WEB/4C25DB70-1DCE-11EB-A6EC-7B643829D650/1675018701967_%D1%81%D0%B0%D0%B9%D1%82.svg?alt=media&token=a2835928-b794-4bd1-8b2c-7e722bd31b10" alt=""
                        /></Link>
                    </div>
                </div>
                <div className="header-right">
                    <div className="header-searchs">
                        <img  src="https://kyiv.sushi-master.ua/img/header/search.svg" alt="" />
                    </div>
                    <div  className="head-vhod">
                        <button className="vhod-button">
                            <span className="vhod">
                                <img src="https://kyiv.sushi-master.ua/img/header/user.svg" alt="" />
                                Увійти
                            </span>
                            <span className="cont-butt"></span>
                        </button>
                    </div>
                    <span>
                        <div className="korzina">
                            <img src="https://kyiv.sushi-master.ua/img/header/cart.svg" alt="" />
                            <span>
                            </span>
                        </div>
                    </span>
                </div>
                </div>
            </div>
            <div className="spec-cont">
                <div className="spec"></div>
            </div>
            <div className="top-header-down">
                <div className="containernav">
                    <div className="top-header-down--list ">
                        {navbar_down.map(p=><NavLink key={p.site} to={'/'+p.site} className={({isActive})=>isActive? "setss" : 'setssact'} >{p.name}</NavLink>)}
                        </div>
                    </div>
                </div>
        </header>
    );
};

export default Navbar;