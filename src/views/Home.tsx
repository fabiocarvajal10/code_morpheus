import useResponsive from '../hooks/useResponsive'
import { Button, Center, Flex, Grid, Image, Stack, Title } from '@mantine/core'
import ImageCard from '../components/ImageCard'
import Content from '../content/home'
import ResponsiveParagraph from '../components/Responsive/Paragraph'
import ResponsiveSectionTitle from '../components/Responsive/SectionTitle'
import FabioImage from '../assets/img/av.jpeg'
import { Link } from 'react-router-dom'
function HomeView() {
  const { isScreenSmallerThan, isScreenLargerThan } = useResponsive()
  return (
    <Stack mb="sm">
      <Center>
        <Stack spacing="xs">          
          <ResponsiveSectionTitle order={3} color="dark" underline>
            Client-Centric Experts at Your Service
          </ResponsiveSectionTitle>
        </Stack>
      </Center>
      <Stack bg="#F5F5F5" py="sm" spacing="lg">
        <Grid px="sm" align='center'>
          <Grid.Col span={12} md={6}>
            <Title order={4} px="sm" color="violet">{Content.title1}</Title>
            <Title order={5} mb="md" px="sm" color="dark">{Content.subtitle1}</Title>
            <ResponsiveParagraph fz="md" px="sm" mb="sm">
              {Content.aboutTxt1}
            </ResponsiveParagraph>
            <ResponsiveParagraph fz="md" px="sm">
              {Content.aboutTxt2}
            </ResponsiveParagraph>
          </Grid.Col>
          <Grid.Col span={12} md={6}>
            <Center>
              <Stack>
              <Image
                src={FabioImage} 
                height={350}
                mt={isScreenSmallerThan.md ? "xl" : "auto"}
                width="30rem"
                styles={{ imageWrapper: { width: "100%", display: "flex", justifyContent: "center" }, image: { width: isScreenSmallerThan.md ? "80%" : "100%"}}}
                radius="xl"
                withPlaceholder
              />
              <Link to="/resume">
                <Title order={5} color='dark' ta="center">Fabio Carvajal</Title>
                <ResponsiveParagraph fw="bold" fz="sm" ta="center" color="gray">Lead Software Engineer</ResponsiveParagraph>
              </Link>
              </Stack>
            </Center>
          </Grid.Col>
        </Grid>
        <ResponsiveParagraph fz="lg" px="xl">
          {Content.aboutTxt3}
        </ResponsiveParagraph>
        <Center>
          <Link to="/manifesto">
            <Button size="sm" fullWidth={false}>
                Our manifesto
            </Button>
          </Link>
        </Center>
        <Stack spacing="sm">
          <ResponsiveSectionTitle ta="center" mx="sm" py="sm" order={4} color="white" bg="dark" opacity={0.8}
            style={{ borderRadius: 8}}
          >
            Practical Solutions, Empowering Customers with Results-Driven Stack
          </ResponsiveSectionTitle>
          <Flex align='start' gap='md' px="sm" justify="center" >
            {Content.stacks.map(tech => (
              <tech.Icon
                fontSize={"100"}
              />
            ))}
          </Flex>
        </Stack>
        <Stack>
          <ResponsiveSectionTitle ta="center" order={3} underline>
            Why us?
          </ResponsiveSectionTitle>
          
        </Stack>
        
      </Stack>
    </Stack>
  )
}

export default HomeView