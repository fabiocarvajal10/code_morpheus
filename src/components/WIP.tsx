import { Center, Image, Stack, Title } from "@mantine/core"
import ProgrammingImage from '../assets/img/programming.svg' 
function WIP() {
  return (
    <Stack spacing="md" mt="sm">
      <Image src={ProgrammingImage} />
      <Center>
        <Title order={3} ta="center" color="violet">This page is under construction</Title>
      </Center>
    </Stack>
  )
}

export default WIP