import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
// import { IconCheck } from '@tabler/icons-react';
import image from '../../../../public/assets/dp.jpg';
import classes from './HeroBullets.module.css';

export function HeroBullets() {
  const name: string = "<Bless Ahadjie />"

  return (
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
  );
}