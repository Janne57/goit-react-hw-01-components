import PropTypes  from 'prop-types';
import css from "./data.module.css";

export default function Statistics ({ title, stats }) {
    return (
      <section className={css.statistics}>
        <h2 className={css.title}>{title}</h2>
  
        {title && (
          <ul className={css.statlist}>
            {stats.map((stat) => (
              <li className={css.item} style={{backgroundColor: getRandomHexColor()}} key={stat.id}>
                <span className={css.label}>{stat.label}</span>
                <span className={css.percentage}>{stat.percentage}%</span>
              </li>
            ))}
          </ul>
        )}
      </section>
    );
  };

 Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array, 
  };

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
  

 
 
