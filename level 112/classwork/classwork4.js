import { firstName, lastName } from "./1.js";
import { fetchData } from "./2.js";

console.log("სახელი:", firstName);
console.log("გვარი:", lastName);

await fetchData(); fetchData('https://api.github.com/users/octocat')