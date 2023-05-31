import { Button, Card, Flex, Title } from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import { IconBrandWhatsapp, IconSend, IconX } from "@tabler/icons-react";
import ContactForm from "./ContactForm";

function Contact() {
  const [open, toggle] = useToggle()

  return (
    <>
      {!open && 
        <Button size="xl" bg="violet" onClick={() => toggle()} >
          <IconBrandWhatsapp/><span style={{ marginLeft: 8}}>Contact</span>
        </Button>
      }
      {open &&  
        <Card withBorder shadow="xl" p={0}>
          <Card.Section withBorder p="sm">
            <Flex justify="space-between" align="start">
              <Title order={5} mb={0} color="dark">Contact</Title>
              <IconX color="gray" size={22} onClick={() => toggle()} style={{ cursor: 'pointer', display: "block", marginTop: 4}}/>
            </Flex>
          </Card.Section>
          <Card.Section px="md" py="sm">
            <ContactForm/>
          </Card.Section>
        </Card>
      } 
    </>
  );
}

export default Contact