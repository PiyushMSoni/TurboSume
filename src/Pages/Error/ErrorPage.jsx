import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react';


const ErrorPage = () => {
    return (
        <>
            <Box mt={'32'} textAlign="center" py={10} px={6}>
                <Heading
                    display="inline-block"
                    as="h2"
                    size="2xl"
                    bgGradient="linear(to-r, teal.400, teal.600)"
                    backgroundClip="text">
                    404
                </Heading>
                <Text fontSize="18px" mt={3} mb={2}>
                    About Is Not Done Yet
                </Text>
                <Text color={'gray.500'} mb={6}>
                    We're Creating This Page ( Please Wait! ) , coming soon....
                </Text>
            </Box>
        </>
    )
}

export default ErrorPage