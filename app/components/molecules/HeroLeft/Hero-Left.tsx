import Button from "../../Atom/Button/Button";
import './left.css';


const HeroLeft = () => {
  return(
    <main className="LeftCointainer">
        <span className="name-span"> Bless Ahadjie /></span>
        <p className="second-txt">I Create <span className="stack">Front-End</span> Web Applications</p>
        <p className=".last-txt">My name is  and I am a Front-end Dev.</p>
        <Button className="btn" name = "Contact Me"/>
    </main>
  ) ;
};

export default HeroLeft;
