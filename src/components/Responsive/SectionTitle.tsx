import { Title, TitleProps } from "@mantine/core"
import useResponsive from "../../hooks/useResponsive"

interface ResponsiveSectionTitleProps extends TitleProps {
  children: React.ReactNode
}

function ResponsiveSectionTitle({ children, ...rest }: ResponsiveSectionTitleProps) {
  const { isScreenSmallerThan } = useResponsive()
  const ta = isScreenSmallerThan.xs ? 'center' : 'left'
  return (
    <Title {...rest} ta={ta}>
      {children}
    </Title>
  )
}

export default ResponsiveSectionTitle