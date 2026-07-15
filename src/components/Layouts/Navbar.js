import {
    Stack,
    Flex,
    Heading,
    Spacer,
    HStack,
    Text,
    Button,
} from "@chakra-ui/react";

const Navbar = ({ setCurrentPage }) => {
    const handleNavigation = (page) => {
        setCurrentPage(page);
    };

    return (
        <Stack
            p={5}
            bg={'gray.50'}
            as='header'
            boxShadow="sm"
        >
            <Flex
                w='full'
                alignItems={'center'}
                direction={{ base: 'column', md: 'row' }}
                gap={{ base: 4, md: 0 }}
            >
                <Heading 
                    as='h3' 
                    ml={{ base: 0, sm: 8 }} 
                    size='lg' 
                    fontWeight={'thin'} 
                    color='purple.500' 
                    style={{ fontFamily: "Pacifico" }}
                    cursor="pointer"
                    onClick={() => handleNavigation('home')}
                >
                    Resumegen
                </Heading>
                
                <Spacer display={{ base: 'none', md: 'block' }} />
                
                <HStack 
                    spacing={{ base: 4, md: 10 }} 
                    mr={{ base: 0, sm: 8 }} 
                    as='nav' 
                    style={{ fontFamily: 'Poppins' }}
                    wrap="wrap"
                    justify="center"
                >
                    <Text 
                        fontSize='lg' 
                        _hover={{ color: 'purple.500', cursor: 'pointer' }}
                        onClick={() => handleNavigation('home')}
                    >
                        Home
                    </Text>
                    <Text 
                        fontSize='lg' 
                        _hover={{ color: 'purple.500', cursor: 'pointer' }}
                        onClick={() => handleNavigation('templates')}
                    >
                        Templates
                    </Text>
                    <Text 
                        fontSize='lg' 
                        _hover={{ color: 'purple.500', cursor: 'pointer' }}
                        onClick={() => handleNavigation('about')}
                    >
                        About
                    </Text>
                    <Button 
                        colorScheme={'purple'} 
                        fontWeight={'medium'}
                        onClick={() => handleNavigation('contact')}
                    >
                        Contact
                    </Button>
                </HStack>
            </Flex>
        </Stack>
    )
}

export default Navbar;