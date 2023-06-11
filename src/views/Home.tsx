import useResponsive from '../hooks/useResponsive'
import { Button, Center, Flex, Grid, Image, Stack, Title } from '@mantine/core'
import Content from '../content/home'
import ResponsiveParagraph from '../components/Responsive/Paragraph'
import ResponsiveSectionTitle from '../components/Responsive/SectionTitle'
import FabioImage from '../assets/img/av.jpeg'
import { Link } from 'react-router-dom'
import PointList from '../components/PointList'
import CentralCTA from '../components/CentralCTA'
import { contactLink } from '../constants'
function HomeView() {
  const { isScreenSmallerThan } = useResponsive()
  return (
    <Stack mb="xl">
      <Center>
        <Stack spacing="xs">          
          <ResponsiveSectionTitle order={3} color="dark" underline>
            Client-Centric Experts at Your Service
          </ResponsiveSectionTitle>
          <ResponsiveSectionTitle  ta="center" order={4} underline>
            Write Less. Do More
          </ResponsiveSectionTitle>
        </Stack>
      </Center>
      <Stack bg="#F5F5F5" py="sm" spacing="lg">
        <Grid px="sm" align='center'>
          <Grid.Col span={12} md={6}>
            <Title order={4} px="sm" color="violet">{Content.title1}</Title>
            <Title order={5} mb="md" px="sm" color="dark">{Content.subtitle1}</Title>
            <ResponsiveParagraph fz="md" px="sm" mb="sm">
            In the fast-paced world of software engineering, it's crucial to assemble a team that is not only highly skilled but also laser-focused on <strong>delivering tangible results.</strong> As an experienced leader in the field, I have a proven track record of curating teams comprised of top-notch talent who <strong>prioritize productivity over frivolous experimentation.</strong> In other words <strong>"Maximizing Efficiency for Optimal Business Success"</strong>
            </ResponsiveParagraph>
            <ResponsiveParagraph fz="md" px="sm">
            We believe in efficiency and driving your business forward. Our approach is straightforward: <strong>we don't get caught up in fancy development playgrounds</strong> or wasting time on tools that don't directly contribute to your bottom line. Instead, <strong>we're here to make you money and achieve your goals swiftly.</strong>
            </ResponsiveParagraph>
          </Grid.Col>
          <Grid.Col span={12} md={6}>
            <Center>
              <Stack>
                <Link to="/resume">
                <Image
                  src={FabioImage} 
                  height={350}
                  mt={isScreenSmallerThan.md ? "xl" : "auto"}
                  width={isScreenSmallerThan.xs ? "15rem" : isScreenSmallerThan.sm ? "20rem" : "30rem"}
                  styles={{ imageWrapper: { width: "100%", display: "flex", justifyContent: "center" }, image: { width: isScreenSmallerThan.md ? "80%" : "100%"}}}
                  radius="xl"
                  withPlaceholder
                />
                </Link>
                <Link to="/resume">
                  <Title order={5} color='dark' ta="center">Fabio Carvajal</Title>
                  <ResponsiveParagraph fw="bold" fz="sm" ta="center" color="gray">Lead Software Engineer</ResponsiveParagraph>
                </Link>
              </Stack>
            </Center>
          </Grid.Col>
        </Grid>
        <ResponsiveParagraph fz="md" px="xl">
        If you're seeking a team that is dedicated to understanding your business, prioritizing your goals, and  <strong>delivering pragmatic solutions</strong>, we are here for you. <Link to="/manifesto"><strong>Let us show you how our client-centric approach</strong></Link>, combined with our technical expertise, can propel your business forward. 
        </ResponsiveParagraph>
        <CentralCTA link="/manifesto">
          Our Manifesto
        </CentralCTA>
        <Stack spacing="sm">
          <ResponsiveSectionTitle ta="center" mx="sm" py="sm" order={4} color="white" bg="dark" opacity={0.8}
            style={{ borderRadius: 8}}
          >
            Practical Solutions, Empowering Customers with Results-Driven Stack
          </ResponsiveSectionTitle>
          <Flex align='start' gap='md' px="xl" justify="space-between" wrap={isScreenSmallerThan.xs ? "wrap" : "nowrap"}>
            {Content.stacks.map(tech => (
              <tech.Icon
                fontSize={"100"}
              />
            ))}
          </Flex>
        </Stack>
        <Stack spacing="xl" mx="xl" mb="xl">
          <PointList
            title='Why us?'
            points={Content.whyPoints}
          />
          <CentralCTA link="/about">
            About Us
          </CentralCTA>
          <PointList
            title='Are You a Match?'
            points={Content.isAMatch}
          />
          <CentralCTA link={contactLink}>
            Reach out
          </CentralCTA>
        </Stack>
        
      </Stack>
    </Stack>
  )
}

export default HomeView