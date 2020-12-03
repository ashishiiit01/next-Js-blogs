import styles from "../styles/Home.module.css";
import {
  ChakraProvider,
  ColorModeScript,
} from "@chakra-ui/react";
import {
  Box,
  Grid,
  SimpleGrid,
  GridItem,
  WrapItem,
  Wrap,
  Avatar,
  Center,
  useColorMode,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import Link from "next/link";
export default function Home({
  posts,
}) {

  const {
    colorMode,
    toggleColorMode,
  } = useColorMode();
  const bg = useColorModeValue(
    colorMode ===
      "light"
      ? "black"
      : "light"
  );
  const color = useColorModeValue(
    colorMode ===
      "light" ?
      "white" :
      "gray.800"
  );

  return (
    <ChakraProvider>
      <div >
        <Box
          w="100%"
          p={4}
          bg={bg}
          color={color}
          boxShadow="1px 1px 1px -1px #888888"
          display="flex"
          justifyContent="space-between"
        >
          <Box fontWeight='800'>BLOGS</Box>
          <Box><Button
            onClick={
              toggleColorMode
            }
            color="black"
          >

            {colorMode ===
              "light"
              ? "Dark"
              : "Light"}
          </Button></Box>



        </Box>
        <Box height={10} bg={bg}
        ></Box>
        {/* POSTS  */}

        <Box px="20" bg={bg}
        >
          <SimpleGrid
            minChildWidth="240px"
            spacingX="30px"
            spacingY="30px"
          >
            {posts.map(
              post => (
                <Link
                  href={`/post/${post.id}`}
                  key={
                    post.name
                  }
                >
                  <Box
                    w="100%"
                    h="60"
                    px="2"
                    py="5"
                    bg="tomato"
                    key={
                      post.name
                    }
                    className={
                      styles.box
                    }
                  >
                    <Grid
                      h="200px"
                      templateRows="repeat(2, 1fr)"
                      templateColumns="repeat(2, 1fr)"
                      gap={
                        4
                      }
                    >
                      <GridItem
                        rowSpan={
                          1
                        }
                        colSpan={
                          2
                        }
                        bg="tomato"
                        color="white"
                      >
                        <Center>
                          <Wrap p="2">
                            <WrapItem>
                              <Avatar
                                name="Dan Abrahmov"
                                src="https://bit.ly/dan-abramov"
                              />
                            </WrapItem>
                          </Wrap>
                          {
                            post.name
                          }
                        </Center>
                      </GridItem>
                      <GridItem
                        colSpan={
                          2
                        }
                        bg="papayawhip"
                        color="black"
                        px="1"
                        py="2"
                      >
                        <Center>
                          UserName:{" "}
                          {
                            post.username
                          }
                        </Center>
                        <Center>
                          Email:{" "}
                          {
                            post.email
                          }
                        </Center>
                      </GridItem>
                    </Grid>
                  </Box>
                </Link>
              )
            )}
          </SimpleGrid>
        </Box>
      </div>
    </ChakraProvider>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};
