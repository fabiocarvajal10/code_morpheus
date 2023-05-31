import useResponsive from '../hooks/useResponsive'
import { Center, Grid, Image, Paper, Stack, Text, Title } from '@mantine/core'
import ImageCard from '../components/ImageCard'
import Content from '../content/about'
import ResponsiveParagraph from '../components/Responsive/Paragraph'

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
                <Title order={2} color="dark" underline>
                  Morpheus
                </Title>
              </>
            ): (
              <Title order={2} color="dark" underline>
                {Content.mainTitle}
              </Title>
            )
          }
          <Title order={6} ta="right" fw="900" color='gray'>By</Title>
          <Title order={4} ta="right" color="gray" underline>Fabio 
            {!isScreenSmallerThan.md && "Carvajal"}
          </Title>
        </Stack>
      </Center>
      <Image src={Content.mainImg} height={300} width="100%" fit="contain" withPlaceholder  />
      <ResponsiveParagraph fz={32} px="sm">
        {Content.aboutTxt1}
      </ResponsiveParagraph>
      <ResponsiveParagraph fz={32} px="sm">
        {Content.aboutTxt2}
      </ResponsiveParagraph>
      <Grid gutter={14} align='start'>
        {Content.cultureImgs.map(cultuImg => (
          <Grid.Col md={4}>
            <ImageCard
              src={cultuImg.src} 
              height={200} 
              title={cultuImg.title}
              desc={cultuImg.desc}
            />
          </Grid.Col>
        ))}
      </Grid>
      <ResponsiveParagraph fz={32} px="sm">
        {Content.aboutTxt3}
      </ResponsiveParagraph>
      <ResponsiveParagraph fz={32} px="sm">
        {Content.aboutTxt4}
      </ResponsiveParagraph>
    </Stack>
  )
}

export default AboutView