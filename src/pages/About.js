import { 
    Box, 
    Container, 
    Heading, 
    Text, 
    Stack, 
    VStack, 
    Avatar, 
    HStack,
    SimpleGrid,
    Icon,
    useColorModeValue,
    Badge,
    Image,
    Divider,
    Button,
    IconButton
} from '@chakra-ui/react';
import { 
    FaRocket, 
    FaUsers, 
    FaAward, 
    FaLightbulb,
    FaHandshake,
    FaGlobe,
    FaCheckCircle,
    FaQuoteLeft,
    FaGithub,
    FaLinkedin,
    FaEnvelope
} from 'react-icons/fa';

const About = () => {
    // Move useColorModeValue to the component level
    const bgColor = useColorModeValue('white', 'gray.700');
    const cardBg = useColorModeValue('white', 'gray.700');
    const textColor = useColorModeValue('gray.600', 'gray.300');
    const sectionBg = useColorModeValue('gray.50', 'gray.800');
    const valueBg = useColorModeValue('white', 'gray.700');
    const missionBg = useColorModeValue('white', 'gray.700');

    const teamMembers = [
        { 
            name: 'Maryam', 
            role: 'Lead Developer', 
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
            bio: 'Passionate about creating user-friendly tools and innovative solutions',
            github: 'https://github.com/iammaryam24',
            linkedin: 'https://www.linkedin.com/in/iammaryam24'
        },
    ];

    const values = [
        { icon: FaLightbulb, title: 'Innovation', desc: 'Continuously improving with latest design trends' },
        { icon: FaHandshake, title: 'Trust', desc: 'Your data privacy is our top priority' },
        { icon: FaUsers, title: 'Accessibility', desc: 'Free for everyone, anywhere in the world' },
        { icon: FaAward, title: 'Quality', desc: 'Professionally designed, ATS-friendly templates' },
    ];

    const achievements = [
        { number: '50+', label: 'Templates Available' },
        { number: '10K+', label: 'Active Users' },
        { number: '4.8', label: 'User Rating' },
        { number: '100K+', label: 'Resumes Created' },
    ];

    const services = [
        { title: 'Resume Builder', desc: 'Create professional resumes in minutes' },
        { title: 'Template Library', desc: 'Access 50+ professionally designed templates' },
        { title: 'PDF Export', desc: 'Download your resume as PDF instantly' },
        { title: 'Print Ready', desc: 'Print your resume directly from browser' },
    ];

    return (
        <Box>
            {/* Hero Section */}
            <Box 
                bgGradient="linear(to-r, purple.50, pink.50)" 
                py={20}
                borderBottomRadius="3xl"
            >
                <Container maxW="7xl">
                    <VStack spacing={6} align="center">
                        <Badge colorScheme="purple" fontSize="lg" px={6} py={2} borderRadius="full">
                            About Resumegen
                        </Badge>
                        <Heading as="h1" size="3xl" textAlign="center">
                            Who We Are
                        </Heading>
                        <Text fontSize="xl" textAlign="center" maxW="3xl" color="gray.600">
                            Resumegen was born from the belief that everyone deserves a professional resume.
                            We're passionate about helping job seekers stand out and land their dream roles.
                        </Text>
                        <Button colorScheme="purple" size="lg" mt={4}>
                            Get Started Free
                        </Button>
                    </VStack>
                </Container>
            </Box>

            {/* Our Story Section */}
            <Container maxW="7xl" py={16}>
                <Stack direction={{ base: 'column', lg: 'row' }} spacing={12} align="center">
                    <Box flex={1}>
                        <Image 
                            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop" 
                            alt="Our Story"
                            borderRadius="2xl"
                            boxShadow="2xl"
                            _hover={{ transform: 'scale(1.02)', transition: '0.3s' }}
                        />
                    </Box>
                    <Box flex={1}>
                        <Badge colorScheme="purple" mb={4} fontSize="md">Our Story</Badge>
                        <Heading as="h2" size="xl" mb={4}>
                            Building a Better Future, One Resume at a Time
                        </Heading>
                        <Text fontSize="lg" color="gray.600" mb={6}>
                            Founded in 2022, Resumegen started as a passion project to help friends and 
                            family create professional resumes. Today, we've grown into a platform trusted 
                            by thousands of users worldwide.
                        </Text>
                        <Stack spacing={3}>
                            <HStack>
                                <Icon as={FaCheckCircle} color="purple.500" boxSize={5} />
                                <Text>500+ hours of design research</Text>
                            </HStack>
                            <HStack>
                                <Icon as={FaCheckCircle} color="purple.500" boxSize={5} />
                                <Text>50+ unique templates designed</Text>
                            </HStack>
                            <HStack>
                                <Icon as={FaCheckCircle} color="purple.500" boxSize={5} />
                                <Text>100,000+ resumes created by users</Text>
                            </HStack>
                        </Stack>
                    </Box>
                </Stack>
            </Container>

            {/* Services Section */}
            <Box bg={sectionBg} py={16}>
                <Container maxW="7xl">
                    <VStack spacing={4} mb={12}>
                        <Badge colorScheme="purple" fontSize="md" px={4} py={2} borderRadius="full">
                            What We Offer
                        </Badge>
                        <Heading as="h2" size="2xl" textAlign="center">
                            Our Services
                        </Heading>
                        <Text fontSize="lg" color="gray.600" textAlign="center" maxW="2xl">
                            Everything you need to create a standout resume
                        </Text>
                    </VStack>
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
                        {services.map((service, index) => (
                            <Box 
                                key={index}
                                p={6}
                                bg={cardBg}
                                borderRadius="xl"
                                boxShadow="md"
                                textAlign="center"
                                borderWidth="1px"
                                borderColor="gray.100"
                                _hover={{ 
                                    transform: 'translateY(-4px)', 
                                    transition: '0.3s', 
                                    boxShadow: 'lg',
                                    borderColor: 'purple.300'
                                }}
                            >
                                <Icon as={FaCheckCircle} color="purple.500" boxSize={8} mb={4} />
                                <Heading size="md" mb={2}>{service.title}</Heading>
                                <Text color="gray.600">{service.desc}</Text>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Container>
            </Box>

            {/* Our Values */}
            <Container maxW="7xl" py={16}>
                <VStack spacing={4} mb={12}>
                    <Badge colorScheme="purple" fontSize="md" px={4} py={2} borderRadius="full">
                        Our Values
                    </Badge>
                    <Heading as="h2" size="2xl" textAlign="center">
                        What Drives Us
                    </Heading>
                    <Text fontSize="lg" color="gray.600" textAlign="center" maxW="2xl">
                        The principles that guide everything we do
                    </Text>
                </VStack>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
                    {values.map((value, index) => (
                        <Box 
                            key={index}
                            p={6}
                            bg={valueBg}
                            borderRadius="xl"
                            boxShadow="md"
                            textAlign="center"
                            _hover={{ transform: 'translateY(-4px)', transition: '0.3s', boxShadow: 'lg' }}
                        >
                            <Icon as={value.icon} color="purple.500" boxSize={12} mb={4} />
                            <Heading size="md" mb={2}>{value.title}</Heading>
                            <Text color="gray.600">{value.desc}</Text>
                        </Box>
                    ))}
                </SimpleGrid>
            </Container>

            {/* Achievements */}
            <Box bg={useColorModeValue('purple.50', 'purple.900')} py={16}>
                <Container maxW="7xl">
                    <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
                        {achievements.map((item, index) => (
                            <Box key={index} textAlign="center">
                                <Heading as="h2" size="3xl" color="purple.500">{item.number}</Heading>
                                <Text fontSize="lg" color={textColor}>{item.label}</Text>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Container>
            </Box>

            {/* Mission & Vision */}
            <Container maxW="7xl" py={16}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                    <Box 
                        p={8} 
                        bg={missionBg} 
                        borderRadius="2xl" 
                        boxShadow="md"
                        borderWidth="1px"
                        borderColor="purple.100"
                        _hover={{ transform: 'translateY(-4px)', transition: '0.3s', boxShadow: 'lg' }}
                    >
                        <Icon as={FaRocket} color="purple.500" boxSize={12} mb={4} />
                        <Heading size="lg" mb={3}>Our Mission</Heading>
                        <Text fontSize="lg" color="gray.600">
                            To empower every job seeker with the tools they need to present their 
                            professional story effectively and confidently, helping them land their dream roles.
                        </Text>
                    </Box>
                    <Box 
                        p={8} 
                        bg={missionBg} 
                        borderRadius="2xl" 
                        boxShadow="md"
                        borderWidth="1px"
                        borderColor="purple.100"
                        _hover={{ transform: 'translateY(-4px)', transition: '0.3s', boxShadow: 'lg' }}
                    >
                        <Icon as={FaGlobe} color="purple.500" boxSize={12} mb={4} />
                        <Heading size="lg" mb={3}>Our Vision</Heading>
                        <Text fontSize="lg" color="gray.600">
                            To become the world's leading platform for resume building and 
                            career development, accessible to everyone, everywhere, at no cost.
                        </Text>
                    </Box>
                </SimpleGrid>
            </Container>

            {/* Team Section - Only Maryam */}
            <Box bg={sectionBg} py={16}>
                <Container maxW="7xl">
                    <VStack spacing={4} mb={12}>
                        <Badge colorScheme="purple" fontSize="md" px={4} py={2} borderRadius="full">
                            Meet the Creator
                        </Badge>
                        <Heading as="h2" size="2xl" textAlign="center">
                            Behind Resumegen
                        </Heading>
                        <Text fontSize="lg" color="gray.600" textAlign="center" maxW="2xl">
                            Passionate developer dedicated to making resume building simple and accessible
                        </Text>
                    </VStack>
                    
                    <Box 
                        p={8}
                        bg={cardBg}
                        borderRadius="2xl"
                        boxShadow="xl"
                        maxW="md"
                        mx="auto"
                        textAlign="center"
                        borderWidth="1px"
                        borderColor="purple.100"
                        _hover={{ transform: 'scale(1.02)', transition: '0.3s', boxShadow: '2xl' }}
                    >
                        <Avatar 
                             size="2xl" 
                            name="MARYAM" 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzCYr5UwalpS9-QYSp5Lf_O9BArKKS_pxl0HIoDv0lCILpi-nCcTsDLF0&s=10"
                            mb={6}
                            mx="auto"
                            boxSize="150px"
                        />
                        <Heading size="xl" mb={2}>Maryam</Heading>
                        <Text color="purple.500" fontWeight="bold" fontSize="lg" mb={4}>
                            Lead Developer
                        </Text>
                        <Text color="gray.600" mb={6} fontSize="md">
                            Passionate about creating user-friendly tools and innovative solutions.
                            Committed to building products that make a real difference in people's lives.
                        </Text>
                        
                        <Divider mb={6} />
                        
                        <HStack spacing={4} justify="center">
                            <IconButton
                                as="a"
                                href="https://github.com/iammaryam24"
                                target="_blank"
                                icon={<FaGithub />}
                                aria-label="GitHub"
                                colorScheme="purple"
                                variant="ghost"
                                size="lg"
                                _hover={{ transform: 'scale(1.2)', color: 'purple.500' }}
                            />
                            <IconButton
                                as="a"
                                href="https://www.linkedin.com/in/iammaryam24"
                                target="_blank"
                                icon={<FaLinkedin />}
                                aria-label="LinkedIn"
                                colorScheme="linkedin"
                                variant="ghost"
                                size="lg"
                                _hover={{ transform: 'scale(1.2)', color: 'blue.600' }}
                            />
                            <IconButton
                                as="a"
                                href="mailto:maryam@example.com"
                                icon={<FaEnvelope />}
                                aria-label="Email"
                                colorScheme="purple"
                                variant="ghost"
                                size="lg"
                                _hover={{ transform: 'scale(1.2)', color: 'purple.500' }}
                            />
                        </HStack>
                    </Box>
                </Container>
            </Box>

            {/* Testimonial */}
            <Box 
                bgGradient="linear(to-r, purple.500, pink.500)" 
                py={16}
                color="white"
            >
                <Container maxW="4xl">
                    <VStack spacing={6} align="center">
                        <Icon as={FaQuoteLeft} boxSize={16} opacity="0.5" />
                        <Text fontSize="2xl" textAlign="center" fontStyle="italic">
                            "Resumegen transformed my job search. I created a professional resume in minutes 
                            and got interviews at my top companies. Truly life-changing!"
                        </Text>
                        <Text fontSize="lg" fontWeight="bold">- Sarah Johnson, Software Engineer</Text>
                        <HStack spacing={2}>
                            {[1,2,3,4,5].map((star) => (
                                <Icon key={star} as={FaCheckCircle} boxSize={5} />
                            ))}
                        </HStack>
                    </VStack>
                </Container>
            </Box>

            {/* CTA Section */}
            <Container maxW="7xl" py={16}>
                <Box 
                    bg={useColorModeValue('purple.50', 'purple.900')}
                    p={10}
                    borderRadius="2xl"
                    textAlign="center"
                    borderWidth="1px"
                    borderColor="purple.200"
                >
                    <Heading as="h2" size="xl" mb={4}>
                        Ready to Build Your Resume?
                    </Heading>
                    <Text fontSize="lg" color="gray.600" mb={6} maxW="2xl" mx="auto">
                        Join thousands of satisfied users and create your professional resume today
                    </Text>
                    <Button colorScheme="purple" size="lg" rightIcon={<FaRocket />}>
                        Get Started Now
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default About;