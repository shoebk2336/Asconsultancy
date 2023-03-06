import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Footer from './Footer';
import Founder_marathi from './marathi/Founder_marathi';
  
  
  export default function Founder() {

    const [intro,setIntro]=useState(false)
    const Intro=()=>{
      setIntro(intro?false:true)
    }
const {lang}=useSelector((state)=>state)



if(lang==="English"){

  return (
    <Box>
    <Center py={6}>
    <Box
      maxW={'70%'}
      w={'full'}
      
      boxShadow={'2xl'}
      rounded={'md'}
      overflow={'hidden'}
      
      >
      
      <Image
        h={'120px'}
        w={'full'}
        src={
          'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
        }
        objectFit={'cover'}
      />
      <Flex justify={'center'} mt={-12}>
        <Avatar
          size={'xl'}
          src={
            'https://www.w3schools.com/howto/img_avatar.png'
          }
          alt={'Author'}
          css={{
            border: '2px solid white',
          }}
        />
      </Flex>

      <Box  p={6}>
        <Stack spacing={0} align={'center'} mb={5}>
          <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
            Danish Shaikh
          </Heading>
          <Text textAlign={"justify"} color={'gray.500'}>
          Hello Everyone,
My name is Danish Shaikh and I have over five years of experience in the BPO industry. Before 2017, I was unaware of this field, and all I knew was that it involved attending calls at a call center. However, when I got the opportunity to work in this field, many people discouraged me, saying that as an engineer, I shouldn't work in a call center.

{intro?<Text textAlign={"justify"} color={'gray.500'}>
At that point, I had two options: I could listen to those who had never worked in this field and were basing their judgments solely on observation, or I could take a chance on myself and explore this opportunity, even if it wasn't ideal. I chose the latter and joined the BPO division of an airline, where I quickly learned the difference between a call center and a BPO, as well as the growth opportunities available in this industry.

Through my work, I also came to understand the unique perspectives and priorities of people living in cities, which differed from my own experiences. For instance, I met people who were juggling their studies and their jobs and managing it all very well. I was curious to know why they weren't enjoying their college life and instead working, and one person gave me a great answer: he said that by working, he understood the work culture and the needs of a company, and that completing his education would give him both a degree and valuable work experience that would set him apart from his peers.

I'm sharing all this because I want everyone to have a clear understanding of what they're doing in their lives. After six months of working in the airline industry, I moved to an e-commerce company, where I gained even more valuable insights and continued to learn about myself.

I want to open doors for those who think they're not good at studies and can't do anything in life, or who feel they have no options after finishing their HSC. I also want to help those who are blaming others but not taking action to improve their own situations. I know what it's like to face these challenges, which is why I started AS Consultancy. It's my way of sharing the knowledge and experience I've gained, so that my brothers and sisters in Jalgaon don't have to face the same struggles that I did.
</Text>:<Text></Text>}

          
          </Text>
          <Button onClick={Intro} rounded={'full'} px={6}>
          Learn more
        </Button>
        </Stack>

        

        
      </Box>
    
    </Box>
    
  </Center>
    
    
    
    <br/>
    <br/>
    <Footer/>
    </Box>
   
   
  );
}
else return (<Founder_marathi/>)

   
  }