'use_client';
import axios from 'axios';

export default async function Login(email, pwd) {
  if (!email || !pwd) {
    return;
  }
  const url = process.env.SERVER_URL;
  console.log(url);

  //   axios({
  //     method: 'post',
  //     url: process.env.SERVER_URL,
  //     data: {
  //       email,
  //       pwd
  //     }
  //   });
}
