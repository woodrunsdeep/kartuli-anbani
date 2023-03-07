import './footer.css';

function Footer({ lang }) {
  const author = lang === 'en' ? 'Gleb Dmitriev' : 'Глеб Дмитриев';
  const year = (new Date()).getFullYear();
  const copyRight = `© ${author} - ${year}`;
  return (
    <footer className="footer">
      <p className="footer__copyright">{copyRight}</p>
      <a
        className="footer__link"
        href="https://github.com/woodrunsdeep/kartuli-anbani/"
        target="_blank"
        rel="noreferrer"
      >
        {lang === 'en' ? 'Code on Github' : 'Код на Гитхабе'}
      </a>
    </footer>
  );
}

export default Footer;
