import axios from 'axios';

const API_URL = 'http://inseek.duckdns.org/api/board';
// const API_URL = 'http://localhost:8080/api/board';

class BoardService {
  
  getBoardList() {
    return axios.get(API_URL + '/list', { headers: {}, params: {} });
  }

}

export default new BoardService();