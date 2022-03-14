import { Link } from "react-router-dom";

const styles = {
  header: {
    marginTop: 50,
    fontSize: 30,
    color: " 	#00BFFF",
    maxWidth: "100%",
  },
  link: {
    textDecoration: "none",
  },
};

const Header = () => {
  return (
    <div>
      <Link to="/" style={styles.link}>
        <div style={styles.header}>dishlist</div>
      </Link>
    </div>
  );
};

export default Header;
