import { useContext } from 'react';
import LanguageContext from '../../context/LanguageContext';
import './footer.css';

function Footer() {
  const language = useContext(LanguageContext);
  const author = language === 'en' ? 'Gleb Dmitriev' : 'Глеб Дмитриев';
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
        {language === 'en' ? 'Code on Github' : 'Код на Гитхабе'}
      </a>
    </footer>
  );
}

export default Footer;
