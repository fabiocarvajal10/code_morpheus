import { ReactNode } from 'react'
import { Center, Container, Flex, Grid, SimpleGrid, Stack } from '@mantine/core'

interface ShellProps {
  Header: ReactNode
  children: ReactNode
}

function Shell({ Header, children }: ShellProps) {
  return (
    <Container maw="80rem" mb="sm">
      <Stack>
        {Header}
        <Center>  
          <SimpleGrid> 
            {children}
          </SimpleGrid>
        </Center>
      </Stack>
    </Container>
  )
}

export default Shell
