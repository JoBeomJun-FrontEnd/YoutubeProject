import axios from 'axios';

export default class FakeYoutubeClient {
  async search() {
    return axios.get('/data/bts.json');
  }

  async videos() {
    return axios.get('/data/hotTrand.json');
  }
}
