import { Flex } from '@mantine/core'
import useResponsive from '../hooks/useResponsive'


function PostsView() {
  const { isScreenSmallerThan } = useResponsive()
  return (
    <Flex align="center">
      Posts
    </Flex>
  )
}

export default PostsView