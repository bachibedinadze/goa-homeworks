function MyInfo({ myName, mySurname, myAcademy })  {
  return  (
    <div>
      <h1>სახელი: {myName}</h1>
      <h2>გვარი: {mySurname}</h2>
      <p>აკადემია: {myAcademy}</p>
    </div>
  ) ;
}

export default MyInfo