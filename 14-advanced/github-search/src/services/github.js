import axios from 'axios';

const clientID = '4ec1b8f9c149f7c46ffd&client_secret=a05ec287c29ebd9633131b5a08298530709130e9';
const params = {
  params: { client_id: clientID }
};

const GitHub = {
  getUserInfo(username) {
    // Return the Promise created by axios for use wherever this function is called.
    return axios.get(`https://api.github.com/users/${ username }`, params);
  },

  getUserRepos(username) {
    // Return the Promise created by axios for use wherever this function is called.
    return axios.get(`https://api.github.com/users/${ username }/repos`, params);
  }
};

export default GitHub;
