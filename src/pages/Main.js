import { Swiper, SwiperSlide } from "swiper/react";
import { Link, NavLink } from "react-router-dom";
import "swiper/css";
import "../css/Main.scss";

const SLIDE = [
  {
    id: 1,
    title: "01 현대엘리베이트 스마트 테크놀로지 체험",
    content: "현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다.",
    link: "/sub01",
  },
  {
    id: 2,
    title: "02 현대엘리베이트 스마트 테크놀로지 체험",
    content: "현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다.",
    link: "/sub02",
  },
  {
    id: 3,
    title: "03 현대엘리베이트 스마트 테크놀로지 체험",
    content: "현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다.",
    link: "https://my.matterport.com/show/?m=yEdf9FWaNav",
  },
];
const Main = () => {
  return (
    <section className="Main">
      <div className="mainVisual">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {SLIDE.map((slide, idx) => (
            <SwiperSlide key={slide.id} className={`itm0 itm${slide.id}`}>
              <div className="content">
                <p>{slide.title}</p>
                <div className="des">{slide.content}</div>
                <Link to={slide.link}>자세히 보기</Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default Main;

//https://swiperjs.com/react
