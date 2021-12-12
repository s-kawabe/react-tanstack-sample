import { Route, ReactLocation } from 'react-location'
import { RootPage } from 'src/components/main/RootPage'
import { PostDetailPage } from 'src/components/main/PostDetailPage'
import { PostListPage } from 'src/components/main/PostListPage'
// import type { Post } from 'src/types';

export const location = new ReactLocation()

export const routes: Route[] = [
  {
    path: '/',
    element: <RootPage />,
  },
  {
    path: 'posts',
    children: [
      {
        path: '/',
        element: <PostListPage />,
      },
      {
        path: ':postId',
        element: <PostDetailPage />,
      },
    ],
  },
];