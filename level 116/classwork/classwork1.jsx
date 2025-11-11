function App() {
  const interests = ["Programming", "Music", "Travel", "Reading"];

  return (
    <ul>
      {interests.map((interest) => (
        <li key={interest}>{interest}</li>
      ))}
    </ul>
  );
}

export default App;