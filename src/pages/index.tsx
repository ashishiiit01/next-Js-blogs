import Head from "next/head";
import styles from "../styles/Home.module.css";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Box,
  Grid,
  SimpleGrid,
  GridItem,
  WrapItem,
  Wrap,
  Avatar,
  Center,
} from "@chakra-ui/react";
import Link from "next/link";
export default function Home({
  posts,
}) {
  return (
    <ChakraProvider>
      <div>
        <Head>
          <title>
            Create
            Next App
          </title>
          <link
            rel="icon"
            href="/favicon.ico"
          />
        </Head>
        {/* HEADERS */}
        <Box
          bg="tomato"
          w="100%"
          p={4}
          mb={10}
          color="white"
        >
          BLOGS
        </Box>
        {/* POSTS  */}
        <Box px="20">
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
