import { Container, Flex, Stack } from '@mantine/core'
import Content from '../content/manifesto'
import { 
  IconSquareRoundedNumber1Filled, 
  IconSquareRoundedNumber2Filled, 
  IconSquareRoundedNumber3Filled,
  IconSquareRoundedNumber4Filled,
  IconSquareRoundedNumber5Filled,
  IconSquareRoundedNumber6Filled,
  IconSquareRoundedNumber7Filled,
  IconSquareRoundedNumber8Filled,
  IconSquareRoundedNumber9Filled
} from '@tabler/icons-react'
import ResponsiveSectionTitle from '../components/Responsive/SectionTitle'
import useResponsive from '../hooks/useResponsive'
import ResponsiveParagraph from '../components/Responsive/Paragraph'

const ICONS = [
  IconSquareRoundedNumber1Filled,
  IconSquareRoundedNumber2Filled,
  IconSquareRoundedNumber3Filled,
  IconSquareRoundedNumber4Filled,
  IconSquareRoundedNumber5Filled,
  IconSquareRoundedNumber6Filled,
  IconSquareRoundedNumber7Filled,
  IconSquareRoundedNumber8Filled,
  IconSquareRoundedNumber9Filled,
]

function ManifestoView() {
  const { isScreenSmallerThan } = useResponsive()
  const smallerThanXS = isScreenSmallerThan.xs
  return (
    <Stack>
      <ResponsiveSectionTitle ta="center" order={3} underline>
        {Content.mainTitle}
      </ResponsiveSectionTitle>

      <Stack spacing="md" py={smallerThanXS ? "xs" : "md"} px={smallerThanXS ? "xs" : "md"} bg="#F5F5F5">
        {Content.policies.map((policy, i) => {
          const Icon = ICONS[i]
          return (
            <Container px="0">
              <Flex align="start" gap="xs" color='dark'>
                <Icon style={{ color: "grey", marginTop: 8, flexShrink: 0 }} /> 
                <Stack spacing={1}>
                  <ResponsiveSectionTitle order={4} ta="left" align='center' underline>
                    {policy.title}
                  </ResponsiveSectionTitle>
                  <ResponsiveSectionTitle order={5} ta="left">
                    {policy.subtitle}
                  </ResponsiveSectionTitle>
                  <ResponsiveParagraph size={smallerThanXS ? "md" : "lg"}>
                    {policy.desc}
                  </ResponsiveParagraph>
                </Stack>
              </Flex>
            </Container>
          )
        })}
      </Stack>
    </Stack>
  )
}

export default ManifestoView