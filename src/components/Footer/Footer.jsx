import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-line"></div> 
      <div className="footer-bottom">
        <p style={{fontWeight:"400"}}>CryptoMonk &copy; 2024</p>
        <a href="https://bento.me/ksr" target="_blank">
          <p className="my-name">
            <i className="ri-sparkling-2-fill"></i> Harkirat Singh
          </p>
        </a>
      </div>
    </footer>
  );
};
