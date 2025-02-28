import { SwiperInfo } from "../swiper-info/swiper-info";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.heading_wrapper}>
          <h1 className={styles.main_heading}>
            Исторические
            <br />
            даты
          </h1>
        </div>
        <article className={styles.years}>
          <p className={styles.year_from}>2022</p>
          <p className={styles.year_to}>2024</p>
        </article>
        <div className={styles.centr_circle}></div>
        <div className={styles.horizontal_stick}></div>
        <div className={styles.vertical_stick}></div>
        <SwiperInfo />
      </main>
    </>
  );
};
