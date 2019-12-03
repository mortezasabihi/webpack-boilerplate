import "./header.scss";

class Header {
  cssClass = "header";

  render(title) {
    const h1 = document.createElement("h1");
    h1.innerHTML = title;
    h1.classList.add(this.cssClass);
    document.querySelector("body").appendChild(h1);
  }
}

export default Header;
