
import {
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react';
import classes from './FeaturesCards.module.css';


const carddata = [
  {
    title: 'UI/UX Design',
    description:
      'Within my portfolio, UI/UX Design is the canvas where aesthetics and usability harmonize. I meticulously create and optimize user interfaces, ensuring that each design not only looks remarkable but also performs flawlessly. Let me elevate your digital presence through design.',
   
  },
  {
    title: 'Front-End Development',
    description:
      'In my portfolio, Front-End Development is where I shine. I specialize in crafting user-friendly and visually captivating web applications that leave a lasting impact. From responsive design to seamless interactions, I take your concepts and turn them into immersive digital experiences.',
   
  },
  {
    title: 'Tutoring & Training',
    description:
      "In addition to showcasing my work, I also offer Tutoring & Training services. Whether you're just starting or looking to enhance your skills, I provide personalized training programs in web development and design. Empower yourself and your team with the expertise I've gained through my portfolio journey.",
    
  },
];

const ServiceSection = () => {
  const theme = useMantineTheme;
 
  const features = carddata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      {/* <feature.icon
        style={{ width: '50 rem', height: "50 rem" }}
        stroke={2}
        color={#FABD03}
      /> */}
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      
      <Title order={2} className={classes.title} ta="center" mt={6}>
        Services
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">

        Explore my portfolio to discover how I can help you transform your 
        digital aspirations into reality

      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={60}>
        {features}
      </SimpleGrid>
    </Container>
  );
}


export default ServiceSection;