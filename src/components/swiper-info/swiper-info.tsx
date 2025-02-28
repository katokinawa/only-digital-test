import styles from "./swiper-info.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode, Mousewheel } from "swiper/modules";

export const SwiperInfo = () => {
  return (
    <article className={styles.swiper}>
      <div className={styles.swiper_navigation_wrapper}>
        <div className={styles.swiper_pagination}></div>
        <div className={styles.swiper_navigation}>
          <div className={styles.swiper_navigation_prev}>
            <div className={styles.swiper_navigation_button_circle}>
              <span className={styles.swiper_navigation_arrow_left}></span>
            </div>
          </div>
          <div className={styles.swiper_navigation_next}>
            <div className={styles.swiper_navigation_button_circle}>
              <span className={styles.swiper_navigation_arrow_right}></span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.swiper_wrapper}>
        <Swiper
          modules={[Navigation, Pagination, FreeMode, Mousewheel]}
          spaceBetween={80}
          slidesPerView={3}
          slidesPerGroup={3}
          mousewheel={{
            invert: true,
            enabled: true,
          }}
          freeMode={{
            enabled: true,
          }}
          navigation={{
            nextEl: `.${styles.swiper_slide_next}, .${styles.swiper_navigation_next}`,
            prevEl: `.${styles.swiper_slide_prev}, .${styles.swiper_navigation_prev}`,
            disabledClass: `${styles.swiper_button_disabled}`,
          }}
          pagination={{
            el: `.${styles.swiper_pagination}`,
            currentClass: `${styles.swiper_pagination_current}`,
            totalClass: `${styles.swiper_pagination_total}`,
            type: "fraction",
          }}
          grabCursor={true}
        >
          <SwiperSlide>
            <article className={styles.info_item}>
              <h2 className={styles.info_heading}>2014</h2>
              <p className={styles.info_paragraph}>
                13 сентября — частное солнечное затмение, видимое в Южной Африке
                и части Антарктиды
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
                Компания Tesla официально представила первый в мире
                электрический грузовик Tesla Semi
              </p>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className={styles.info_item}>
              <h2 className={styles.info_heading}>2017</h2>
              <p className={styles.info_paragraph}>
                13 сентября — частное солнечное затмение, видимое в Южной Африке
                и части Антарктиды
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
                Компания Tesla официально представила первый в мире
                электрический грузовик Tesla Semi
              </p>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className={styles.info_item}>
              <h2 className={styles.info_heading}>2020</h2>
              <p className={styles.info_paragraph}>
                13 сентября — частное солнечное затмение, видимое в Южной Африке
                и части Антарктиды
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
                Компания Tesla официально представила первый в мире
                электрический грузовик Tesla Semi
              </p>
            </article>
          </SwiperSlide>
        </Swiper>
        <div className={styles.swiper_slide_prev}>
          <div className={styles.swiper_slide_button_circle}>
            <span className={styles.swiper_slide_arrow_left}></span>
          </div>
        </div>
        <div className={styles.swiper_slide_next}>
          <div className={styles.swiper_slide_button_circle}>
            <span className={styles.swiper_slide_arrow_right}></span>
          </div>
        </div>
      </div>
    </article>
  );
};
