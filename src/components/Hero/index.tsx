import "./Hero.css";

export default function Hero() {
  const title = document.querySelector(".title");

  document.addEventListener("scroll", () => {
    let value = window.scrollY;
    //   title && title.className`${value}px`;
  });

  return (
    <div className="home">
      <img src="hero/mount2.png" className="mount2" />
      <img src="hero/mount1.png" className="mount1" />
      <img src="hero/bush2.png" className="bush2" />

      <h1 className="title">Hi, I'm Youngwoo</h1>

      <img src="hero/bush1.png" className="bush1" />
      <img src="hero/leaf2.png" className="leaf2" />
      <img src="hero/leaf1.png" className="leaf1" />
    </div>
  );
}
