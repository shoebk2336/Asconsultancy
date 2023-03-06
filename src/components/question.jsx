import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Question({title1,text1,title2,text2}) {
  
  //console.log(title)
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
        title:title1,
        text:text1,
        image:
          'https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
      },
      {
        title: title2,
        text:text2,
        image:          'https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',

      },
      // {
      //   title: 'How Can AS Consultancy Help You?',
      //   text:
      //   " At AS Consultancy, we are committed to bringing job opportunities to our beloved Jalgaon district. We understand the challenges faced by individuals in finding the right job opportunities and hence we are here to help you. We work with various BPO companies and have a wide network of industry professionals, which enables us to bring the best job opportunities to you.Our team of experts works with you to understand your skill sets, aspirations, and career goals to provide you with job opportunities that match your profile. We provide you with all the necessary training and guidance to help you succeed in your job. We ensure that you are fully prepared to take on your new role and provide you with support throughout your job journey.",
      //   image:          'https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',

      // },
      // {
      //     title: 'How we are helping you?',
      //     text:
      //     " We are offering our assistance to help you find employment in the BPO sector at no cost to you. All you need to do is share your resume with us, and within 72 hours, we will reach out to you to conduct a brief telephone interview. If you pass the interview, we will forward your resume to one of the companies listed with us, and you will receive further details.Having experienced the difficulties of finding a job in a new city, I understand the struggles that people face, especially those from smaller towns trying to find work in larger cities like Pune. My goal is to serve as a bridge to connect you with these employment opportunities, so you don't have to go through the same struggles I did. I want to ensure that no one has to suffer to find a job.For those whose resumes do not get shortlisted due to communication skills, my team will provide free basic training. I believe that people from Jalgaon district should have job opportunities to develop their skills and earn a living, and I will do everything in my power to make it happen. All we need is your support.",
      //     image:          'https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',

      //   },
  ];

  return (
    <Box
    //border={"4px solid red"}
      position={'relative'}
      height={{base:"3000px",lg:"300px",md:"400px",sm:"500px"}}
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'4xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}>
            {/* This is the block you need to change, to customize the caption */}
            <Container    >
              <Stack
              >
                <Heading >
                  {card.title}
                </Heading>
                <Text width={"full"} height={"100%"} fontSize={"12px"}  textAlign={"justify"}  color="black">
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}