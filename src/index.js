import Header from "./components/header/Header";
import WebpackImage from "./assets/images/webpack.png";
import "./assets/styles/main.scss";

const header = new Header();
header.render("Webpack 4 boilerplate");

const img = document.createElement("img");
img.src = WebpackImage;
img.alt = "webpack image";
document.querySelector("body").appendChild(img);
