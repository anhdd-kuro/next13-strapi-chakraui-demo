"use client";
import { Badge, Box } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";

type Props = {
  // img: {
  //   src: string;
  //   alt: string;
  // };
  title: string;
  content: string;
  author: string;
};

export const CCard: FC<Props> = ({ title, author, content }) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box>
        <Image src={"https://picsum.photos/300/300"} alt={"img alt"} width={300} height={300} />
      </Box>
      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>

          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {author}
          </Box>
        </Box>

        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={1}>
          {title}
        </Box>

        <Box wordBreak={"break-all"}>{content}</Box>
      </Box>
    </Box>
  );
};
