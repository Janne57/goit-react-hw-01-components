export default function Profile(props) {
    console.log(props);
  
    return (
      <div class="profile">
        <div class="description">
          <img src={props.avatar} alt="User avatar" class="avatar" />
          <p class="name">{props.username}</p>
          <p class="tag">{props.tag}</p>
          <p class="location">{props.location}</p>
        </div>
  
        <ul class="stats">
          <li>
            <span class="label">Followers </span>
            <span class="quantity">{props.statsFollowers}</span>
          </li>
          <li>
            <span class="label">Views </span>
            <span class="quantity">{props.statsViews}</span>
          </li>
          <li>
            <span class="label">Likes </span>
            <span class="quantity">{props.statsLikes}</span>
          </li>
        </ul>
      </div>
    );
  }