import Profile from '../Profile/Profile';
import user from '../../Data/user.json';
import data from '../../Data/data.json';
import friends from '../../Data/friends.json';
import transactions from '../../Data/transactions.json';

import Statistics from '../Statistics/Statistics';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        paddingTop: '100px',
        paddingBottom: '100px',
        gap: '150px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile avatar={user.avatar} username={user.username} tag={user.tag} location={user.location} stats={user.stats} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

