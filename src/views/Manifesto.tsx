import { Flex } from '@mantine/core'
import useResponsive from '../hooks/useResponsive'


function ManifestoView() {
  const { isScreenSmallerThan } = useResponsive()
  return (
    <Flex align="center">
      Manifesto
    </Flex>
  )
}

export default ManifestoView