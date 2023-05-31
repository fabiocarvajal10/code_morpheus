import { Button, Stack, Textarea } from "@mantine/core";
import { IconBrandWhatsapp, IconSend } from "@tabler/icons-react";
import { useState } from "react";

const buildURL = (text: string) => {
  return `https://api.whatsapp.com/send/?phone=50689751261&text=${text}&type=phone_number&app_absent=0`
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
      <Button bg="violet" fullWidth leftIcon={<IconBrandWhatsapp/>} onClick={handleSend} size="lg">
        Send
      </Button>
    </Stack>
  );
}

export default ContactForm