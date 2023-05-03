import {
  IconGitPullRequest,
  IconAlertCircle,
  IconMessages,
  IconDatabase,
} from '@tabler/icons-react';
import { ThemeIcon, UnstyledButton, Group, Text, Header, Flex, Title } from '@mantine/core';
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
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
      })}
    >
      <Flex gap={14} align="center">
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>
        <Text size={24}>{label}</Text>
      </Flex>
    </UnstyledButton>
  );
}

function LayoutHeader() {
  return (
    <Header px="xl" py="md" height="auto">
      <Flex justify="space-between" align="center">
        <Title order={4} color='dark'>Fabio C.</Title>
        <Flex justify="space-between">
        {data.map((link) => <MainLink {...link} key={link.label} />)}
        </Flex>
        <Title order={5} color='gray'>IPortfolio</Title>
      </Flex>
    </Header>
  )
}

export default LayoutHeader
