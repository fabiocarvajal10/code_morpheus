import useResponsive from '../hooks/useResponsive'
import WIP from '../components/WIP'
import { Blockquote, Flex, List, Stack, Title } from '@mantine/core'
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
  return (
    <Stack>
      <Title ta="center" order={2} color="dark">
        {Content.mainTitle}
      </Title>

      <Flex w="100%" pb="xl">
        <List
        >
          {Content.policies.map((policy, i) => {
            const Icon = ICONS[i]
            return (
              <List.Item py="xs" fz={32} icon={<Icon style={{ color: "violet"}}/>}>
                <Title order={4} color="dark">
                  {policy.title}
                </Title>
                <ResponsiveParagraph px="sm">
                  {policy.desc}
                </ResponsiveParagraph>
              </List.Item>
            )
          })}
        </List>
      </Flex>
    </Stack>
  )
}

export default ManifestoView