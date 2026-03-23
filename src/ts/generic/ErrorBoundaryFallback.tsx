import { FallbackProps } from 'react-error-boundary';

const ErrorBoundaryFallback = ({ error, resetErrorBoundary }: FallbackProps) => (
  <div>
    <h3>Something went wrong:</h3>
    <pre>{error instanceof Error ? error.message : String(error)}</pre>
    <button onClick={resetErrorBoundary}>Try Again</button>
  </div>
);

export default ErrorBoundaryFallback;
