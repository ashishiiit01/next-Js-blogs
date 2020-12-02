import { Box, Grid, Center, Wrap, WrapItem, Avatar } from "@chakra-ui/react"
import styles from './post.module.css'
const getPost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const post = await res.json();
    return post;
};

const Post = ({ post }) => {
    return (
        <Box bg="tomato" height="100vh" className={styles.container} >

            <Box colSpan={1} px={20} py={40} className={styles.box} color="white" fontSize={18}>
                <Center mb={40}>
                    <Wrap >
                        <WrapItem>
                            <Avatar
                                name="Dan Abrahmov"
                                src="https://bit.ly/dan-abramov"
                                borderRadius="105px"
                                width={150}
                                height={150}

                            />
                        </WrapItem>
                    </Wrap>
                </Center>

                <Grid templateColumns="repeat(2, 1fr)" mb={15}>
                    <Box >
                        Name :
                    </Box >
                    <Box >
                        {post.name}
                    </Box >
                </Grid>

                <Grid templateColumns="repeat(2, 1fr)" mb={15}>
                    <Box >
                        UserName :
                    </Box >
                    <Box >
                        {post.username}
                    </Box >
                </Grid>
                <Grid templateColumns="repeat(2, 1fr)" mb={15}>
                    <Box >
                        Email :
                    </Box >
                    <Box >
                        {post.email}
                    </Box >
                </Grid>

                <Grid templateColumns="repeat(2, 1fr)" mb={15}>
                    <Box >
                        Company :
                    </Box >
                    <Box >
                        {post.company.name}
                    </Box >
                </Grid>

                <Grid templateColumns="repeat(2, 1fr)" mb={15}>
                    <Box >
                        Phone :
                    </Box >
                    <Box >
                        {post.phone}
                    </Box >
                </Grid>
            </Box>
        </Box >
    )
}

export default Post

export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const posts = await res.json();

    const paths = posts.map((post) => ({
        params: { id: post.id.toString() },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params }) => {
    const post = await getPost(params.id);
    return {
        props: {
            post,
        },
    };
};