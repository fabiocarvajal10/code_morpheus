import { Text, TextProps } from "@mantine/core"

interface ResponsiveParagraphProps  extends TextProps{
  children: React.ReactNode
}

function Paragraph({ children, ...rest }: ResponsiveParagraphProps) {
  const props: TextProps = {
    ta:  rest.ta || 'left',
    size: rest.size || 'md',
  }
  return (
    <Text {...rest} {...props}>
      {children}
    </Text>
  )
}

export default Paragraph