import { Flex } from '@mantine/core'
import useResponsive from '../hooks/useResponsive'


function PortfolioView() {
  const { isScreenSmallerThan } = useResponsive()
  return (
    <Flex align="center">
      Portfolio
    </Flex>
  )
}

export default PortfolioView