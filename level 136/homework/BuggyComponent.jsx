function BuggyComponent({ crash }) {
  if (crash) {
    throw new Error("Component crashed!");
  }

  return <h2>Everything is fine </h2>;
}

export default BuggyComponent;