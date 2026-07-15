import { 
    Box, 
    Container, 
    Heading, 
    Text, 
    Button, 
    Stack, 
    Image, 
    SimpleGrid, 
    Icon, 
    VStack,
    useColorModeValue,
    HStack,
    Badge,
    Divider
} from '@chakra-ui/react';
import { 
    FaRocket, 
    FaDownload, 
    FaPrint, 
    FaPalette, 
    FaShieldAlt, 
    FaUsers,
    FaFileAlt,
    FaClock,
    FaCheckCircle,
    FaArrowRight
} from 'react-icons/fa';

const Home = () => {
    const features = [
        { icon: FaPalette, title: 'Beautiful Templates', desc: 'Choose from 50+ professionally designed templates' },
        { icon: FaDownload, title: 'Easy Download', desc: 'Export your resume as PDF with one click' },
        { icon: FaPrint, title: 'Print Ready', desc: 'Print your resume directly from the browser' },
        { icon: FaShieldAlt, title: 'Privacy First', desc: 'Your data stays on your device, 100% secure' },
        { icon: FaClock, title: 'Quick Build', desc: 'Create a professional resume in under 10 minutes' },
        { icon: FaUsers, title: 'Expert Tips', desc: 'Get tips and examples from hiring experts' },
    ];

    const stats = [
        { number: '50+', label: 'Templates' },
        { number: '10K+', label: 'Users' },
        { number: '4.8', label: 'Rating' },
        { number: '100%', label: 'Free' },
    ];

    return (
        <Box>
            {/* Hero Section */}
            <Box 
                bg={useColorModeValue('purple.50', 'purple.900')} 
                py={20}
                borderBottomRadius="3xl"
            >
                <Container maxW="7xl">
                    <Stack direction={{ base: 'column', lg: 'row' }} spacing={12} align="center">
                        <Box flex={1}>
                            <Badge colorScheme="purple" fontSize="md" mb={4} px={4} py={2} borderRadius="full">
                                🎯 #1 Resume Builder
                            </Badge>
                            <Heading as="h1" size="3xl" lineHeight="1.2" mb={6}>
                                If You Want To Get <br />
                                <Text as="span" color="purple.500" position="relative">
                                    Gaining, Get A Resume
                                    <Box 
                                        position="absolute" 
                                        bottom="-5px" 
                                        left="0" 
                                        width="100%" 
                                        height="4px" 
                                        bg="purple.500" 
                                        borderRadius="full"
                                        opacity="0.3"
                                    />
                                </Text>
                            </Heading>
                            <Text fontSize="xl" color="gray.600" mb={8} maxW="xl">
                                Resumegen helps you create professional, ATS-friendly resumes in minutes. 
                                No design skills needed. Start building your dream career today!
                            </Text>
                            <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
                                <Button 
                                    colorScheme="purple" 
                                    size="lg" 
                                    rightIcon={<FaArrowRight />}
                                    _hover={{ transform: 'translateY(-2px)', boxShadow: 'xl' }}
                                >
                                    Build Resume Now
                                </Button>
                                <Button 
                                    variant="outline" 
                                    size="lg"
                                    rightIcon={<FaFileAlt />}
                                    _hover={{ transform: 'translateY(-2px)' }}
                                >
                                    View Examples
                                </Button>
                            </Stack>
                            
                            <HStack spacing={8} mt={10}>
                                <HStack>
                                    <Icon as={FaCheckCircle} color="green.500" />
                                    <Text>Free to use</Text>
                                </HStack>
                                <HStack>
                                    <Icon as={FaCheckCircle} color="green.500" />
                                    <Text>No sign-up</Text>
                                </HStack>
                                <HStack>
                                    <Icon as={FaCheckCircle} color="green.500" />
                                    <Text>Instant download</Text>
                                </HStack>
                            </HStack>
                        </Box>
                        <Box flex={1}>
                            <Image 
                                src="https://via.placeholder.com/600x450/9b59b6/ffffff?text=Resume+Builder" 
                                alt="Resume Builder"
                                borderRadius="2xl"
                                boxShadow="2xl"
                                _hover={{ transform: 'scale(1.02)', transition: '0.3s' }}
                            />
                        </Box>
                    </Stack>
                </Container>
            </Box>

            {/* Stats Section */}
            <Container maxW="7xl" py={16}>
                <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
                    {stats.map((stat, index) => (
                        <Box key={index} textAlign="center">
                            <Heading as="h2" size="3xl" color="purple.500">{stat.number}</Heading>
                            <Text fontSize="lg" color="gray.600" fontWeight="medium">{stat.label}</Text>
                        </Box>
                    ))}
                </SimpleGrid>
            </Container>

            {/* Features Section */}
            <Box bg={useColorModeValue('gray.50', 'gray.800')} py={16}>
                <Container maxW="7xl">
                    <VStack spacing={4} mb={12}>
                        <Badge colorScheme="purple" fontSize="md" px={4} py={2} borderRadius="full">
                            Why Choose Resumegen
                        </Badge>
                        <Heading as="h2" size="2xl" textAlign="center">
                            Powerful Features for Your Resume
                        </Heading>
                        <Text fontSize="lg" color="gray.600" textAlign="center" maxW="2xl">
                            Everything you need to create a standout resume that gets noticed
                        </Text>
                    </VStack>
                    
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                        {features.map((feature, index) => (
                            <Box 
                                key={index}
                                p={6}
                                bg="white"
                                borderRadius="xl"
                                boxShadow="md"
                                borderWidth="1px"
                                borderColor="gray.100"
                                _hover={{ 
                                    transform: 'translateY(-4px)',
                                    boxShadow: 'xl',
                                    borderColor: 'purple.300'
                                }}
                                transition="all 0.3s"
                            >
                                <Icon as={feature.icon} color="purple.500" boxSize={10} mb={4} />
                                <Heading as="h3" size="md" mb={3}>{feature.title}</Heading>
                                <Text color="gray.600">{feature.desc}</Text>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Container>
            </Box>

            {/* CTA Section */}
            <Box py={16}>
                <Container maxW="7xl">
                    <Box 
                        bgGradient="linear(to-r, purple.500, pink.500)" 
                        color="white"
                        borderRadius="2xl"
                        overflow="hidden"
                        p={10}
                    >
                        <Stack direction={{ base: 'column', md: 'row' }} spacing={8} align="center" justify="space-between">
                            <VStack align={{ base: 'center', md: 'start' }} spacing={4}>
                                <Heading size="xl">Ready to Build Your Resume?</Heading>
                                <Text fontSize="lg" opacity="0.9">
                                    Join thousands of users who've found their dream jobs
                                </Text>
                            </VStack>
                            <Button 
                                bg="white" 
                                color="purple.500"
                                size="lg"
                                rightIcon={<FaRocket />}
                                _hover={{ bg: 'gray.100', transform: 'scale(1.05)' }}
                            >
                                Get Started Free
                            </Button>
                        </Stack>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default Home;