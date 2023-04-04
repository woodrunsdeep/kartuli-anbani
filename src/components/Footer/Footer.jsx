import { useSelector } from 'react-redux';
import { selectSettings } from '../../slices/settingsSlice';
import './footer.css';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  const author = t('copyright.author');
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
        {t('links.github')}
      </a>
    </footer>
  );
}

export default Footer;
