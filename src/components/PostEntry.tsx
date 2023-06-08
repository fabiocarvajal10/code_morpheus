import { Badge, Divider, Flex, SimpleGrid } from "@mantine/core"
import useBreakpoints from "../hooks/useResponsive"
import ResponsiveParagraph from "./Responsive/Paragraph"
import ResponsiveSectionTitle from "./Responsive/SectionTitle"

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
  const smallerThanMD = isScreenSmallerThan.md

  const handleClick = () => {
    onClick && onClick(id)
  }
  return (
    <SimpleGrid mb="sm" onClick={handleClick}>
      <Flex px={0} py="xs" gap="md" align="start">
        {!isScreenSmallerThan.md && <div>
          <Badge color="blue" px="xs" mt={4} size="xl">
            {tag}
          </Badge>
        </div>
        }
        <div style={{ overflow: "auto", width: "100%" }}>
          <Flex align="center" gap={smallerThanMD ? "xs" : "md"} mb="sm" direction={smallerThanMD ? "column" : "row"}>
            <ResponsiveSectionTitle order={smallerThanMD ? 5 : 4} color="gray" weight={500} ta="center" >
              {title}
            </ResponsiveSectionTitle>
            {!smallerThanMD && <Divider orientation="vertical" />}
            {smallerThanMD && <Divider w="100%" my={0} />}
            
            <a href={subtitleHref} target="_blank" style={{ textDecoration: "none" }}>
              <ResponsiveParagraph fw={900} color="blue">
                {subtitle}
              </ResponsiveParagraph>
            </a>
            {smallerThanMD && (
              <Badge color="blue" px="xs" mt={0} size="md">
                {tag}
              </Badge>
            )}
          </Flex>
          {summary && (
            <ResponsiveParagraph  mt="xs" align='justify' lh={1.2}>
              {summary}
            </ResponsiveParagraph>
          )}
          {children}
        </div>
      </Flex>
    </SimpleGrid>
  )

}

export default PostEntry
