import Image from "next/image";
import { Tent } from "../../types";
import styles from "../../styles/styles.module.css";
import { motion } from "motion/react";

export default function TentCard({ tent }: { tent: Tent }) {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      exit={{ y: 40, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.tentCard}
    >
      <div className={styles.contentCardTent}>
        <header className={styles.contentCardHeader}>
          <Image
            src={"/assets/logo-main.png"}
            alt={tent.categoria}
            loading="lazy"
            quality={100}
            width={150}
            height={50}
            style={{ objectFit: "cover" }}
            priority={false}
          />
          <h5>{tent.categoria}</h5>
        </header>

        <div className={styles.imageContainer}>
          <Image
            src={tent.imgUrl}
            loading="lazy"
            alt={`imagen de ${tent.categoria}`}
            fill
            style={{
              margin: "0 auto",
              objectFit: "cover",
            }}
            priority={false}
          />
        </div>
      </div>
    </motion.div>
  );
}
