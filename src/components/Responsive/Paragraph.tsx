import { Text, TextProps } from "@mantine/core"
import useResponsive from "../../hooks/useResponsive"

interface ResponsiveParagraphProps  extends TextProps{
  children: React.ReactNode
}

function Paragraph({ children, ...rest }: ResponsiveParagraphProps) {
  const { isScreenSmallerThan } = useResponsive()
  const smallerThanXS = isScreenSmallerThan.xs
  const defaultSize= smallerThanXS ? "sm" : "lg"
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