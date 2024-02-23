import style from './css/header.module.css';
import { navLinks } from '../utils/list';
const Header = () => {
  return (
    <nav className={style.navbar}>
      <div className={style['nav-brand']}>
        <a href="#">Furniture</a>
      </div>
      <ul className={style['nav-links']}>
        {navLinks.map((link) => (
          <li className={style.link} key={link.name}>
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Header;
