import { Badge } from "@mantine/core"

function Tag({ children, size = "md" }: { children: React.ReactNode, size?: "xs" | "sm" | "md" | "lg" | "xl" }) {
  return (
    <Badge variant="outline" color="blue" mx={4} px="xs" mt={10} size={size}>
      {children}
    </Badge>
  )
}

export default Tag