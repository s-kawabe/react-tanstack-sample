import axios from 'axios';
import type { Post } from '../../types';

export async function fetchPostList() {
  // mock communication time
  await new Promise((r) => setTimeout(r, 1000));

  return await axios
    .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
    .then((r) => r.data.slice(0, 10))
    .catch((e) => Promise.reject(new Error(e)))
}

export async function fetchPostById(postId: string) {
  // mock communication time
  await new Promise((r) => setTimeout(r, 1000));

  return await axios
    .get<Post>(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((r) => r.data)
    .catch((e) => Promise.reject(new Error(e)))
}