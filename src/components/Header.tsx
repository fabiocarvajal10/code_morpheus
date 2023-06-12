import {
  IconAlertCircle,
  IconBook,
  IconBrandWhatsapp,
  IconCode,
  IconTestPipe,
} from '@tabler/icons-react';
import { ThemeIcon, Image, UnstyledButton, Text, Header, Flex, Burger, Collapse, Stack } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
import useResponsive from '../hooks/useResponsive';
import { IconClipboardCopy } from '@tabler/icons-react';
import { ReactNode, useEffect } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { contactLink } from '../constants';

interface MainLinkProps {
  icon: React.ReactNode
  color: string
  label: string
  href: string
  active: boolean
}

const data = [
  { icon: <IconCode size="1rem" />, color: 'violet', label: 'Home', href: '/' },
  { icon: <IconAlertCircle size="1rem" />, color: 'violet', label: 'About', href: 'about' },
  { icon: <IconClipboardCopy size="1rem" />, color: 'violet', label: 'Resume', href: 'resume' },
  { icon: <IconBook size="1rem" />, color: 'violet', label: 'Manifesto', href: 'manifesto' },
  { icon: <IconTestPipe size="1rem" />, color: 'violet', label: 'Blog', href: 'https://medium.com/@fabio.carvajal' },
  { icon: <IconBrandWhatsapp size="1rem"/>, color: 'violet', label: 'Contact', href: contactLink},
];

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
        paddingLeft: theme.spacing.xs,
        paddingRight: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colors.gray[0],
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
          <Text ff="Roboto Mono" fw={400}>{label}</Text>
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
  const [opened, { toggle }] = useDisclosure(false);
  const { isScreenSmallerThan } = useResponsive()
  const smallerThanMd = isScreenSmallerThan.md
  
  useEffect(() => {
    if (opened) toggle()
  }, [location])



  return (
    <Stack pt="md" spacing="sm">
        <Burger opened={opened} onClick={toggle} color="gray" style={{ height: "2rem"}} />
        <Collapse in={opened} styles={(smallerThanMd ? { content: { padding: 0} } : {})} >  
          {children}
      </Collapse>
    </Stack>
  )
}

function LayoutHeader() {
  const { isScreenSmallerThan } = useResponsive()
  const location = useLocation()
  const smallerThanMd = isScreenSmallerThan.md
  const menuItems = data.map((link) => <MainLink {...link} key={link.label} active={location.pathname === link.href} />)
  return (
    <>
      {!smallerThanMd && <Header px="xl" py="md" height="auto" pos="sticky">
        <Flex justify="center" align="center" >
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
