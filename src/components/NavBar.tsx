import {
  IconGitPullRequest,
  IconAlertCircle,
  IconMessages,
  IconDatabase,
} from '@tabler/icons-react';
import { Navbar, ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core';
import Brand from './Brand';
const data = [
  { icon: <IconGitPullRequest size="1rem" />, color: 'blue', label: 'About' },
  { icon: <IconAlertCircle size="1rem" />, color: 'teal', label: 'Blog' },
  { icon: <IconMessages size="1rem" />, color: 'violet', label: 'Latest' },
  { icon: <IconDatabase size="1rem" />, color: 'grape', label: 'PR' },
];

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
}

function MainLink({ icon, color, label }: MainLinkProps) {
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
      })}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>
        <Text size="xl">{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

function LayoutNavBar() {
  return (
    <Navbar width={{ base: 320, sm: 200 }}  p="xs">
      <Navbar.Section mt="xs">
        <Brand />
      </Navbar.Section>
      <Navbar.Section grow mt="md">
        <div>
          {data.map((link) => <MainLink {...link} key={link.label} />)}
        </div>
      </Navbar.Section>
      <Navbar.Section>Footer</Navbar.Section>

    </Navbar>
  )
}

export default LayoutNavBar
