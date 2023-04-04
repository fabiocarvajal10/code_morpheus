
import { Group, ActionIcon, Box, rem, Avatar } from '@mantine/core';
import { IconMoonStars } from '@tabler/icons-react';
import avatarImg from '../assets/img/av.jpeg'
function Brand() {

  return (
    <Box
      sx={(theme) => ({
        paddingLeft: theme.spacing.xs,
        paddingRight: theme.spacing.xs,
        paddingBottom: theme.spacing.lg,
        borderBottom: `${rem(1)} solid ${
          theme.colors.gray[2]
        }`,
      })}
    >
      <Group position="apart">
        <Avatar src={avatarImg} />
        <ActionIcon variant="default" onClick={() => null} size={30}>
          <IconMoonStars size="1rem" />
        </ActionIcon>
      </Group>
    </Box>
  );
}

export default Brand
