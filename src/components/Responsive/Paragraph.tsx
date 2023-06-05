import { Text, TextProps } from "@mantine/core"
import useResponsive from "../../hooks/useResponsive"

interface ResponsiveParagraphProps  extends TextProps{
  children: React.ReactNode
}

function Paragraph({ children, ...rest }: ResponsiveParagraphProps) {
  const { isScreenSmallerThan } = useResponsive()
  const smallerThanMD = isScreenSmallerThan.md
  const defaultSize= smallerThanMD ? "md" : "lg"
  const props: TextProps = {
    ta:  rest.ta || 'left',
    size: rest.size || defaultSize,
  }
  return (
    <Text {...rest} {...props}>
      {children}
    </Text>
  )
}

export default Paragraph