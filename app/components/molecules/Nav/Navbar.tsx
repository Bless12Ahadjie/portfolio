import Link from "next/link";
import Button from "../../Atom/Button/Button";
import Logo from "../../Atom/Logo/Logo";
import './Navbar.css'

const Navbar = () =>{
    const container = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100vw",
        maxWidth:"75rem",
        height:'5rem',
        padding: "1rem 4rem"
    }
    return (
        <main style={container}>
        <Logo/>
     <nav >
      <Link className="li" href="/">Home</Link>
      <Link className="li"  href="/about">About Me</Link>
      <Link className="li" href="/services">Services</Link>
      <Link  className="li" href="/blog">Blog</Link>
      </nav>
      <Button className="btn" name="Contact Me"/>

        </main>
    );
}

export default Navbar;