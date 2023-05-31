import { Image } from "@mantine/core"
import NotFoundImg from '../assets/img/not_found.svg'

function NotFoundView() {
  return (
    <Image src={NotFoundImg} height={300} width="100%" fit="contain" withPlaceholder  />
  )
}

export default NotFoundView