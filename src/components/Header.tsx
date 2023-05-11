import {
  IconAlertCircle,
  IconBook,
  IconMenu2,
} from '@tabler/icons-react';
import { ThemeIcon, UnstyledButton, Text, Header, Flex, Accordion } from '@mantine/core';
import { Link } from 'react-router-dom';
import useResponsive from '../hooks/useResponsive';
import { IconPlayerPlay } from '@tabler/icons-react';
import { IconBrain } from '@tabler/icons-react';
import { IconClipboardCopy } from '@tabler/icons-react';
import { ReactNode } from 'react';
const data = [
  { icon: <IconAlertCircle size="1rem" />, color: 'violet', label: 'About', section: 'about' },
  { icon: <IconClipboardCopy size="1rem" />, color: 'violet', label: 'Resume', section: 'resume' },
  { icon: <IconPlayerPlay size="1rem" />, color: 'violet', label: 'Portfolio', section: 'portfolio' },
  { icon: <IconBrain size="1rem" />, color: 'violet', label: 'Posts', section: 'posts' },
  { icon: <IconBook size="1rem" />, color: 'violet', label: 'Manifesto', section: 'career-manifesto' },
];

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
}

function MainLink({ icon, color, label }: MainLinkProps) {
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

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
      })}
    >
      <Link to="google.com" style={{ textDecoration: 'none', color: "gray" }}>
        <Flex gap={smallerThanMd ? 28 : 14} align="center">
          <ThemeIcon color={color} variant="light">
            {icon}
          </ThemeIcon>
          <Text size={smallerThanMd ? 32 : 24} ff="Roboto Mono" fw={400}>{label}</Text>
        </Flex>
      </Link>
    </UnstyledButton>
  );
}

interface ResponsiveMenuButtonProps {
  children: ReactNode
}

const ResponsiveMenuButton = ({ children }: ResponsiveMenuButtonProps) => {
  const { isScreenSmallerThan } = useResponsive()
  const smallerThanMd = isScreenSmallerThan.md
  return (
    <Accordion chevron={null} styles={(smallerThanMd ? { content: { padding: 0} } : {})} >
      <Accordion.Item value="menu">
        <Accordion.Control><IconMenu2  size={55} /></Accordion.Control>
        <Accordion.Panel px={0}>
          {children}
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

function LayoutHeader() {
  const { isScreenSmallerThan } = useResponsive()
  const smallerThanMd = isScreenSmallerThan.md
  const menuItems = data.map((link) => <MainLink {...link} key={link.label} />)
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
