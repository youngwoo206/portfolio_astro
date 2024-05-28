import "./Nav.css";
import resume from "../assets/YoungwooLeeFE.pdf";

export default function Nav() {
  return (
    <div style={{ position: "fixed", zIndex: 100 }}>
      <div className="nav">
        <div className="nav-body">
          <a className="resume-btn" href={resume} download="YoungwooLeeFE.pdf">
            Resume
          </a>

          <div className="links-div">
            <a href="/" className="nav-link">
              Home
            </a>
            <a href="/blog" className="nav-link">
              Blog
            </a>
            <a href="/post" className="nav-link">
              Post
            </a>
          </div>
        </div>
      </div>
      <div className="scroll-watcher" />
    </div>
  );
}
