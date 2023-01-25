import React, { ErrorInfo, ReactNode } from "react";
import error_illustration from "../../assets/illustrations/error.svg";
import "./boundary.css";

interface IProps {
  children?: ReactNode;
}

interface IState {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): IState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }
  handle_refresh = () => {
    window.location.reload();
  };
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="error_boundary_container">
          <div className="error_data">
            <img
              src={error_illustration}
              className="error_illustration"
              alt="error illustration"
            />
            <h2 className="error_title">An unknown error occured.</h2>
            <h4 className="error_subtitle">Please try again</h4>
            <button className="refresh_page" onClick={this.handle_refresh}>
              Refresh
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
