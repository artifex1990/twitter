import { API_PICTURES, API_POSTS } from '../constants/api';
import getData from './getData';

export default async function getMessages() {
  const { messages } = await getData(API_POSTS);
  const { pictures } = await getData(API_PICTURES);

  messages.map((m) => {
    const message = m;
    message.avatar = !pictures
      ? '#'
      : pictures.find((picture) => picture.user_id === message.user_id).url;

    return message;
  });

  return messages;
}
