import { Image, Stack } from "@mantine/core"
import NotFoundImg from '../assets/img/not_found.svg'
import ResponsiveSectionTitle from "../components/Responsive/SectionTitle"

function NotFoundView() {
  return (
    <Stack>
      <Image src={NotFoundImg} height={300} width="100%" fit="contain" withPlaceholder  />
      <ResponsiveSectionTitle>
        Page not found
      </ResponsiveSectionTitle>
    </Stack>
  )
}

export default NotFoundView