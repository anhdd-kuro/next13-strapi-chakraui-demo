import { fetchStrapi } from "@/setup/strapi";
import { CPosts } from "@/components/CPosts";
import qs from "qs";
import { useEffect, useState } from "react";
import { Box, Stack, Heading, Flex, Text, Button, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import type { Post } from "@/types";

const query = qs.stringify(
  {
    populate: {
      author: {
        fields: ["username"],
      },
    },
  },
  {
    encodeValuesOnly: true, // prettify URL
  },
);

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    (async () => {
      const response = await fetchStrapi<Post[]>(`/posts?${query}`);
      setPosts(response);
    })();
  }, []);

  return (
    <main>
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
      <CPosts
        posts={posts.map((p) => ({
          id: `${p.id}`,
          ...p.attributes,
          author: p.attributes?.author?.data?.attributes?.username,
        }))}
      />
    </main>
  );
}
