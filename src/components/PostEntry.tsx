import { Badge, Divider, Flex, List, SimpleGrid, Text, Title } from "@mantine/core"
import useBreakpoints from "../hooks/useResponsive"

interface PostEntryProps {
  id: string
  children?: React.ReactNode
  title: string
  subtitle: string
  subtitleHref: string
  summary?: string
  tag: string
  onClick?: (id: string) => void
}

function PostEntry({
  id,
  children,
  title,
  subtitle,
  subtitleHref,
  summary,
  tag,
  onClick,
}: PostEntryProps) {
  const { isScreenSmallerThan } = useBreakpoints()
  const smallerThanXS = isScreenSmallerThan.xs
  const smallerThanMD = isScreenSmallerThan.md
  const ta = smallerThanXS ? 'center' : 'left'
  const taDesc = smallerThanXS ? 'right' : 'left'

  const handleClick = () => {
    onClick && onClick(id)
  }
  return (
    <SimpleGrid mb="sm" onClick={handleClick}>
      <Flex px={0} py="xs" gap="md" align="start">
        {!isScreenSmallerThan.md && <div>
          <Badge color="blue" px="xs" mt={10} size="lg">
            {tag}
          </Badge>
        </div>
        }
        <div style={{ overflow: "auto", width: "100%" }}>
          <Flex align="center" gap={smallerThanMD ? "xs" : "md"} mb="sm" direction={smallerThanMD ? "column" : "row"}>
            <Title order={4} color="gray" weight={500} ta="center" >
              {title}
            </Title>
            {!smallerThanXS && <Divider orientation="vertical" />}
            {smallerThanXS && <Divider w="100%" my={0} />}
            
            <a href={subtitleHref} target="_blank" style={{ textDecoration: "none" }}>
              <Text fz={28} fw={900} color="blue">
                {subtitle}
              </Text>
            </a>
            {smallerThanMD && (
              <Badge color="blue" px="xs" mt={10} size="lg">
                {tag}
              </Badge>
            )}
          </Flex>
          {summary && (
            <Text mt="xs" size="xl" align='justify' ta={taDesc} lh={1.2}>
              {summary}
            </Text>
          )}
          {children}
        </div>
      </Flex>
    </SimpleGrid>
  )

}

export default PostEntry
