import { Avatar, CardSection, Center, Container, Flex, Grid, Group, List, Paper, Stack, Text, Title } from '@mantine/core'
import Content from '../content'
import avatarImg from '../assets/img/av.jpeg'
import { IconBrandGithub, IconBrandLinkedin, IconBrandMedium, IconBrandTwitter, IconMedal } from '@tabler/icons-react'
import PostEntry from '../components/PostEntry'
import Tag from '../components/Tag'
import useResponsive from '../hooks/useResponsive'


function ResumeView() {
  const { isScreenSmallerThan } = useResponsive()
  return (
    <Flex align="center">
      <Stack p="md" spacing="xs">
        <CardSection mb="0">
         <Center>
            <Stack spacing="sm">
              <Container>
                <Avatar radius={100} size={250} src={avatarImg} />
              </Container>
              <Stack spacing={0}>
                <Title order={4} color="dark" align="center">
                  {Content.name}
                </Title>
                <Text fz={22} fw={700} color="gray">
                  {Content.title.split(' ').join(' - ')}
                </Text>
              </Stack>
              <Group position='center' spacing="lg">
                <a href='https://www.linkedin.com/in/fabio-c-250055a4' target='_blank'>
                  <IconBrandLinkedin size={28} />
                </a>
                <a href="https://twitter.com/Agent_Carvajal" target="_blank">
                  <IconBrandTwitter size={28}  />
                </a>
                <a href="https://github.com/fabiocarvajal10" target="_blank">
                  <IconBrandGithub size={28} />
                </a>
                <a href="https://medium.com/@fabio.carvajal" target="_blank">
                  <IconBrandMedium size={28} />
                </a>
              </Group>
            </Stack>
          </Center>
        </CardSection>
        <CardSection mb="xs">
          <Paper p="sm" pt="0" radius="md">
            <Title px="md" color="dark" order={3} mb="md">Summary</Title>
            <Center>
              <Text px="md" size="xl">
                {Content.summary}
              </Text>
            </Center>
          </Paper>
        </CardSection>
        <CardSection>      
          <Stack>
            <Paper p="sm" radius="md">
              <Title px="md" color="dark" order={3} mb="md">Career Record</Title>
              {
                Content.career.filter(record => Boolean(record.summary)).map((record, i) => (
                  <PostEntry 
                    key={record.company} 
                    id={record.company}
                    title={record.title}
                    subtitle={record.company}
                    subtitleHref={record.href}
                    tag={record.years}
                    summary={record.summary || undefined}
                  >
                    <>
                      <Title my="sm" color="gray" order={5}>Accomplishments</Title>
                      <List center spacing="xs">
                        {record.accomplishments?.map((accomplishment) => (
                          <List.Item icon={<IconMedal />} key={accomplishment}>
                            <Text size={18}>{accomplishment}</Text>
                          </List.Item>
                        ))}
                      </List>
                      <Grid>
                          {record.keywords?.split(' ').map(technology => (
                            <Tag key={technology}>
                              {technology}
                            </Tag>
                          ))}
                      </Grid>
                    </>
                  </PostEntry>
                ))
              }
            </Paper>
            <Paper p="sm" radius="md">
              <Title px="md" order={4} mb="sm" color='dark'>Previous Experience</Title>
              {
                Content.career.filter(record => !Boolean(record.summary)).map((record, i) => (
                  <PostEntry 
                    key={record.company} 
                    id={record.company}
                    title={record.title}
                    subtitle={record.company}
                    subtitleHref={record.href}
                    tag={record.years}
                  >
                    <Grid {...(isScreenSmallerThan.md ? {justify: 'center'} : {} )}>
                      {record.keywords?.split(' ').map(technology => (
                        <Tag key={technology}>
                          {technology}
                        </Tag>
                      ))}
                    </Grid>
                  </PostEntry>
                ))
              }
            </Paper>
          </Stack>
        </CardSection>
      </Stack>
    </Flex>
  )
}

export default ResumeView