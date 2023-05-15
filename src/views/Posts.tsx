import { Flex } from '@mantine/core'
import useResponsive from '../hooks/useResponsive'
import WIP from '../components/WIP'


function PostsView() {
  const { isScreenSmallerThan } = useResponsive()
  return (
    <WIP/>
  )
}

export default PostsView