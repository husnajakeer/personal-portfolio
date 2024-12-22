import '../styles/navbar.css';

function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#interests">Interests</a></li>
          <li><a href="#timeline">Timeline</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="dotted-line"></div>
    </>
  );
}

export default Navbar;
