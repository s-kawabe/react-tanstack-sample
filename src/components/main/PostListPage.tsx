import { useQuery } from 'react-query'
import { fetchPostList } from 'src/lib/fetcher/apiPosts'
import { useEffect, useState, VFC } from 'react';
import { Link } from 'react-location';
import CircularProgress from '@mui/material/CircularProgress';
import type { Post } from 'src/types';

export const PostListPage: VFC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const { isLoading, isError, data } = useQuery('postList', fetchPostList)

  useEffect(() => {
    if(!isLoading && data)
    setPosts(data)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  if (isLoading) return <CircularProgress />;

  if(isError) return <h3>sorry, happend some error :(</h3>
  
  if (!posts || posts.length === 0) return <h3>sorry, not found posts :(</h3>;

  return (
    <div>
      <h1>post一覧</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};