import PropTypes  from 'prop-types';
import css from './profile.module.css'

export default function Profile ({
  avatar,
  username,
  tag,
  location,
  statsFollowers,
  statsViews,
  statsLikes,
}) 
  {  
    return (
      <div className={css.profile}>
        <div className={css.description}>
          <img src={avatar} alt="User avatar" className="avatar" />
          <p className={css.name}>{username}</p>
          <p className={css.tag}>{tag}</p>
          <p className={css.location}>{location}</p>
        </div>
  
        <ul className={css.stats}>
          <li className={css.statsadd}>
            <span className={css.label}>Followers </span>
            <span className={css.quantity}>{statsFollowers}</span>
          </li>
          <li className={css.statsadd}>
            <span className={css.label}>Views </span>
            <span className={css.quantity}>{statsViews}</span>
          </li>
          <li className={css.statsadd}>
            <span className={css.label}>Likes </span>
            <span className={css.quantity}>{statsLikes}</span>
          </li>
        </ul>
      </div>
    );
  };


  Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired, 
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    statsFollowers: PropTypes.number.isRequired,
    statsViews: PropTypes.number.isRequired,
    statsLikes: PropTypes.number.isRequired,
  };

 