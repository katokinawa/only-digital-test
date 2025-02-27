import styles from "./slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/mousewheel";

export const Slider = () => {
  return (
    <article className={styles.slider}>
      <p className={styles.slider_pagination}>1/6</p>
      <div className={styles.slider_navigation}>
        <div className={styles.slider_navigation_button_circle}>
          <span className={styles.slider_navigation_arrow_left}></span>
        </div>
        <div className={styles.slider_navigation_button_circle}>
          <span className={styles.slider_navigation_arrow_right}></span>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Pagination, FreeMode, Mousewheel]}
        spaceBetween={80}
        slidesPerView={3}
        mousewheel={{
          invert: true,
          enabled: true,
        }}
        freeMode={{
          enabled: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          el: ".swiper-pagination",
          type: "bullets",
        }}
        grabCursor={true}
      >
        <SwiperSlide>
          <article className={styles.info_item}>
            <h2 className={styles.info_heading}>2014</h2>
            <p className={styles.info_paragraph}>
              13 сентября — частное солнечное затмение, видимое в Южной Африке и
              части Антарктиды
            </p>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className={styles.info_item}>
            <h2 className={styles.info_heading}>2015</h2>
            <p className={styles.info_paragraph}>
              Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных
              галактик, получившую обозначение GN-z11
            </p>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className={styles.info_item}>
            <h2 className={styles.info_heading}>2016</h2>
            <p className={styles.info_paragraph}>
              Компания Tesla официально представила первый в мире электрический
              грузовик Tesla Semi
            </p>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className={styles.info_item}>
            <h2 className={styles.info_heading}>2017</h2>
            <p className={styles.info_paragraph}>
              13 сентября — частное солнечное затмение, видимое в Южной Африке и
              части Антарктиды
            </p>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className={styles.info_item}>
            <h2 className={styles.info_heading}>2018</h2>
            <p className={styles.info_paragraph}>
              Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных
              галактик, получившую обозначение GN-z11
            </p>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className={styles.info_item}>
            <h2 className={styles.info_heading}>2019</h2>
            <p className={styles.info_paragraph}>
              Компания Tesla официально представила первый в мире электрический
              грузовик Tesla Semi
            </p>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className={styles.info_item}>
            <h2 className={styles.info_heading}>2020</h2>
            <p className={styles.info_paragraph}>
              13 сентября — частное солнечное затмение, видимое в Южной Африке и
              части Антарктиды
            </p>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className={styles.info_item}>
            <h2 className={styles.info_heading}>2021</h2>
            <p className={styles.info_paragraph}>
              Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных
              галактик, получившую обозначение GN-z11
            </p>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className={styles.info_item}>
            <h2 className={styles.info_heading}>2022</h2>
            <p className={styles.info_paragraph}>
              Компания Tesla официально представила первый в мире электрический
              грузовик Tesla Semi
            </p>
          </article>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </article>
  );
};
