import useResponsive from '../hooks/useResponsive'
import { Center, Grid, Image, Paper, Stack, Text, Title } from '@mantine/core'
import CoderImg from '../assets/img/master_coder.svg'
import FitnessImg from '../assets/img/fitness.svg'
import EngineeringImg from '../assets/img/engineering_team.svg'
import CollaborationImg from '../assets/img/collaboration.svg'
import ImageCard from '../components/ImageCard'
import Content from '../content/about'

function AboutView() {
  const { isScreenSmallerThan } = useResponsive()
  return (
    <Stack mb="xl">
      <Center mb="xl">
        <Stack spacing="xs" maw={420}>
          <Title order={2} color="dark">
            {Content.mainTitle}
          </Title>
          <Title order={6} ta="right" fw="900" color='gray'>By</Title>
          <Title order={4} ta="right" color="gray">Fabio Carvajal</Title>
        </Stack>
      </Center>
      <Image src={CoderImg} height={300} width="100%" fit="contain" withPlaceholder  />
      <Text fz={24} px="sm">
        {Content.aboutTxt1}
      </Text>
      <Text fz={24} px="sm">
        {Content.aboutTxt2}
      </Text>
      <Grid gutter={14} align='start'>
        <Grid.Col span={4}>
          <ImageCard
            src={EngineeringImg} 
            height={200} 
            title="Communication" 
            desc="Navigating Uncertainty in Projects." 
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <ImageCard
            src={FitnessImg} 
            height={200} 
            title="Physical Health" 
            desc="Fuel for Consistent Excellence." 
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <ImageCard
            src={CollaborationImg} 
            height={200} 
            title="Ownership and Accountability" 
            desc="Catalysts for Innovation." 
          />
        </Grid.Col>
      </Grid>
      <Text fz={24} px="sm">
        {Content.aboutTxt3}
      </Text>
      <Text fz={24} px="sm">
      {Content.aboutTxt4}
      </Text>
    </Stack>
  )
}

export default AboutView