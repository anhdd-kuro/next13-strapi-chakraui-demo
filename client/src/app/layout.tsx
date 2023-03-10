"use client";
import { Box, Stack, Heading, Flex, Text, Button, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <html>
      <head />
      <body>
        <header>
          <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            px={4}
            py={2}
            bg="teal.500"
            color="white"
          >
            <Flex align="center" mr={5}>
              <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                Chakra UI
              </Heading>
            </Flex>

            <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
              <HamburgerIcon />
            </Box>

            <Stack
              direction={{ base: "column", md: "row" }}
              display={{ base: isOpen ? "block" : "none", md: "flex" }}
              width={{ base: "full", md: "auto" }}
              alignItems="center"
              flexGrow={1}
              mt={{ base: 4, md: 0 }}
            >
              <Text>Docs</Text>
              <Text>Examples</Text>
              <Text>Blog</Text>
            </Stack>

            <Box display={{ base: isOpen ? "block" : "none", md: "block" }} mt={{ base: 4, md: 0 }}>
              <Button variant="outline" _hover={{ bg: "teal.700", borderColor: "teal.700" }}>
                Create account
              </Button>
            </Box>
          </Flex>
        </header>
        {children}
      </body>
    </html>
  );
}
