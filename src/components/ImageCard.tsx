import { AspectRatio, Container, Image, Paper, Text } from "@mantine/core"
import ResponsiveSectionTitle from "./Responsive/SectionTitle"
import ResponsiveParagraph from "./Responsive/Paragraph"
import useResponsive from "../hooks/useResponsive"

interface ImageCardProps {
  src: string
  title: string
  desc: string
}

function ImageCard({ src, title, desc }: ImageCardProps) {
  const { isScreenSmallerThan } = useResponsive()
  const smallerThanXS = isScreenSmallerThan.xs

  return (
    <Container>
      <Paper withBorder shadow='md' py="md">
        <AspectRatio ratio={16 / 9}>
        <Image src={src} fit="contain" />
        </AspectRatio>
      </Paper>
      <ResponsiveSectionTitle ta="center" color="dark" order={smallerThanXS ? 6 : 5} mt="sm">
        {title}
      </ResponsiveSectionTitle>
      <ResponsiveParagraph ta="center">{desc}</ResponsiveParagraph>
    </Container>
  )
}

export default ImageCard