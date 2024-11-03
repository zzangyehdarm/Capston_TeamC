

import axios from 'axios';

const testGet = async () => {
    await axios.get(`https://0dbf00cc-14b7-4093-839f-3d59b65c48d3.mock.pstmn.io/`).then((res) => {
      console.log(res.data[2].title);
    })
    .catch(console.log("hello"));
  };

  export default testGet;