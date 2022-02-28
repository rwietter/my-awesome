import { ErrorBoundary } from 'react-error-boundary';

export function ErrorFallback({ error, resetErrorBoundary }: any) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary} type="button">Try again</button>
    </div>
  );
}
