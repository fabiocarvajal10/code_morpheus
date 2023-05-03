import { useState, ReactNode } from 'react'
import { Center, Container, Grid, SimpleGrid, Stack } from '@mantine/core'

import { useMantineTheme } from "@mantine/core";
import { Button } from "@mantine/core";
import { IconMenu } from '@tabler/icons-react';

function Bar() {
  const [menuOpened, setMenuOpened] = useState(false);
  const theme = useMantineTheme();

  return (
    <Container>
      <Button
        variant="link"
        size="lg"
        style={{ paddingLeft: theme.spacing.md }}
        onClick={() => setMenuOpened((opened) => !opened)}
        rightIcon={<IconMenu />}
      />
    </Container>
  );
}

interface ShellProps {
  Header: ReactNode
  children: ReactNode
}

function Shell({ Header, children }: ShellProps) {
  return (
    <div>
      <Stack>
        {Header}
        <Center>  
          <SimpleGrid maw={1500}> 
            {children}
          </SimpleGrid>
        </Center>
      </Stack>
    </div>
  )
}

export default Shell
