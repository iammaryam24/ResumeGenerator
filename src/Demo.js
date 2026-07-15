import {
    Box,
    Container,
    Stack,
    Text,
    Link,
    Button,
    Badge,
    useColorModeValue,
} from '@chakra-ui/react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

function App() {
    const printElem = useRef();

    const generateResume = () => {
        console.log("works")

        const resume = document.getElementById("resume");
        html2canvas(resume)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4');
                var width = pdf.internal.pageSize.getWidth();
                var height = pdf.internal.pageSize.getHeight();
                pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
                pdf.save("resume.pdf");
            }).catch((error) => console.log(error));
        window.print();
    }

    const handlePrint = useReactToPrint({
        content: () => printElem.current,
    });

    return (
        <>
            <Box
                bg={useColorModeValue('purple.50', 'purple.900')}
                color={useColorModeValue('purple.800', 'purple.100')}
                maxW={'3xl'}
                id="resume"
                ref={printElem}
                p={4}
                borderRadius="lg"
                boxShadow="lg"
                border="1px"
                borderColor={useColorModeValue('purple.200', 'purple.700')}>

                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}
                    borderBottom="1px"
                    borderColor={useColorModeValue('purple.200', 'purple.700')}
                    mb={4}>
                    <Stack direction={'row'} spacing={6}>
                        <Link href={'#'} color={useColorModeValue('purple.600', 'purple.300')} fontWeight="bold">Home</Link>
                        <Link href={'#'} color={useColorModeValue('purple.600', 'purple.300')} fontWeight="bold">About</Link>
                        <Link href={'#'} color={useColorModeValue('purple.600', 'purple.300')} fontWeight="bold">Blog</Link>
                        <Link href={'#'} color={useColorModeValue('purple.600', 'purple.300')} fontWeight="bold">Contact</Link>
                    </Stack>
                    <Text fontWeight="medium">© 2022 JS. All rights reserved</Text>
                </Container>

                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}
                    borderBottom="1px"
                    borderColor={useColorModeValue('purple.200', 'purple.700')}
                    mb={4}>
                    <Stack direction={'row'} spacing={6}>
                        <Link href={'#'} color={useColorModeValue('purple.600', 'purple.300')} fontWeight="bold">Home</Link>
                        <Link href={'#'} color={useColorModeValue('purple.600', 'purple.300')} fontWeight="bold">About</Link>
                        <Link href={'#'} color={useColorModeValue('purple.600', 'purple.300')} fontWeight="bold">Blog</Link>
                        <Link href={'#'} color={useColorModeValue('purple.600', 'purple.300')} fontWeight="bold">Contact</Link>
                    </Stack>
                    <Text fontWeight="medium">© 2022 JS. All rights reserved</Text>
                </Container>

                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}
                    borderBottom="1px"
                    borderColor={useColorModeValue('purple.200', 'purple.700')}
                    mb={4}>
                    <Stack direction={'row'} spacing={6}>
                        <Link href={'#'} color={useColorModeValue('purple.600', 'purple.300')} fontWeight="bold">Home</Link>
                        <Link href={'#'} color={useColorModeValue('purple.600', 'purple.300')} fontWeight="bold">About</Link>
                        <Link href={'#'} color={useColorModeValue('purple.600', 'purple.300')} fontWeight="bold">Blog</Link>
                        <Link href={'#'} color={useColorModeValue('purple.600', 'purple.300')} fontWeight="bold">Contact</Link>
                    </Stack>
                    <Text fontWeight="medium">© 2022 JS. All rights reserved</Text>
                </Container>

                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}
                    borderBottom="1px"
                    borderColor={useColorModeValue('purple.200', 'purple.700')}
                    mb={4}>
                    <Stack direction={'row'} spacing={6}>
                        <Link href={'#'} color={useColorModeValue('purple.600', 'purple.300')} fontWeight="bold">Home</Link>
                        <Link href={'#'} color={useColorModeValue('purple.600', 'purple.300')} fontWeight="bold">About</Link>
                        <Link href={'#'} color={useColorModeValue('purple.600', 'purple.300')} fontWeight="bold">Blog</Link>
                        <Link href={'#'} color={useColorModeValue('purple.600', 'purple.300')} fontWeight="bold">Contact</Link>
                    </Stack>
                    <Text fontWeight="medium">© 2022 JS. All rights reserved</Text>
                </Container>

                <Stack direction='row' spacing={2} justifyContent="center" mt={4}>
                    <Badge colorScheme='purple'>Default</Badge>
                    <Badge colorScheme='green'>Success</Badge>
                    <Badge colorScheme='red'>Removed</Badge>
                    <Badge colorScheme='purple'>New</Badge>
                </Stack>

            </Box>

            <Stack direction="row" spacing={4} justifyContent="center" mt={6}>
                <Button 
                    onClick={handlePrint} 
                    colorScheme="purple" 
                    size="lg"
                    _hover={{ transform: 'scale(1.05)' }}
                    transition="all 0.2s">
                    Print Resume
                </Button>
                <Button 
                    onClick={generateResume} 
                    colorScheme="teal" 
                    size="lg"
                    _hover={{ transform: 'scale(1.05)' }}
                    transition="all 0.2s">
                    Download PDF
                </Button>
            </Stack>
        </>
    );
}

export default App;