import { Avatar, CardSection, Center, Container, Flex, Grid, Group, List, Paper, Stack, Text, Title } from '@mantine/core'
import Content from '../content/resume'
import avatarImg from '../assets/img/av.jpeg'
import { IconBrandGithub, IconBrandLinkedin, IconBrandMedium, IconBrandTwitter, IconMedal } from '@tabler/icons-react'
import PostEntry from '../components/PostEntry'
import Tag from '../components/Tag'
import useResponsive from '../hooks/useResponsive'
import ResponsiveSectionTitle from '../components/Responsive/SectionTitle'
import ResponsiveParagraph from '../components/Responsive/Paragraph'


function ResumeView() {
  const { isScreenSmallerThan } = useResponsive()
  const smallerThanXS = isScreenSmallerThan.xs
  const smallerThanMd = isScreenSmallerThan.md
  return (
    <Flex align="center">
      <Stack p="md" spacing="xs">
        <CardSection mb="0">
         <Center>
            <Stack spacing="sm">
              <Container>
                <Title order={2} mb="md" color="dark" align="center" underline>
                  {Content.name}
                </Title>
              </Container>
              <Container>
                <Avatar radius={100} size={250} src={avatarImg} />
              </Container>
              <Stack spacing={0}>
                
                <Text fz={22} fw={700} ta="center" color="gray" >
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
            <ResponsiveSectionTitle px={0} color="dark" order={3} mb="md">Summary</ResponsiveSectionTitle>
            <Center>
              <ResponsiveParagraph px={0} fz={24} size="xl">
                {Content.summary}
              </ResponsiveParagraph>
            </Center>
          </Paper>
        </CardSection>
        <CardSection>      
          <Stack>
            <Paper px="sm" py={0} radius="md">
              {!smallerThanMd && (
                <ResponsiveSectionTitle px={0} color="dark" order={3} mb="md">
                  Career Record
                </ResponsiveSectionTitle>
              )}
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
                      <ResponsiveSectionTitle my="sm" color="gray" order={5}>Accomplishments</ResponsiveSectionTitle>
                      <List center spacing="xs" styles={{ root: { listStylePosition: smallerThanMd ? 'outside' : 'inside' } }}>
                        {record.accomplishments?.map((accomplishment) => (
                          <List.Item icon={smallerThanXS ? null : <IconMedal />} key={accomplishment}>
                            <ResponsiveParagraph size={23}>{smallerThanXS && '-'} {accomplishment}</ResponsiveParagraph>
                          </List.Item>
                        ))}
                      </List>
                      <Grid {...(smallerThanXS ? {justify: 'center'} : {} )}>
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
            <Paper px="sm" py={0} radius="md">
              {!smallerThanMd && (
                <ResponsiveSectionTitle px={0} order={4} mb="sm" color='dark'>
                  Previous Experience
                </ResponsiveSectionTitle>
              )}
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
                    <Grid {...(smallerThanMd ? {justify: 'center'} : {} )}>
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