import { 
    Container, 
    Heading, 
    Text, 
    SimpleGrid, 
    Box,
    Image, 
    Button, 
    Stack,
    Badge,
    VStack,
    HStack,
    useColorModeValue,
    Icon
} from '@chakra-ui/react';
import { FaStar, FaEye, FaDownload, FaPalette, FaCheckCircle } from 'react-icons/fa';
import { useState } from 'react';

const Templates = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    
    // Move useColorModeValue to the component level
    const bgColor = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('gray.200', 'gray.700');
    const featureBg = useColorModeValue('purple.50', 'purple.900');

    const templateCategories = ['All', 'Modern', 'Classic', 'Creative', 'Minimal', 'Professional', 'Elegant'];

    const templates = [
        { 
            id: 1, 
            name: 'Executive Pro',
            category: 'Professional',
            color: '#2C3E50',
            accent: '#3498DB',
            image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=500&fit=crop',
            rating: 4.9,
            downloads: '2.5K',
            badges: ['Popular', 'ATS Friendly']
        },
        { 
            id: 2, 
            name: 'Creative Flow',
            category: 'Creative',
            color: '#6C3483',
            accent: '#F39C12',
            image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=500&fit=crop',
            rating: 4.8,
            downloads: '1.8K',
            badges: ['Trending']
        },
        { 
            id: 3, 
            name: 'Minimal Clear',
            category: 'Minimal',
            color: '#FFFFFF',
            accent: '#34495E',
            image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=500&fit=crop&grayscale',
            rating: 4.7,
            downloads: '3.2K',
            badges: ['Popular', 'Clean']
        },
        { 
            id: 4, 
            name: 'Classic Elegance',
            category: 'Classic',
            color: '#F5F5DC',
            accent: '#8B4513',
            image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=500&fit=crop',
            rating: 4.6,
            downloads: '1.2K',
            badges: ['Classic']
        },
        { 
            id: 5, 
            name: 'Tech Innovator',
            category: 'Modern',
            color: '#1A1A2E',
            accent: '#00D2FF',
            image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=400&h=500&fit=crop',
            rating: 4.9,
            downloads: '4.1K',
            badges: ['Popular', 'Best Seller']
        },
        { 
            id: 6, 
            name: 'Floral Elegance',
            category: 'Elegant',
            color: '#F8E8E8',
            accent: '#E8B4B8',
            image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=500&fit=crop',
            rating: 4.5,
            downloads: '890',
            badges: ['New']
        },
        { 
            id: 7, 
            name: 'Modern Executive',
            category: 'Modern',
            color: '#2D3436',
            accent: '#6C5CE7',
            image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=500&fit=crop',
            rating: 4.7,
            downloads: '3.5K',
            badges: ['Popular']
        },
        { 
            id: 8, 
            name: 'Creative Portfolio',
            category: 'Creative',
            color: '#FF6B6B',
            accent: '#4ECDC4',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=500&fit=crop',
            rating: 4.8,
            downloads: '2.9K',
            badges: ['Trending', 'New']
        },
        { 
            id: 9, 
            name: 'Clean Professional',
            category: 'Professional',
            color: '#F8F9FA',
            accent: '#2C3E50',
            image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=500&fit=crop',
            rating: 4.6,
            downloads: '2.1K',
            badges: ['Clean']
        },
        { 
            id: 10, 
            name: 'Corporate Blue',
            category: 'Professional',
            color: '#1a365d',
            accent: '#3182ce',
            image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=500&fit=crop',
            rating: 4.7,
            downloads: '3.8K',
            badges: ['Popular']
        },
        { 
            id: 11, 
            name: 'Modern Clean',
            category: 'Minimal',
            color: '#f7fafc',
            accent: '#2d3748',
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=500&fit=crop',
            rating: 4.6,
            downloads: '2.3K',
            badges: ['Clean', 'Modern']
        },
        { 
            id: 12, 
            name: 'Creative Artist',
            category: 'Creative',
            color: '#FF6B6B',
            accent: '#feca57',
            image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=400&h=500&fit=crop',
            rating: 4.8,
            downloads: '1.9K',
            badges: ['Trending']
        },
    ];

    const filteredTemplates = selectedCategory === 'all' 
        ? templates 
        : templates.filter(t => t.category.toLowerCase() === selectedCategory.toLowerCase());

    // This is now a regular function, not using hooks
    const getColorPalette = (mainColor, accentColor) => {
        return (
            <HStack spacing={2} justify="center" mt={2}>
                <Box w="6" h="6" borderRadius="full" bg={mainColor} border="1px" borderColor={borderColor} />
                <Box w="6" h="6" borderRadius="full" bg={accentColor} border="1px" borderColor={borderColor} />
                <Box w="6" h="6" borderRadius="full" bg="gray.100" border="1px" borderColor={borderColor} />
            </HStack>
        );
    };

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
                    <VStack spacing={6} align="center">
                        <Badge bg="white" color="purple.500" fontSize="lg" px={6} py={2} borderRadius="full">
                            <HStack>
                                <Icon as={FaPalette} />
                                <Text>50+ Professional Templates</Text>
                            </HStack>
                        </Badge>
                        <Heading as="h1" size="3xl" textAlign="center">
                            Choose Your Perfect Template
                        </Heading>
                        <Text fontSize="xl" textAlign="center" maxW="2xl" opacity="0.9">
                            Select from our collection of professionally designed, ATS-friendly templates
                            that will make your resume stand out
                        </Text>
                    </VStack>
                </Container>
            </Box>

            {/* Templates Section */}
            <Container maxW="7xl" py={8}>
                {/* Categories */}
                <Stack spacing={6}>
                    <Box overflowX="auto">
                        <HStack spacing={3} mb={8} justify="center" wrap="wrap">
                            {templateCategories.map((category) => (
                                <Button
                                    key={category}
                                    onClick={() => setSelectedCategory(category.toLowerCase())}
                                    colorScheme={selectedCategory === category.toLowerCase() ? 'purple' : 'gray'}
                                    variant={selectedCategory === category.toLowerCase() ? 'solid' : 'outline'}
                                    size="md"
                                    borderRadius="full"
                                    px={6}
                                >
                                    {category}
                                </Button>
                            ))}
                        </HStack>
                    </Box>

                    {/* Templates Grid */}
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                        {filteredTemplates.map((template) => (
                            <Box 
                                key={template.id}
                                bg={bgColor}
                                borderRadius="2xl"
                                overflow="hidden"
                                boxShadow="md"
                                _hover={{ 
                                    transform: 'translateY(-8px)',
                                    boxShadow: '2xl',
                                    transition: 'all 0.3s'
                                }}
                            >
                                <Box position="relative">
                                    <Image 
                                        src={template.image} 
                                        alt={template.name}
                                        w="100%"
                                        h="280px"
                                        objectFit="cover"
                                        fallbackSrc="https://via.placeholder.com/400x500/9b59b6/ffffff?text=Resume+Template"
                                    />
                                    <HStack position="absolute" top={3} left={3} spacing={2}>
                                        {template.badges.map((badge, idx) => (
                                            <Badge key={idx} colorScheme="purple" bg="white" color="purple.500" px={3} py={1} borderRadius="full">
                                                {badge}
                                            </Badge>
                                        ))}
                                    </HStack>
                                </Box>

                                <Box p={6}>
                                    <VStack align="start" spacing={3}>
                                        <Heading size="md">{template.name}</Heading>
                                        <Badge colorScheme="purple">{template.category}</Badge>
                                        
                                        {getColorPalette(template.color, template.accent)}

                                        <HStack spacing={4} color="gray.500">
                                            <HStack>
                                                <Icon as={FaStar} color="yellow.400" />
                                                <Text>{template.rating}</Text>
                                            </HStack>
                                            <HStack>
                                                <Icon as={FaDownload} />
                                                <Text>{template.downloads}</Text>
                                            </HStack>
                                        </HStack>
                                    </VStack>
                                </Box>

                                <Box p={6} pt={0}>
                                    <Button 
                                        colorScheme="purple" 
                                        w="100%"
                                        rightIcon={<FaEye />}
                                        _hover={{ transform: 'scale(1.02)' }}
                                    >
                                        Preview Template
                                    </Button>
                                </Box>
                            </Box>
                        ))}
                    </SimpleGrid>

                    {/* No templates message */}
                    {filteredTemplates.length === 0 && (
                        <VStack py={16}>
                            <Text fontSize="xl">No templates found in this category</Text>
                            <Button colorScheme="purple" onClick={() => setSelectedCategory('all')}>
                                View All Templates
                            </Button>
                        </VStack>
                    )}
                </Stack>

                {/* Features Banner */}
                <Box mt={16} p={8} bg={featureBg} borderRadius="2xl">
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                        <HStack>
                            <Icon as={FaStar} color="purple.500" boxSize={8} />
                            <Box>
                                <Heading size="sm">High Quality</Heading>
                                <Text fontSize="sm" color="gray.600">Professionally designed templates</Text>
                            </Box>
                        </HStack>
                        <HStack>
                            <Icon as={FaCheckCircle} color="purple.500" boxSize={8} />
                            <Box>
                                <Heading size="sm">ATS Friendly</Heading>
                                <Text fontSize="sm" color="gray.600">Pass automated screening systems</Text>
                            </Box>
                        </HStack>
                        <HStack>
                            <Icon as={FaDownload} color="purple.500" boxSize={8} />
                            <Box>
                                <Heading size="sm">Free Download</Heading>
                                <Text fontSize="sm" color="gray.600">No hidden charges</Text>
                            </Box>
                        </HStack>
                    </SimpleGrid>
                </Box>
            </Container>
        </Box>
    );
};

export default Templates;