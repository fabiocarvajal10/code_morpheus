import { AspectRatio, Container, Image, Paper, Text } from "@mantine/core"
import ResponsiveSectionTitle from "./Responsive/SectionTitle"
import ResponsiveParagraph from "./Responsive/Paragraph"

interface ImageCardProps {
  src: string
  title: string
  desc: string
}

function ImageCard({ src, title, desc }: ImageCardProps) {
  return (
    <Container>
      <Paper withBorder shadow='md' py="md">
        <AspectRatio ratio={16 / 9}>
        <Image src={src} fit="contain" />
        </AspectRatio>
      </Paper>
      <ResponsiveSectionTitle ta="center" color="dark" order={5} mt="sm">
        {title}
      </ResponsiveSectionTitle>
      <ResponsiveParagraph fz={22} ta="center">{desc}</ResponsiveParagraph>
    </Container>
  )
}

export default ImageCard