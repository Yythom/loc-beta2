import { memo } from 'react'
import { ErrorBoundary as Origin } from 'react-error-boundary'

function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div role="alert">
            <p style={{ color: '#ddd' }}>Something went wrong:</p>
            <pre style={{ color: 'red' }}>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    )
}
const myErrorHandler = (error, info) => {
    console.log({
        error,
        info,
    }, 'error');
    // Do something with the error
    // E.g. log to an error logging client here
}

const ErrorBoundary = memo((props) => (
    <Origin FallbackComponent={ErrorFallback} onError={myErrorHandler}>
        {props.children}
    </Origin>
))

export default ErrorBoundary