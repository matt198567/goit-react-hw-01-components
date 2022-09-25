import {
  ProfileBox,
  InfoContainer,
  Image,
  InfoBlock,
  UserName,
} from './Profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileBox>
      <InfoContainer class="description">
        <Image src={avatar} alt={username} class="avatar" />
        <UserName class="name">{username}</UserName>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </InfoContainer>
      <InfoBlock class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{followers} </span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{views} </span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{likes} </span>
        </li>
      </InfoBlock>
    </ProfileBox>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};
