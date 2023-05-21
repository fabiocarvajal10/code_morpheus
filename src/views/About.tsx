import useResponsive from '../hooks/useResponsive'
import { Center, Grid, Image, Paper, Stack, Text, Title } from '@mantine/core'
import CoderImg from '../assets/img/master_coder.svg'

import ImageCard from '../components/ImageCard'
import Content from '../content/about'

function AboutView() {
  const { isScreenSmallerThan } = useResponsive()
  return (
    <Stack mb="xl">
      <Center mb="xl">
        <Stack spacing="xs" maw={420}>
          {
            isScreenSmallerThan.md ? (
              <>
                <Title order={2} color="dark">
                  Code
                </Title>
                <Title order={2} color="dark">
                  Morpheus
                </Title>
              </>
            ): (
              <Title order={2} color="dark">
                {Content.mainTitle}
              </Title>
            )
          }
          <Title order={6} ta="right" fw="900" color='gray'>By</Title>
          <Title order={4} ta="right" color="gray">Fabio 
            {!isScreenSmallerThan.md && "Carvajal"}
          </Title>
        </Stack>
      </Center>
      <Image src={Content.mainImg} height={300} width="100%" fit="contain" withPlaceholder  />
      <Text fz={24} px="sm">
        {Content.aboutTxt1}
      </Text>
      <Text fz={24} px="sm">
        {Content.aboutTxt2}
      </Text>
      <Grid gutter={14} align='start'>
        {Content.cultureImgs.map(cultuImg => (
          <Grid.Col sm={1} md={4}>
            <ImageCard
              src={cultuImg.src} 
              height={200} 
              title={cultuImg.title}
              desc={cultuImg.desc}
            />
          </Grid.Col>
        ))}
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