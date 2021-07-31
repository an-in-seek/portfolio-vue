import axios from 'axios';

const API_URL = 'localhost/api/board';

class BoardService {
  
  getBoardList() {
    return axios.get(API_URL + '/list', { headers: {}, params: {} });
  }

}

export default new BoardService();