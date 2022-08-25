//error boundary
import { ErrorBoundary } from 'react-error-boundary';
//error boundary fallback
import ErrorBoundaryFallback from './ts/generic/ErrorBoundaryFallback';
//components
import { Outlet } from 'react-router-dom';
import Header from '@/ts/containers/header/Header';

const App = () => (
  <ErrorBoundary
    FallbackComponent={ErrorBoundaryFallback}
    onReset={() => {
      //Reset the state of your app so the error doesn't happen again
      console.log('Try again clicked');
    }}
  >
    <Header />
    <Outlet />
  </ErrorBoundary>
);

export default App;
