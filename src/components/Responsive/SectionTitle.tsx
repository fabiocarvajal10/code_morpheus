import { Title, TitleOrder, TitleProps } from "@mantine/core"
import useResponsive from "../../hooks/useResponsive"

interface ResponsiveSectionTitleProps extends TitleProps {
  children: React.ReactNode
}

function ResponsiveSectionTitle({ children, ...rest }: ResponsiveSectionTitleProps) {
  const { isScreenSmallerThan } = useResponsive()
  const props: TitleProps = {
    ta:   rest.ta || (isScreenSmallerThan.md ? 'center' : 'left'),
    color: rest.color || 'dark',
  }
  return (
    <Title {...rest} {...props}>
      {children}
    </Title>
  )
}

export default ResponsiveSectionTitle