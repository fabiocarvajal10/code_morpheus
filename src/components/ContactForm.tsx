import { Button, Stack, Textarea } from "@mantine/core";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { useState } from "react";
import { messageFormContact } from "../constants";

const buildURL = (text: string) => {
  return `${messageFormContact}&text=${text}`
}

function ContactForm() {
  const [msg, setMsg] = useState("")


  const handleSend = () => {
    buildURL(msg)
    window.open(buildURL(msg), "_blank")
  }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMsg(event.currentTarget.value)
  }

  return (
    <Stack spacing="md">
      <Textarea
        size="lg"
        styles={{ label: { fontWeight: "bold" },  error: { marginTop: 8, fontWeight: "bold"} }}
        label="Message"
        value={msg}
        onChange={handleChange}
      />
      <Button bg="blue" fullWidth leftIcon={<IconBrandWhatsapp/>} onClick={handleSend} size="lg">
        Send
      </Button>
    </Stack>
  );
}

export default ContactForm