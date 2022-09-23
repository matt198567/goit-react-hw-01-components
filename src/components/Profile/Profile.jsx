export const Profile = ({
  profile: { username, tag, location, avatar, stats },
}) => {
  return (
    <div class="profile">
      <div class="description">
        <img src={avatar} alt="User avatar" class="avatar" />
        <p class="name">{username}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{stats} </span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{stats} </span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{stats} </span>
        </li>
      </ul>
    </div>
  );
};
