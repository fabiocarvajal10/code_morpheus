import {
  IconAlertCircle,
  IconBook,
  IconMenu2,
} from '@tabler/icons-react';
import { ThemeIcon, UnstyledButton, Text, Header, Flex, Accordion } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
import useResponsive from '../hooks/useResponsive';
import { IconPlayerPlay } from '@tabler/icons-react';
import { IconBrain } from '@tabler/icons-react';
import { IconClipboardCopy } from '@tabler/icons-react';
import { ReactNode, useEffect } from 'react';
import { useToggle } from '@mantine/hooks';
const data = [
  { icon: <IconAlertCircle size="1rem" />, color: 'violet', label: 'About', href: '/about' },
  { icon: <IconClipboardCopy size="1rem" />, color: 'violet', label: 'Resume', href: '/resume' },
  { icon: <IconBook size="1rem" />, color: 'violet', label: 'Manifesto', href: '/manifesto' },
  { icon: <IconBrain size="1rem" />, color: 'violet', label: 'Posts', href: 'https://medium.com/@fabio.carvajal' },
];

interface MainLinkProps {
  icon: React.ReactNode
  color: string
  label: string
  href: string
  active: boolean
}

function MainLink({ active, icon, color, label, href }: MainLinkProps) {
  const { isScreenSmallerThan } = useResponsive()
  const smallerThanMd = isScreenSmallerThan.md
  return (
    <UnstyledButton
      sx={(theme) => ({
        width: '100%',
        display: 'block',
        paddingTop: theme.spacing.xs,
        paddingBottom: theme.spacing.xs,
        paddingLeft: smallerThanMd ? 0 : theme.spacing.xs,
        paddingRight: smallerThanMd ? 0 : theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        ...(active ? {
          backgroundColor: theme.colors.gray[2],
        } : {
          '&:hover': {
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          },
        }),
      })}
    >
      <Link to={href} style={{ textDecoration: 'none', color: "gray" }}>
        <Flex gap={smallerThanMd ? 28 : 14} align="center">
          <ThemeIcon color={color} variant="light">
            {icon}
          </ThemeIcon>
          <Text size={smallerThanMd ? 32 : 24} ff="Roboto Mono" fw={400}>{label}</Text>
        </Flex>
      </Link>
    </UnstyledButton>
  )
}

interface ResponsiveMenuButtonProps {
  children: ReactNode
}

const ResponsiveMenuButton = ({ children }: ResponsiveMenuButtonProps) => {
  const location = useLocation()
  const [value, toggle] = useToggle(['close', 'open'])
  const { isScreenSmallerThan } = useResponsive()
  const smallerThanMd = isScreenSmallerThan.md
  const handleClick = (val: string) => toggle(val)
  
  useEffect(() => {
    toggle()
  }, [location])

  return (
    <Accordion value={value} onChange={handleClick} chevron={null} styles={(smallerThanMd ? { content: { padding: 0} } : {})} >
      <Accordion.Item value="open">
        <Accordion.Control><IconMenu2  size={55} /></Accordion.Control>
        <Accordion.Panel px={0}>
          {children}
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  )
}

function LayoutHeader() {
  const { isScreenSmallerThan } = useResponsive()
  const location = useLocation()
  const smallerThanMd = isScreenSmallerThan.md
  const menuItems = data.map((link) => <MainLink {...link} key={link.label} active={location.pathname === link.href} />)
  return (
    <>
      {!smallerThanMd && <Header px="xl" py="md" height="auto">
        <Flex justify={"center"} align="center" >
          <Flex justify="space-between" gap={24}>
          {menuItems}
          </Flex>
        </Flex>
      </Header>
      }
      {smallerThanMd && (
          <ResponsiveMenuButton>
            {menuItems}
          </ResponsiveMenuButton>
      )}
    </>
  )
}

export default LayoutHeader
