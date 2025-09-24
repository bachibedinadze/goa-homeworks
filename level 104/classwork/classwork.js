class Bank {
  constructor(username) {
    this.username = username;   // მომხმარებლის სახელი
    this.balance = 0;           // საწყისი ბალანსი
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;   // დავამატოთ თანხა
      console.log(`${this.username}-ის ახალი ბალანსია: ${this.balance} ₾`);
    } else {
      console.log("გთხოვ, შეიყვანე დადებითი თანხა!");
    }
  }
}

// ობიექტის შექმნა
let user1 = new Bank("გიორგი");

// მეთოდის გამოძახება
user1.deposit(100); // გიორგი-ს ახალი ბალანსია: 100 ₾
user1.deposit(50);  // გიორგი-ს ახალი ბალანსია: 150 ₾