import React from 'react';
import './BannerStyle.css'
const Banner = () => {
    return (
        <section className='main-page-banner'>
                <img className='main-page-banner-bg' src="	https://kyiv.sushi-master.ua/img/get-mobile-app/phones-on-home-uk.png" alt="" />
                <div className='main-page-banner-box'>
                    <p className='title'>Швидке замовлення улюбленої їжі зі зручним додатком!</p>
                    <p className='description'>Завантажуйте наш додаток, оформляйте замовлення в один клік і відстежуйте його статус у реальному часі.</p>
                    <div className='flex'>
                    <a href="https://apps.apple.com/us/app/sushi-master/id1575261309" target="_blank" className="main-page-banner-image">
                        <img  src="https://kyiv.sushi-master.ua/img/get-mobile-app/app-store.svg" alt="app-store"/>
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.x100group.sushimaster" target="_blank" className="main-page-banner-image">
                        <img src="https://kyiv.sushi-master.ua/img/get-mobile-app/google-play.svg" alt="google-play"/>
                    </a>
                    </div>
                </div>
            </section>
    );
};

export default Banner;