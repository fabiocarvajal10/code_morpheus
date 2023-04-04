import { Badge, Flex, List, SimpleGrid, Text, Title } from "@mantine/core"

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
  const handleClick = () => {
    onClick && onClick(id)
  }
  return (
    <SimpleGrid mb="sm" onClick={handleClick}>
      <Flex px="md" py="xs" gap="md" align="start">
        <div>
          <Badge color="blue" px="xs" mt={10} size="lg">
            {tag}
          </Badge>
        </div>
        <div style={{ overflow: "auto" }}>
          <Title order={5} color="gray" weight={900}>
            {title}
          </Title>
          <a href={subtitleHref} target="_blank">
            <Text size="md" color="gray" weight={600} ff="Nunito Sans">
              {subtitle}
            </Text>
          </a>
          {summary && (
            <Text mt="xs" align='justify' lh={1.2}>
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
