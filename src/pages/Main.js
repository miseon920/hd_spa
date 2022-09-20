import { Swiper, SwiperSlide } from "swiper/react";
import { Link, NavLink } from "react-router-dom";
import "swiper/css";
import "../css/Main.scss";
import { useEffect, useRef, useState } from "react";

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
  const [num, setNum] = useState();
  const MSG = useRef();
  useEffect(() => {
    setNum(0);
  }, []);
  return (
    <section className="Main">
      <div className="mainVisual">
        <Swiper
          loop={true}
          onSlideChange={(it) => setNum(it.realIndex)}
          onSwiper={(swiper) => console.log(swiper)}
          ref={MSG}
        >
          {SLIDE.map((slide, idx) => (
            <SwiperSlide
              key={slide.id}
              className={`itm itm0${slide.id} ${num === idx ? "on" : ""}`}
            >
              <div className={`content`}>
                <p>{slide.title}</p>
                <div className="des">{slide.content}</div>
                <Link to={slide.link}>자세히 보기</Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <ul className="dots">
        {SLIDE.map((dot, idx) => {
          <li className={`${num === idx ? "on" : ""}`} key={dot.id}>
            {dot.id}
          </li>;
        })}
      </ul>
      <div className="tab">{SLIDE[num]?.title}</div>
      <div className="slideNum">
        0{num + 1} / 0{SLIDE.length}
      </div>
      {console.log(MSG.current)}
      <button onClick={() => MSG.current.swiper.slidePrev()}>PREV</button>
      <button onClick={() => MSG.current.swiper.slideNext()}>NEXT</button>
    </section>
  );
};
export default Main;

//https://swiperjs.com/react (swiper)
//https://abcdqbbq.tistory.com/82 (sass)

//   sass
//   1. Interpolation(보간법) 의 특징
// - #(샵) 특수문자와 {}(중괄호)를 사용하여 표기한다.  #{..}

// - 삽입된 문자나 변수를 문자 그대로 적용시켜 연산이 되지 않게 한다.

// - @mixin, @import, 일반적인 Sass 문법 등 변수나 문자를 통해 가변적인 값들을 적용해야하는 경우 사용한다.

//   @for $i from 1 through 3
//   through 는 3이하
//   @for $i from 1 to 3
//   to는 3미만
