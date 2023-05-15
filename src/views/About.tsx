import { Flex } from '@mantine/core'
import useResponsive from '../hooks/useResponsive'


function AboutView() {
  const { isScreenSmallerThan } = useResponsive()
  return (
    <Flex align="center">
      AboutV
    </Flex>
  )
}

export default AboutView