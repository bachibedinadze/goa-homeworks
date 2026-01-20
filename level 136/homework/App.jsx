import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import BuggyComponent from "./BuggyComponent";
import ErrorFallback from "./ErrorFallback";

function App() {
  const [crash, setCrash] = useState(false);

  return (
    <div>
      <h1>Error Boundary Demo</h1>

      <button onClick={() => setCrash(true)}>
        Crash component
      </button>

      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => setCrash(false)}
      >
        <BuggyComponent crash={crash} />
      </ErrorBoundary>
    </div>
  );
}

export default App;