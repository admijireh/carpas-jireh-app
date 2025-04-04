import styles from "./styles/styles.module.css";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const SocialMedia = ({ isWhite = false }: { isWhite?: boolean }) => {
  return (
    <div className={`${styles.socialMedia}`}>
      <a
        href="tel:+573026456892"
        target="_blank"
        rel="noopener noreferrer"
        style={{ position: "relative", zIndex: 10 }}
      >
        <FaPhoneAlt
          className={`${styles.icon} ${isWhite && styles.colorIcon}`}
        />
      </a>
      <a
        href="https://wa.me/573171822748"
        target="_blank"
        rel="noopener noreferrer"
        style={{ position: "relative", zIndex: 10 }}
      >
        <FaWhatsapp
          className={`${styles.icon} ${isWhite && styles.colorIcon}`}
        />
      </a>
      {/* <a
        href="https://instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ position: "relative", zIndex: 10 }}
      >
        <FaInstagram
          className={`${styles.icon} ${isWhite && styles.colorIcon}`}
        />
      </a> */}
      <a
        href="mailto:admicarpasjireh@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{ position: "relative", zIndex: 10 }}
      >
        <FaEnvelope
          className={`${styles.icon} ${isWhite && styles.colorIcon}`}
        />
      </a>
    </div>
  );
};

export default SocialMedia;
