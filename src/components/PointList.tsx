import { Stack } from "@mantine/core"
import ResponsiveSectionTitle from "./Responsive/SectionTitle"
import ResponsiveParagraph from './Responsive/Paragraph'

interface PointItem {
  title: string
  desc: string
}

interface PointListProps {
  title: string
  points: PointItem[]
}

function PointList({
  title,
  points
}: PointListProps) {
  return (
    <Stack spacing="sm">
      <ResponsiveSectionTitle mb="xs" order={3} underline>
        {title}
      </ResponsiveSectionTitle>
      {points.map(point => (
        <Stack spacing="xs">
          <ResponsiveSectionTitle order={4}>
            {point.title}
          </ResponsiveSectionTitle>
          <ResponsiveParagraph>
            {point.desc}
          </ResponsiveParagraph>
        </Stack>
      ))}
    </Stack>
  )
}

export default PointList