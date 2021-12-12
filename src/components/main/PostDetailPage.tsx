import { useQuery } from 'react-query'
import { fetchPostById } from 'src/lib/fetcher/apiPosts'
import { useEffect, useState, VFC } from 'react';
import { useMatch } from 'react-location';
import CircularProgress from '@mui/material/CircularProgress';
import { Post } from 'src/types';

export const PostDetailPage: VFC = () => {
  const { postId } = useMatch().params;
  const [post, setPost] = useState<Post>();
  const { isLoading, isError, data } = useQuery('postGet', () => fetchPostById(postId))

  useEffect(() => {
    if(!isLoading && data) {
      setPost(data)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  if (isLoading) return <CircularProgress />;

  if(isError) return <h3>sorry, happend some error :(</h3>
  
  if (!post) return <h3>sorry, not found posts :(</h3>;

  return (
    <div>
      <h1>{post.title}</h1>
      <div>{post.body}</div>
    </div>
  );
};