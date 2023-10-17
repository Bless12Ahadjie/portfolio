import Button from "../../Atom/Button/Button";
import './left.css';


const HeroLeft = () => {
    const btnStyle ={
        marginTop: "2rem"
    }
  return(
    <main className="LeftCointainer">
        <span className="name-span"> Bless Ahadjie /> </span>
        <p className="second-txt">I Create <span className="stack">Front-End</span> Web Applications</p>
        <p className=".last-txt">As a forward-thinking creator, I am actively sculpting the digital terrain. My expertise lies in breathing life into captivating Front-End Web Applications, where each click narrates a unique tale</p>
        <Button  style={btnStyle}className="btn" name = "Contact Me"/>
    </main>
  ) ;
};

export default HeroLeft;
