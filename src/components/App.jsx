import Profile from './Profile/Profile.js';
import Statistics from './Statistics/Statistics.js';
import FriendList from './FriendList/FriendList.js';
import TransactionHistory from './TransactionHistory/TransactionHistory.js';
import user from './/Profile/user.json';
import data from './/Statistics/data.json';
import friends from './/FriendList/friends.json';
import transaction from './/TransactionHistory/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        statsFollowers={user.stats.followers}
        statsViews={user.stats.views}
        statsLikes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transaction} />
    </div>
  );
};
