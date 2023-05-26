import PropTypes from 'prop-types';
import userImg from '../../img/programmer.png';
import { ProfileBox, Name, Stats, LiItem } from './Profile.styled';
 const Profile = ({ username, tag, location, stats, avatar=userImg}) => {
  return (
    <ProfileBox>
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <Name>{username}</Name>
        <Name>@{tag}</Name>
        <Name>{location}</Name>
      </div>

      <Stats>
        <LiItem>
          <span className="label">Followers: </span>
          <span className="quantity">{stats.followers}</span>
        </LiItem>
        <LiItem>
          <span className="label">Views: </span>
          <span className="quantity">{stats.views}</span>
        </LiItem>
        <LiItem>
          <span className="label">Likes: </span>
          <span className="quantity">{stats.likes}</span>
        </LiItem>
      </Stats>
    </ProfileBox>
  );
};

  Profile.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;