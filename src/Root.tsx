import { Grid, SimpleGrid } from '@mantine/core'
import LayoutHeader from './components/Header'
import { Outlet } from 'react-router-dom'
import Shell from './components/AppShell'
import './index.css'

function App() {
  return (
    <Shell
      Header={<LayoutHeader />}
    >
      <Outlet />
    </Shell>
  )
}

export default App
