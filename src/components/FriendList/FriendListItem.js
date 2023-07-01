import clsx from "clsx"
import PropTypes from 'prop-types'
import css from "./friendList.module.css";

export default function FriendListItem ({ avatar, name, isOnline, id }) {
    return (
      <li className={css.itemFriends} key={id}>
            <span className={clsx( isOnline ? css["statusOther"] : css["status"] )}>{isOnline}</span>
            {/* <span className={css.status}>{isOnline}</span> */}
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
      </li>   
    );
    };

    FriendListItem.propTypes = {
      avatar: PropTypes.string,
      name: PropTypes.string, 
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    };
