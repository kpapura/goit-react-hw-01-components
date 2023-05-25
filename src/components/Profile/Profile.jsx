import PropTypes from 'prop-types';
import userImg from '../../img/programmer.png';
import { ProfileBox, Name, Stats, LiItem } from './Profile.styled';
const Profile = ({ user }) => {
  return (
    <ProfileBox>
      <div className="description">
        <img src={userImg} alt="User avatar" className="avatar" />
        <Name>{user.username}</Name>
        <Name>@{user.tag}</Name>
        <Name>{user.location}</Name>
      </div>

      <Stats>
        <LiItem>
          <span className="label">Followers: </span>
          <span className="quantity">{user.stats.followers}</span>
        </LiItem>
        <LiItem>
          <span className="label">Views: </span>
          <span className="quantity">{user.stats.views}</span>
        </LiItem>
        <LiItem>
          <span className="label">Likes: </span>
          <span className="quantity">{user.stats.likes}</span>
        </LiItem>
      </Stats>
    </ProfileBox>
  );
};

Profile.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Profile;
