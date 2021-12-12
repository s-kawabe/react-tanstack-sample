import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import type { VFC } from "react";
import { Router, Outlet, Link } from 'react-location'
import { routes, location } from 'src/Router'

export const App: VFC = () => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Router routes={routes} location={location}>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="posts">Posts</Link>
            </li>
          </ul>
        </div>
        <Outlet />
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}