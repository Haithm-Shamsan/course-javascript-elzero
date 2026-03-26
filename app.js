import {} from "node-fetch";

let MyData = await new fetch("https://api.github.com/users/qrkg/repos").then(
  (resolve, reject) => {
    return resolve;
  }
);
console.log(MyData);
