const my_hello_world: string = "Bonjour TypeScript!";
const my_div: HTMLHeadingElement = document.createElement("div");
const my_title: HTMLHeadingElement = document.createElement("h1");
my_div.appendChild(my_title);
my_title.textContent = my_hello_world
document.body.appendChild(my_div);
