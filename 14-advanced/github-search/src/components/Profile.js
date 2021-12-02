import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import GitHub from '../services/github';

const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [userRepos, setUserRepos] = useState(null);

  const params = useParams();

  useEffect(() => {
    GitHub.getUserInfo(params.username).then((res) => {
      console.log(res.data);
      setUserInfo(res.data);
    });

    GitHub.getUserRepos(params.username).then((res) => {
      console.log(res.data);
      setUserRepos(res.data);
    });
  }, [params.username]
  );

  return (
    <div>
      <h2>Profile for { params.username }</h2>
      <div style={{ display: 'flex' }}>
        <UserInfo info={ userInfo } />
        <Repositories repos={ userRepos } />
      </div>
    </div>
  );
};

const UserInfo = ({ info }) => {
  if (info === null) {
    return <div>Loading...</div>;
  }

  const { login, avatar_url, bio, followers, following, public_repos, public_gists } = info;

  return (
    <div>
      <h3>Stats for { info.login }</h3>
      <img src={ avatar_url } alt={ login } width="200" />
      <p>Bio: { bio }</p>
      <p>Followers: { followers }</p>
      <p>Following: { following }</p>
      <p>Public repos: { public_repos }</p>
      <p>Public gists: { public_gists }</p>
    </div>
  );
};

const Repositories = ({ repos }) => {
  if (repos === null) {
    return <div>Loading...</div>;
  }

  const userRepos = repos.map((r) => {
    return (
      <li key={ r.id }>
        <a href={ r.html_url } target="_blank">
          { r.name }
        </a>
      </li>
    );
  });

  return (
    <div>
      <h3>Repos</h3>
      <ul>
        { userRepos }
      </ul>
    </div>
  );
};

export default Profile;
