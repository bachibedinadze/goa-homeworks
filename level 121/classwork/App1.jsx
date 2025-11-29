import Info from "./Info";

function App() {
  const logInfo = () => {
    return <p>ბაჩი ბედინაძე</p>;
  };

  return (
    <div>
      <Info logInfo={logInfo} />
    </div>
  );
}

export default App;