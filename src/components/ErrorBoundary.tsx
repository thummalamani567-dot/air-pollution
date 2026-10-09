import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('AirCare Application Error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#030d0a] text-white flex items-center justify-center p-6 text-center">
          <div className="max-w-md bg-[#07160F] border border-emerald-500/30 rounded-2xl p-8 shadow-2xl">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 text-3xl font-bold">
              🌱
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">AirCare</h1>
            <p className="text-gray-300 text-sm mb-6">
              Something went wrong while loading the page. Please reload to continue.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-[#00e599] text-black font-semibold rounded-full hover:shadow-lg hover:shadow-emerald-500/20 transition-all cursor-pointer"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
