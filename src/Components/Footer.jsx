import styles from "./Footer.module.css";
function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          {" "}
          &copy; Copyright {new Date().getFullYear()} By Wanderkid Inc.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
