import { useState } from "react";
import { SwiperInfo } from "../swiper-info/swiper-info";
import styles from "./Home.module.css";

export const Home = () => {
  const [activeHoverIndex, setActiveHoverIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(true);

  const angles = [0, 42, 83, 180, 221, 262];

  const titles = ["Наука", "Звери", "Природа", "Учение", "Религия", "Иное"];

  const handleClick = (index: number) => {
    setIsTextVisible(false);

    setTimeout(() => {
      setActiveIndex(index);
      setRotationAngle(-angles[index]);
    }, 300);

    setTimeout(() => {
      setIsTextVisible(true);
    }, 1000);
  };

  return (
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

      <div className={styles.circle_wrapper}>
        <div
          className={styles.centr_circle}
          style={{ transform: `rotate(${rotationAngle}deg)` }}
        >
          {titles.map((_, index) => (
            <div
              key={index}
              className={`${styles[`circle_item_${index + 1}`]} ${
                activeHoverIndex === index || activeIndex === index
                  ? styles.circle_item_active
                  : ""
              }`}
              onMouseEnter={() => setActiveHoverIndex(index)}
              onClick={() => handleClick(index)}
              onMouseLeave={() => setActiveHoverIndex(null)}
            >
              <div className={styles.circle_dot}></div>
              {(activeHoverIndex === index || activeIndex === index) && (
                <p
                  style={{
                    transform: `rotate(${-rotationAngle}deg)`,
                    opacity: isTextVisible ? 1 : 0,
                  }}
                  className={styles.circle_item_index}
                >
                  {index + 1}
                </p>
              )}
            </div>
          ))}
        </div>

        <p
          className={`${styles.circle_item_heading}`}
          style={{ opacity: isTextVisible ? 1 : 0 }}
        >
          {activeIndex !== null ? titles[activeIndex] : ""}
        </p>
      </div>

      <div className={styles.horizontal_stick}></div>
      <div className={styles.vertical_stick}></div>

      <SwiperInfo />
    </main>
  );
};
