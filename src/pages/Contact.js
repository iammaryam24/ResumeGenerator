import { 
    Box, 
    Container, 
    Heading, 
    VStack, 
    FormControl, 
    FormLabel, 
    Input, 
    Textarea, 
    Button, 
    HStack, 
    Icon, 
    Text,
    Stack,
    SimpleGrid,
    Badge,
    useColorModeValue,
    Divider,
    InputGroup,
    InputLeftElement,
    Select,
    IconButton
} from '@chakra-ui/react';
import { 
    FaEnvelope, 
    FaPhone, 
    FaMapMarker, 
    FaUser, 
    FaClock, 
    FaFacebook, 
    FaTwitter, 
    FaInstagram,
    FaLinkedin,
    FaPaperPlane,
    FaCheckCircle,
    FaBuilding,
    FaGlobe
} from 'react-icons/fa';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        { 
            icon: FaEnvelope, 
            label: 'Email', 
            value: 'support@resumegen.com',
            color: 'purple.500',
            link: 'mailto:support@resumegen.com'
        },
        { 
            icon: FaPhone, 
            label: 'Phone', 
            value: '+92 300 1234567',
            color: 'green.500',
            link: 'tel:+923001234567'
        },
        { 
            icon: FaMapMarker, 
            label: 'Location', 
            value: 'Islamabad, Pakistan',
            color: 'red.500',
            link: '#'
        },
        { 
            icon: FaClock, 
            label: 'Working Hours', 
            value: 'Mon-Fri: 9AM - 6PM',
            color: 'blue.500',
            link: '#'
        },
    ];

    const socialLinks = [
        { icon: FaFacebook, label: 'Facebook', color: '#1877F2', link: '#' },
        { icon: FaTwitter, label: 'Twitter', color: '#1DA1F2', link: '#' },
        { icon: FaInstagram, label: 'Instagram', color: '#E4405F', link: '#' },
        { icon: FaLinkedin, label: 'LinkedIn', color: '#0A66C2', link: '#' },
    ];

    const bgColor = useColorModeValue('white', 'gray.700');
    const formBg = useColorModeValue('purple.50', 'gray.800');
    const textColor = useColorModeValue('gray.600', 'gray.300');
    const borderColor = useColorModeValue('gray.200', 'gray.600');

    return (
        <Box>
            {/* Hero Section */}
            <Box 
                bgGradient="linear(to-r, purple.500, pink.500)" 
                py={16}
                color="white"
                borderBottomRadius="3xl"
                mb={8}
            >
                <Container maxW="7xl">
                    <VStack spacing={4} align="center">
                        <Badge bg="white" color="purple.500" fontSize="lg" px={6} py={2} borderRadius="full">
                            Get in Touch
                        </Badge>
                        <Heading as="h1" size="3xl" textAlign="center">
                            Let's Connect
                        </Heading>
                        <Text fontSize="xl" textAlign="center" maxW="2xl" opacity="0.9">
                            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </Text>
                    </VStack>
                </Container>
            </Box>

            <Container maxW="7xl" py={8}>
                <Stack direction={{ base: 'column', lg: 'row' }} spacing={12}>
                    {/* Contact Form */}
                    <Box flex={2}>
                        <Box 
                            p={8} 
                            bg={bgColor} 
                            borderRadius="2xl" 
                            boxShadow="lg"
                            borderWidth="1px"
                            borderColor={borderColor}
                        >
                            <Heading as="h2" size="lg" mb={6}>
                                Send Us a Message
                            </Heading>
                            <Divider mb={6} />
                            
                            <form onSubmit={handleSubmit}>
                                <VStack spacing={4}>
                                    <FormControl isRequired>
                                        <FormLabel>Full Name</FormLabel>
                                        <InputGroup>
                                            <InputLeftElement pointerEvents="none">
                                                <Icon as={FaUser} color="gray.400" />
                                            </InputLeftElement>
                                            <Input 
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Your full name" 
                                                size="lg"
                                                focusBorderColor="purple.500"
                                            />
                                        </InputGroup>
                                    </FormControl>

                                    <FormControl isRequired>
                                        <FormLabel>Email Address</FormLabel>
                                        <InputGroup>
                                            <InputLeftElement pointerEvents="none">
                                                <Icon as={FaEnvelope} color="gray.400" />
                                            </InputLeftElement>
                                            <Input 
                                                name="email"
                                                type="email" 
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Your email address" 
                                                size="lg"
                                                focusBorderColor="purple.500"
                                            />
                                        </InputGroup>
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>Subject</FormLabel>
                                        <Select 
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            size="lg"
                                            focusBorderColor="purple.500"
                                            placeholder="Select a subject"
                                        >
                                            <option value="general">General Inquiry</option>
                                            <option value="support">Technical Support</option>
                                            <option value="feedback">Feedback</option>
                                            <option value="partnership">Partnership</option>
                                            <option value="other">Other</option>
                                        </Select>
                                    </FormControl>

                                    <FormControl isRequired>
                                        <FormLabel>Message</FormLabel>
                                        <Textarea 
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Your message here..." 
                                            rows={6}
                                            size="lg"
                                            focusBorderColor="purple.500"
                                        />
                                    </FormControl>

                                    <Button 
                                        type="submit" 
                                        colorScheme="purple" 
                                        size="lg" 
                                        width="100%"
                                        rightIcon={<FaPaperPlane />}
                                        _hover={{ transform: 'scale(1.02)', boxShadow: 'xl' }}
                                        transition="all 0.2s"
                                    >
                                        Send Message
                                    </Button>

                                    {isSubmitted && (
                                        <Box 
                                            p={4} 
                                            bg="green.100" 
                                            color="green.700" 
                                            borderRadius="lg"
                                            width="100%"
                                            textAlign="center"
                                        >
                                            <HStack justify="center">
                                                <Icon as={FaCheckCircle} />
                                                <Text>Thank you! Your message has been sent successfully.</Text>
                                            </HStack>
                                        </Box>
                                    )}
                                </VStack>
                            </form>
                        </Box>
                    </Box>

                    {/* Contact Information */}
                    <Box flex={1}>
                        <VStack spacing={6} align="stretch">
                            <Box 
                                p={8} 
                                bg={bgColor} 
                                borderRadius="2xl" 
                                boxShadow="lg"
                                borderWidth="1px"
                                borderColor={borderColor}
                            >
                                <Heading as="h2" size="lg" mb={6}>
                                    Contact Information
                                </Heading>
                                <Divider mb={6} />
                                
                                <VStack spacing={6} align="stretch">
                                    {contactInfo.map((info, index) => (
                                        <HStack key={index} spacing={4}>
                                            <Box 
                                                p={3} 
                                                bg={formBg} 
                                                borderRadius="lg"
                                            >
                                                <Icon as={info.icon} color={info.color} boxSize={5} />
                                            </Box>
                                            <Box>
                                                <Text fontSize="sm" color="gray.500">{info.label}</Text>
                                                <Text fontWeight="medium">{info.value}</Text>
                                            </Box>
                                        </HStack>
                                    ))}
                                </VStack>

                                <Divider my={6} />

                                <VStack align="start" spacing={4}>
                                    <Heading size="sm">Follow Us</Heading>
                                    <HStack spacing={3}>
                                        {socialLinks.map((social, index) => (
                                            <IconButton
                                                key={index}
                                                as="a"
                                                href={social.link}
                                                target="_blank"
                                                icon={<Icon as={social.icon} />}
                                                aria-label={social.label}
                                                colorScheme="gray"
                                                variant="ghost"
                                                size="lg"
                                                _hover={{ 
                                                    color: social.color, 
                                                    transform: 'scale(1.2)',
                                                    bg: 'transparent'
                                                }}
                                            />
                                        ))}
                                    </HStack>
                                </VStack>
                            </Box>

                            {/* Location Card */}
                            <Box 
                                p={8} 
                                bgGradient="linear(to-r, purple.500, pink.500)"
                                borderRadius="2xl"
                                boxShadow="lg"
                                color="white"
                            >
                                <VStack spacing={4} align="start">
                                    <Icon as={FaBuilding} boxSize={8} />
                                    <Heading size="md">Our Office</Heading>
                                    <Text opacity="0.9">
                                        <Icon as={FaMapMarker} mr={2} />
                                        Islamabad, Pakistan
                                    </Text>
                                    <Text opacity="0.9" fontSize="sm">
                                        <Icon as={FaGlobe} mr={2} />
                                        Available worldwide
                                    </Text>
                                    <Button 
                                        bg="white" 
                                        color="purple.500"
                                        width="100%"
                                        mt={4}
                                        _hover={{ transform: 'scale(1.02)' }}
                                    >
                                        Get Directions
                                    </Button>
                                </VStack>
                            </Box>
                        </VStack>
                    </Box>
                </Stack>

                {/* Map Section */}
                <Box 
                    mt={16} 
                    p={8} 
                    bg={bgColor} 
                    borderRadius="2xl" 
                    boxShadow="lg"
                    borderWidth="1px"
                    borderColor={borderColor}
                >
                    <VStack spacing={4}>
                        <Heading as="h2" size="lg" textAlign="center">
                            Find Us in Islamabad
                        </Heading>
                        <Divider />
                        <Box 
                            width="100%" 
                            height="300px" 
                            borderRadius="xl" 
                            overflow="hidden"
                            bg={formBg}
                            position="relative"
                        >
                            <Box
                                position="absolute"
                                top="50%"
                                left="50%"
                                transform="translate(-50%, -50%)"
                                textAlign="center"
                            >
                                <Icon as={FaMapMarker} color="red.500" boxSize={12} />
                                <Text fontSize="lg" fontWeight="bold" mt={2}>
                                    Islamabad, Pakistan
                                </Text>
                                <Text color="gray.500">
                                    🇵🇰 Capital City
                                </Text>
                            </Box>
                        </Box>
                    </VStack>
                </Box>

                {/* FAQ Section */}
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mt={16}>
                    <Box p={6} bg={bgColor} borderRadius="xl" boxShadow="md">
                        <VStack align="start" spacing={3}>
                            <Icon as={FaCheckCircle} color="purple.500" boxSize={6} />
                            <Heading size="md">Quick Response</Heading>
                            <Text color="gray.600">
                                We typically respond within 24 hours during business days.
                            </Text>
                        </VStack>
                    </Box>
                    <Box p={6} bg={bgColor} borderRadius="xl" boxShadow="md">
                        <VStack align="start" spacing={3}>
                            <Icon as={FaCheckCircle} color="purple.500" boxSize={6} />
                            <Heading size="md">Free Support</Heading>
                            <Text color="gray.600">
                                All our support services are completely free for our users.
                            </Text>
                        </VStack>
                    </Box>
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default Contact;