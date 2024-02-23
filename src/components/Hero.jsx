import style from './css/hero.module.css';
import furniture from '../assets/furniture.jpeg';
const Hero = () => {
  return (
    <div className={style.hero}>
      <img src={furniture} alt="" />
      <div className={style['hero-card']}>
        <p>New Arrival</p>
        <h1>discover our new collection</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
          corporis maiores, debitis sunt repellendus rem voluptate perferendis
          molestiae? Voluptate, cum?
        </p>
        <button className="btn" type="button">
          Buy now
        </button>
      </div>
    </div>
  );
};
export default Hero;
