import PropTypes from 'prop-types';
import { StatusSpan, LiItem, Avatar, Name } from './FriendListItem.styled';

const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <LiItem key={id}>
      <StatusSpan isOnline={isOnline}>{isOnline}</StatusSpan>
      <Avatar src={avatar} alt="User avatar" width="120" />
      <Name>{name}</Name>
    </LiItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
