import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import type { VFC } from "react";
import { Router, Outlet } from 'react-location'
import { routes, location } from 'src/Router'
import { HeaderNavigation } from 'src/components/HeaderNavigation';


export const App: VFC = () => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Router routes={routes} location={location}>
        <HeaderNavigation />
        <Outlet />
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}