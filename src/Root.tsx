import { useState } from 'react'
import { AppShell, SimpleGrid } from '@mantine/core'
import LayoutNavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'


function App() {
  return (
    <AppShell
      padding="md"
      fixed={true}
      navbar={<LayoutNavBar />}
    >
      <SimpleGrid mx={{ base: 320, sm: 200 }} maw={{ base: "100% - 320px", sm: "100% - 200px" }}>
        <Outlet />
      </SimpleGrid>
    </AppShell>
  )
}

export default App
