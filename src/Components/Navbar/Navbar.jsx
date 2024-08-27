import { Box, Flex, HStack, IconButton, useDisclosure, useColorMode, useColorModeValue, Stack, Button } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/react'
import logo from './../../Assets/logo.png';
import React, { useContext } from 'react';
import ResumeContext from 'C:/Users/fakaf/OneDrive/Desktop/My_Project/Instant_Resume/src/Context/ResumeContext';

const Navbar = (props) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { showComponent, setShowComponent} = useContext(ResumeContext)
    const handleSelectNewTemplate = () => {
        setShowComponent(!showComponent)
    }
    return (
        <>
            <Box id='navbar' bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                        <Box><img style={{ height: '44px' }} className='logo' src={logo} alt="logo" /></Box>

                    <HStack spacing={8} alignItems={'center'}>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            <Button className='mx-2 my-5' onClick={handleSelectNewTemplate}>Home</Button>
                            <Button className='mx-2 my-5'><Link color='black' fontWeight={'semibold'} href='/about'>About</Link></Button>
                        </HStack>
                        <Button onClick={toggleColorMode}>
                            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                        </Button>
                    </HStack>

                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />

                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            <Button className='mx-2 my-5' onClick={handleSelectNewTemplate}>Home</Button>
                            <Button className='mx-2 my-5'><Link color='black' fontWeight={'semibold'} href='/about'>About</Link></Button>
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}

export default Navbar
