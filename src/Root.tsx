import { Affix, Grid, SimpleGrid, rem } from '@mantine/core'
import LayoutHeader from './components/Header'
import { Outlet } from 'react-router-dom'
import Shell from './components/AppShell'
import Contact from './components/Contact'
import './index.css'

function App() {
  return (
    <Shell
      Header={<LayoutHeader />}
    >
      <Outlet />
      <Affix position={{ bottom: rem(2), right: rem(2) }}>
        <Contact />
      </Affix>
    </Shell>
  )
}

export default App
