import React, { useState } from "react";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import apple from "../../assets/images/apple.png";

const HomeCat = () => {
  const [itemBg, setItemBg] = useState([
    "#fffceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#fffceb",
    "#feefea",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#ecffec",
  ]);

  return (
    <section className="homeCat">
      <div className="container">
        <h3 className="mb-4 hd">Featured Categories</h3>
        <Swiper
          slidesPerView={10}
          spaceBetween={10}
          navigation={true}
          slidesPerGroup={2}
          modules={[Navigation]}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            992: { slidesPerView: 10 },
          }}
          className="mySwiper"
        >
          {[...Array(20)].map((_, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="item text-center cursor"
                style={{ background: itemBg[idx % itemBg.length] }}
              >
                <img src={apple} alt={`Red apple ${idx + 1}`} />
                <h6>Red apple</h6>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeCat;