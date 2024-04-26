import axios from 'axios';

async function postUserInfo(data) {
  const response = await axios.post(
    'https://portfolio-js.b.goit.study/api/requests',
    data
  );
  return response;
}

export default postUserInfo;
