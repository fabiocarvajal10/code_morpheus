import { Container, Image, Paper, Text, Title } from "@mantine/core"

interface ImageCardProps {
  src: string
  height: number
  title: string
  desc: string
}

function ImageCard({ src, height, title, desc }: ImageCardProps) {
  return (
    <Container>
      <Paper withBorder shadow='md' py="md">
        <Image src={src} height={height} fit="contain" />
      </Paper>
      <Title ta="center" color="dark" order={5} mt="sm">
        {title}
      </Title>
      <Text fz={22} ta="center">{desc}</Text>
    </Container>
  )
}

export default ImageCard