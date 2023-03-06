

import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useState } from 'react';
import Footer from './Footer';
import Founder from './founder';
import Question from './question';
import { useSelector } from 'react-redux';
import About_marathi from './marathi/About_marathi';
  
  export default function About() {
    const {lang}=useSelector((state)=>state)



const [show,setshow]=useState(false)

const Para=()=>{
    setshow(show?false:true)
}

 if(lang==="English"){
  return (
    <Box>
    
    
    <Container maxW={'6xl'}>
    
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'red.400',
                zIndex: -1,
              }}>
              About Us,
            </Text>
            <br />
            <Text as={'span'} color={'red.400'}>
              Our Aim!
            </Text>
          </Heading>
          <Text textAlign={'justify'} color={'gray.500'}>
          Dear students of Jalgaon District in Maharashtra,
          Are you looking for job opportunities in the BPO sector after completing your HSC or equivalent course? If yes, then you are at the right place.
          
          {show?
              <Text color={'gray.500'}>
              The BPO industry is one of the leading industries in India and offers numerous job opportunities for young and dynamic individuals like you. However, we understand that many of you may not be aware of the job opportunities available in this industry.
  At AS Consultancy, we have conducted ground-level research in the Jalgaon district and discovered that many individuals are not aware of the available job opportunities in the BPO sector. Therefore, we have decided to step in and bring these opportunities to you. Our aim is to help you make a career in the BPO industry and secure jobs that pay handsome salaries.
  <br/> 
  <hr/>
  <br/>
  <Heading color={"black"}>
  Why Choose a Career in the BPO Industry?
  </Heading>
  <Text pt={'5px'}>
  The BPO industry is an important part of the Indian economy and has seen tremendous growth over the years. The industry has played a significant role in creating job opportunities for thousands of individuals and has contributed to the growth of the Indian economy. The BPO industry provides various job opportunities ranging from customer service, technical support, data entry, and back-office support to name a few.
  <br/>
  </Text>
  <hr/>
  <br/>
  <Heading color={"black"}>
  What to Expect from the BPO Industry?
  </Heading>
  <Text pt={'5px'}>
  The BPO industry is known for providing job opportunities to candidates with varied backgrounds and skill sets. It provides a platform for young and dynamic individuals to explore their potential and achieve their career goals. The industry is known for its employee-friendly policies, which provide a healthy work-life balance and opportunities for professional growth.The BPO industry offers various job roles, including customer service, technical support, sales, back-office support, and data entry. These job roles require different skill sets and offer various opportunities for professional growth. The industry is also known for providing competitive salaries and other benefits such as health insurance, transportation facilities, and retirement benefits.
  </Text>
  <hr/>
  <br/>
  <Heading color={"black"}>
  How Can AS Consultancy Help You?
  </Heading>
  <Text pt={'5px'}>
  At AS Consultancy, we are committed to bringing job opportunities to our beloved Jalgaon district. We understand the challenges faced by individuals in finding the right job opportunities and hence we are here to help you. We work with various BPO companies and have a wide network of industry professionals, which enables us to bring the best job opportunities to you.Our team of experts works with you to understand your skill sets, aspirations, and career goals to provide you with job opportunities that match your profile. We provide you with all the necessary training and guidance to help you succeed in your job. We ensure that you are fully prepared to take on your new role and provide you with support throughout your job journey.
  </Text>
  <hr/>
  <br/>
  <Heading color={"black"}>
  How we are helping you?
  </Heading>
  <Text pt={'5px'}>
  We are offering our assistance to help you find employment in the BPO sector at no cost to you. All you need to do is share your resume with us, and within 72 hours, we will reach out to you to conduct a brief telephone interview. If you pass the interview, we will forward your resume to one of the companies listed with us, and you will receive further details.Having experienced the difficulties of finding a job in a new city, I understand the struggles that people face, especially those from smaller towns trying to find work in larger cities like Pune. My goal is to serve as a bridge to connect you with these employment opportunities, so you don't have to go through the same struggles I did. I want to ensure that no one has to suffer to find a job.For those whose resumes do not get shortlisted due to communication skills, my team will provide free basic training. I believe that people from Jalgaon district should have job opportunities to develop their skills and earn a living, and I will do everything in my power to make it happen. All we need is your support.
  </Text>



  </Text>:
              <Text></Text>
          }
         
          </Text>
          



          <Text textAlign={'justify'} color={'gray.500'}>



          {show?
              <Text color={'gray.500'}>
            
  </Text>:
              <Text></Text>
          }
         
          </Text>
          <Box
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}>
            <Button
            onClick={Para}
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'red'}
              bg={'red.400'}
              _hover={{ bg: 'red.500' }}>
              Learn More
            </Button>
            
          </Box>
        </Stack>
        
      
        
        
      </Stack>
      

     
      <Footer/>
    </Container>
    </Box>
    
    
  );
 }
 else return (<About_marathi/>)


   
  }
  
  const PlayIcon = createIcon({
    displayName: 'PlayIcon',
    viewBox: '0 0 58 58',
    d:
      'M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z',
  });
  
  export const Blob = (props: IconProps) => {
    return (
      <Icon
        width={'100%'}
        viewBox="0 0 578 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
          fill="currentColor"
        />
      </Icon>
    );
  };