function RandomList() {
  const random = Math.random();
  const secondRandom = Math.random();

  const listItems = [];

  if (random > 0.5) {
    listItems.push(<li key="1">This is a random item</li>);
  }


  const secondText = secondRandom > 0.5 ? "hello" : "goodbye";
  listItems.push(<li key="2">{secondText}</li>);

  return <ul>{listItems}</ul>;
}

export default RandomList;