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
  const smallerThanSM = isScreenSmallerThan.sm
  const smallerThanMd = isScreenSmallerThan.md
  const titleOrder = smallerThanMd ? 4 : 3
  const subTitleOrder = smallerThanMd ? 5 : 4
  return (
    <Flex align="center">
      <Stack>
        <Stack>
          <ResponsiveSectionTitle order={3} color="dark" ta="center" underline>
            Resume
          </ResponsiveSectionTitle>
          <Stack spacing="sm">
            <Container>
              <Avatar radius={smallerThanMd ? 100 : 20} size={smallerThanMd ? 100 : 200} src={avatarImg} />
            </Container>
            <Stack spacing={0}>
              <ResponsiveSectionTitle order={4}  color="dark" ta="center">
                {Content.name}
              </ResponsiveSectionTitle>
              <ResponsiveParagraph fw={700} ta="center" color="gray">
                {Content.title.split(' ').join(' - ')}
              </ResponsiveParagraph>
            </Stack>
            <Group position='center' spacing="lg">
              <a href='https://www.linkedin.com/in/fabio-carvajal-5010412a5' target='_blank'>
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
        </Stack>
        <Stack p="md" spacing="xs" bg="#F5F5F5">
          <CardSection mb="xs">
            <Paper p="sm" pt="2" radius="md" bg="transparent">
              <ResponsiveSectionTitle px={0} color="dark" order={titleOrder} mb="xs">Summary</ResponsiveSectionTitle>
              <Center>
                <ResponsiveParagraph px={0}>
                  {Content.summary}
                </ResponsiveParagraph>
              </Center>
            </Paper>
          </CardSection>
          <CardSection>
            <Stack>
              <Paper px="sm" py={0} radius="md" bg="transparent">
                  <ResponsiveSectionTitle px={0} color="dark" order={titleOrder} mb="xs">
                    Career Record
                  </ResponsiveSectionTitle>

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
                        <ResponsiveSectionTitle my="sm" color="gray" order={subTitleOrder} underline>Accomplishments</ResponsiveSectionTitle>
                        <List center spacing="xs" styles={{ root: { listStylePosition: smallerThanMd ? 'outside' : 'inside' } }}>
                          {record.accomplishments?.map((accomplishment) => (
                            <List.Item icon={smallerThanMd ? null : <IconMedal />} key={accomplishment} >
                              <ResponsiveParagraph style={{ lineHeight: "1.2" }}>{smallerThanMd && '-'} {accomplishment}</ResponsiveParagraph>
                            </List.Item>
                          ))}
                        </List>
                        <Grid {...(smallerThanMd ? {justify: 'center'} : {} )}>
                            {record.keywords?.split(' ').map(technology => (
                              <Tag key={technology} size={smallerThanMd ? 'md' :'lg'}>
                                {technology}
                              </Tag>
                            ))}
                        </Grid>
                      </>
                    </PostEntry>
                  ))
                }
              </Paper>
              <Paper px="sm" py={0} radius="md" bg="transparent">
                {!smallerThanMd && (
                  <ResponsiveSectionTitle px={0} order={titleOrder} mb="sm" color='dark'>
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
                          <Tag key={technology} size={smallerThanMd ? 'md' :'lg'}>
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

      </Stack>
    </Flex>
  )
}

export default ResumeView