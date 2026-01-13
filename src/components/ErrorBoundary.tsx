import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="container py-5 text-center text-white">
          <div className="card bg-danger text-white shadow p-5">
            <h1 className="display-4"><i className="bi bi-exclamation-triangle-fill"></i></h1>
            <h2>Oops, something went wrong.</h2>
            <p className="lead">We're sorry for the inconvenience. Please refresh the page to try again.</p>
            {this.state.error && (
              <details className="mt-3 text-start bg-dark p-3 rounded">
                <summary>Error Details</summary>
                <pre className="mt-2 text-warning">{this.state.error.message}</pre>
              </details>
            )}
            <button 
              className="btn btn-light mt-4 fw-bold"
              onClick={() => window.location.reload()}
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
