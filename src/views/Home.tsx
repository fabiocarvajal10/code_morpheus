import useResponsive from '../hooks/useResponsive'
import { Center, Grid, Image, Stack } from '@mantine/core'
import ImageCard from '../components/ImageCard'
import Content from '../content/about'
import ResponsiveParagraph from '../components/Responsive/Paragraph'
import ResponsiveSectionTitle from '../components/Responsive/SectionTitle'

function HomeView() {
  const { isScreenSmallerThan, isScreenLargerThan } = useResponsive()
  return (
    <Stack mb="sm">
      <Center>
        <Stack spacing="xs" maw={420}>          
          <ResponsiveSectionTitle order={3} color="dark" underline>
            Fabio Carvajal
          </ResponsiveSectionTitle>
        </Stack>
      </Center>
      <Stack bg="#F5F5F5" py="sm" spacing="xl">
        <Grid px="sm">
          <Grid.Col span={12} md={6}>
            <ResponsiveParagraph px="sm">
              {Content.aboutTxt1}
            </ResponsiveParagraph>
          </Grid.Col>
          <Grid.Col span={12} md={6}>
            <Image src={Content.mainImg} fit='contain'/>
          </Grid.Col>
        </Grid>
        
        <ResponsiveParagraph px="sm">
          {Content.aboutTxt2}
        </ResponsiveParagraph>

        <Grid gutter={14} align='start'>
          {Content.cultureImgs.map(cultuImg => (
            <Grid.Col md={4} px={isScreenSmallerThan.md && isScreenLargerThan.xs ? 100 : "auto"}>
              <ImageCard
                src={cultuImg.src} 
                title={cultuImg.title}
                desc={cultuImg.desc}
              />
            </Grid.Col>
          ))}
        </Grid>
        <ResponsiveSectionTitle ta="center" order={3} underline>
          Tech Stacks
        </ResponsiveSectionTitle>
        <ResponsiveSectionTitle ta="center" order={3} underline>
          Companies
        </ResponsiveSectionTitle>
        <ResponsiveSectionTitle ta="center" order={3} underline>
          Domains
        </ResponsiveSectionTitle>
        <ResponsiveSectionTitle ta="center" order={3} underline>
          QA
        </ResponsiveSectionTitle>
      </Stack>
    </Stack>
  )
}

export default HomeView