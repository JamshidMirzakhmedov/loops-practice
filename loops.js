for (let i; i < 10; i++) {
  console.log(i);
}

const users = ["Mac", "Anna", "John"];

for (const user of users) {
  console.log(user);
}

const loggedInUser = {
  name: "Max",
  age: 32,
  isAdmine: true,
};

for (const propertyName in loggedInUser) {
  console.log(propertyName);
}
