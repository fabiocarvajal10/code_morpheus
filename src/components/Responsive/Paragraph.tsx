import { Text, TextProps } from "@mantine/core"
import useResponsive from "../../hooks/useResponsive"

interface ResponsiveParagraphProps  extends TextProps{
  children: React.ReactNode
}

function ResponsiveParagraph({ children, ...rest }: ResponsiveParagraphProps) {
  const { isScreenSmallerThan } = useResponsive()
  const ta = isScreenSmallerThan.xs ? 'right' : 'left'
  return (
    <Text {...rest} ta={ta}>
      {children}
    </Text>
  )
}

export default ResponsiveParagraph