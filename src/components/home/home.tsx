import { Slider } from "../slider/slider";
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
        <article className={styles.circle}></article>
        <Slider />
      </main>
    </>
  );
};
