import Round from "../../Atom/Radial/Round";
import HeroLeft from "../../molecules/HeroLeft/Hero-Left";
import HeroRight from "../../molecules/Heroright/Hero-Right";
import Online from "../../molecules/onine/Online";

const Hero  = () => {
  const stylesMain ={
    display: "flex",
    height: "calc(100vh - 4rem)",
    width: "100vw",
    maxWidth: "75rem",
    margin: "4rem auto 0 auto",
    overflow: "hidden",
    justifyContent:"center",
    aligntems: "center",
    alignSelf: "stretch"

  }
  return (
  <>
    <Round/>
    <main style={stylesMain} className="Hero-wrapper">
        <HeroLeft/>
        <HeroRight/>
    </main>
    <Online/>
  </>
  );
};

export default Hero;
