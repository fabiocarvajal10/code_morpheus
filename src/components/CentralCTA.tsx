import { Button, Center } from "@mantine/core";
import { Link } from "react-router-dom";

interface CentralCTAProps {
  link: string
  children: string
}

function CentralCTA({
  link,
  children,
}: CentralCTAProps) {
  return (
    <Center>
      <Link to={link}>
        <Button size="md" fullWidth={false}>
            {children}
        </Button>
      </Link>
    </Center>
  )
}

export default CentralCTA