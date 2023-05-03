import { useMemo } from "react"
import { useMantineTheme } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"

const useResponsive = () => {
  const theme = useMantineTheme()
  const isSmallerThanExtraSmall = useMediaQuery(
    `(max-width: ${theme.breakpoints.xs})`
  )
  const isSmallerThanSmall = useMediaQuery(
    `(max-width: ${theme.breakpoints.sm})`
  )
  const isSmallerThanMedium = useMediaQuery(
    `(max-width: ${theme.breakpoints.md})`
  )
  const isSmallerThanLarge = useMediaQuery(
    `(max-width: ${theme.breakpoints.lg})`
  )

  const value = useMemo(
    () => ({
      isScreenLargerThan: {
        xs: !isSmallerThanExtraSmall,
        sm: !isSmallerThanSmall,
        md: !isSmallerThanMedium,
        lg: !isSmallerThanLarge,
      },
      isScreenSmallerThan: {
        xs: isSmallerThanExtraSmall,
        sm: isSmallerThanSmall,
        md: isSmallerThanMedium,
        lg: isSmallerThanLarge,
      },
      header: {
        height: isSmallerThanSmall ? 120 : 90,
      },
      topNavigation: { height: 48 },
    }),
    [
      isSmallerThanSmall,
      isSmallerThanMedium,
      isSmallerThanExtraSmall,
      isSmallerThanLarge,
    ]
  )

  return value
}

export default useResponsive
