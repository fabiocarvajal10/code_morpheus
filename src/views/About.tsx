import useResponsive from '../hooks/useResponsive'
import { Button, Center, Grid, Stack, Title } from '@mantine/core'
import ImageCard from '../components/ImageCard'
import Content from '../content/about'
import ResponsiveParagraph from '../components/Responsive/Paragraph'
import ResponsiveSectionTitle from '../components/Responsive/SectionTitle'
import { Link } from 'react-router-dom'

function AboutView() {
  const { isScreenSmallerThan } = useResponsive()
  return (
    <Stack mb="sm">
      <Center>
        <Stack spacing="xs" maw={420}>
          {
            isScreenSmallerThan.md ? (
              <>
                <ResponsiveSectionTitle order={4} color="dark" underline>
                  Code Morpheus
                </ResponsiveSectionTitle>
              </>
            ): (
              <ResponsiveSectionTitle order={3} color="dark" underline>
                {Content.mainTitle}
              </ResponsiveSectionTitle>
            )
          }
          { !isScreenSmallerThan.md && (
            <>
              <ResponsiveSectionTitle order={5} ta="right" fw="900" color='gray' underline>
                By
              </ResponsiveSectionTitle>
              <ResponsiveSectionTitle order={4} ta="right" color="gray" underline>Fabio 
                {!isScreenSmallerThan.md && "Carvajal"}
              </ResponsiveSectionTitle>
            </>
          )}
        </Stack>
      </Center>
      <Stack bg="#F5F5F5" py="sm">
        <ResponsiveParagraph px="sm">
          {Content.aboutTxt1}
        </ResponsiveParagraph>
        <ResponsiveParagraph px="sm">
          {Content.aboutTxt2}
        </ResponsiveParagraph>
        <ResponsiveParagraph px="sm">
          {Content.aboutTxt3}
        </ResponsiveParagraph>
        <Grid gutter={14} align='start'>
          {Content.cultureImgs.map(cultuImg => (
            <Grid.Col md={4}>
              <ImageCard
                src={cultuImg.src} 
                title={cultuImg.title}
                desc={cultuImg.desc}
              />
            </Grid.Col>
          ))}
        </Grid>
        <Center>
          <Link to="/manifesto">
            <Button size="sm" fullWidth={false}>
                Learn more about the culture
            </Button>
          </Link>
        </Center>
        <ResponsiveParagraph px="sm">
          {Content.aboutTxt4}
        </ResponsiveParagraph>
      </Stack>
    </Stack>
  )
}

export default AboutView