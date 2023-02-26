import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetRollsQuery, useGetSetQuery, useGetSetsQuery } from '../API';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { A11y, EffectCoverflow, Pagination, Scrollbar, Zoom } from 'swiper';
import CardTovar from '../UI/CardTovar/CardTovar';

const Home = () => {

    let slide =[
        {img:'https://x100-venus-sm-ua.gumlet.io/BANNERS/SUSHI-MASTER/54D3EA71-A30D-11ED-B346-714A6D8F5A26-web.png?alt=media&token=e4daa0fc-5391-45c3-b496-14c15ac171f0&w=1280&h=600&format=png&mode=fit&q=59'},
        {img:'https://x100-venus-sm-ua.gumlet.io/BANNERS/SUSHI-MASTER/7FAE3AB1-AC96-11ED-BF3A-051FBD8C719D-web.png?alt=media&token=1a7f7060-0c4c-494b-a9d2-28627220f8a4&w=1280&h=600&format=png&mode=fit&q=59'},
        {img:'https://x100-venus-sm-ua.gumlet.io/BANNERS/SUSHI-MASTER/1BB3F6C1-9E73-11ED-8B10-F7FE9622126C-web.png?alt=media&token=09fbe00a-864c-4ae8-9dda-31ba2e37b4a6&w=1280&h=600&format=png&mode=fit&q=59'},
        {img:'https://x100-venus-sm-ua.gumlet.io/BANNERS/SUSHI-MASTER/51E77681-AC9D-11ED-BF3A-051FBD8C719D-web.png?alt=media&token=198d5606-9c88-4744-b6a7-ca878f787f19&w=1280&h=600&format=png&mode=fit&q=59'},
        {img:'https://x100-venus-sm-ua.gumlet.io/BANNERS/SUSHI-MASTER/2615EF71-ACA0-11ED-BF3A-051FBD8C719D-web.png?alt=media&token=41d1354f-5d02-454a-92bd-225eb13eeb1e&w=1280&h=600&format=png&mode=fit&q=59'},
        {img:'https://x100-venus-sm-ua.gumlet.io/BANNERS/SUSHI-MASTER/4028CB31-ACA5-11ED-BF3A-051FBD8C719D-web.png?alt=media&token=20f76b3d-cdc9-449c-a769-11b26183fc1d&w=1280&h=600&format=png&mode=fit&q=59'},
        {img:'https://x100-venus-sm-ua.gumlet.io/BANNERS/SUSHI-MASTER/BE2E88B0-ACA7-11ED-BF3A-051FBD8C719D-web.png?alt=media&token=92ad1df6-ce3a-4194-a5b9-c79281ea9ae0&w=1280&h=600&format=png&mode=fit&q=59'},
        {img:'https://x100-venus-sm-ua.gumlet.io/BANNERS/SUSHI-MASTER/FC578E21-9E42-11ED-B346-714A6D8F5A26-web.png?alt=media&token=6c4e4e14-20a0-40b6-8b76-8b6f3a109dd1&w=1280&h=600&format=png&mode=fit&q=59'}

]
    let {data,error,isLoading} = useGetSetsQuery()
    return (

        <div className='App'>
            {data? <CardTovar tovar={data[0]}/> : <h1>Хуй</h1>}

            <div className='swiper-content'>
            <Swiper
loop={true}
style={{ overflow: 'visible'}}
slidesPerView={1} zoom
spaceBetween={100}
centeredSlides={true}
pagination={{
  clickable: true,
}}
modules={[Pagination,Zoom]}
className="mySwiper"
    >
                {slide.map((s)=><SwiperSlide><img src={s.img} alt="" /></SwiperSlide>)}
            </Swiper>
            </div>
        </div>
    );
};

export default Home;