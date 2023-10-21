import Round from "../../Atom/Radial/Round";
import HeroLeft from "../../molecules/HeroLeft/Hero-Left";
import HeroRight from "../../molecules/Heroright/Hero-Right";
import Online from "../../molecules/onine/Online";
import { Image, Container, Title, Button, Group, Text} from '@mantine/core';
// import { IconCheck } from '@tabler/icons-react';
import image from '../../../../public/assets/dp.jpg';
import classes from './HeroBullets.module.css';

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

  const name: string = "<Bless Ahadjie />"

  
  return (
  <>
    <Round/>
    <main style={stylesMain} className="Hero-wrapper">
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <span className={classes.name}> {name} </span>
          <Title className={classes.title}>
            I Create <span className={classes.stack}>Front-End</span> Web Applications
          </Title>
          <Text c="dimmed" mt="md">
          As a forward-thinking creator, I am actively sculpting the digital terrain. 
          My expertise lies in breathing life into captivating Front-End Web Applications, 
          where each click narrates a unique tale
          </Text>


        

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control1}>
              Contact Me
            </Button>
            <Button variant="default" radius="xl" size="md" className={classes.control}>
              Download CV
            </Button>
          </Group>
        </div>
        <Image src={image.src} className={classes.image} />
      </div>
    </Container>
    </main>
    <Online/>
  </>
  );
};

export default Hero;
