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
  const { isScreenSmallerThan, isScreenLargerThan } = useBreakpoints()

  const handleClick = () => {
    onClick && onClick(id)
  }
  return (
    <SimpleGrid mb="sm" onClick={handleClick}>
      <Flex px="md" py="xs" gap="md" align="start">
        {!isScreenSmallerThan.md && <div>
          <Badge color="blue" px="xs" mt={10} size="lg">
            {tag}
          </Badge>
        </div>
        }
        <div style={{ overflow: "auto", width: "100%" }}>
          <Flex align="center" gap={isScreenSmallerThan.md ? "xs" : "md"} mb="sm" direction={isScreenSmallerThan.md ? "column" : "row"}>
            <Title order={4} color="gray" weight={500} ta="center" >
              {title}
            </Title>
            {!isScreenSmallerThan.md && <Divider orientation="vertical" />}
            {isScreenSmallerThan.md && <Divider w="100%" my={0} />}
            
            <a href={subtitleHref} target="_blank" style={{ textDecoration: "none" }}>
              <Text fz={28} fw={900} color="blue">
                {subtitle}
              </Text>
            </a>
            {isScreenSmallerThan.md && (
              <Badge color="blue" px="xs" mt={10} size="lg">
                {tag}
              </Badge>
            )}
          </Flex>
          {summary && (
            <Text mt="xs" size="xl" align='justify' lh={1.2}>
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
