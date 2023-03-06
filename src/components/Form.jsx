import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    Link
  } from '@chakra-ui/react';
  import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
  } from 'react-icons/md';
  import { BsGithub, BsDiscord, BsPerson,BsInstagram } from 'react-icons/bs';
import { useState } from 'react';
import emailjs from '@emailjs/browser'
import { send } from 'emailjs-com';
  
  export default function Form() {

    const obj={
      name:"",
      mail:"",
      msg:""
    }
const [change,setChange]=useState(obj)
//const [enquiry,setenquiry]=useState()
//console.log(enquiry,'form')

const handleChange=(e)=>{
  setChange({...change,[e.target.name]:e.target.value})

}

// const handleSend=()=>{

//   emailjs.sendForm("service_i5ncnuj",
//   "template_bxbkvdg",
//   change,
//   "0zcHBGY2TH905BGW2")
     

//       //console.log(change),
// setChange(obj),
// }


 const handleSend=()=>{
  console.log(change)
  
send(
"service_ituezsn",
'template_bxbkvdg',
change,
'0zcHBGY2TH905BGW2'



) 
.then((response) => {
  console.log('SUCCESS!', response.status, response.text);
})
setChange(obj)

 }




const {name,mail,msg}=change
    return (
      <Container  bg="#9DC4FB" maxW={"full"} mt={0} centerContent overflow="hidden">
        <Flex>
          <Box
            bg="#02054B"
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}>
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Heading>Contact</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                      Fill up the form below to contact
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                          +91-7972299344
                        </Button>
                        <Button
                        onClick={() => {navigator.clipboard.writeText(this.state.textToCopy)}}

                          size="md"
                          height="48px"
                          width="300px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                          ascounsultancy22@gmail.com
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="300px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                          Bhusawal Dist.Jalgaon, India
                        </Button>
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start">
                     <Link
                     href="https://www.instagram.com/bpojobs_consultant/"

                     >
                     
                     <IconButton
                     aria-label="facebook"
                     variant="ghost"
                     size="lg"
                     isRound={true}
                     _hover={{ bg: '#0D74FF' }}
                     icon={<BsInstagram size="28px" />}
                   />
                     </Link>
                     <Link 
                     href="https://www.facebook.com">
                     
                     <IconButton
                     
                       aria-label="facebook"
                       variant="ghost"
                       size="lg"
                       isRound={true}
                       _hover={{ bg: '#0D74FF' }}
                       icon={<MdFacebook size="28px" />}
                     />
                     </Link>
                     
                      <IconButton
                        aria-label="discord"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsDiscord size="28px" />}
                      />
                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input onChange={handleChange} value={name} name={"name"} type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input onChange={handleChange} value={mail}  name={"mail"} type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                          onChange={handleChange} value={msg} name={"msg"}
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="message"
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                          onClick={handleSend}
                            variant="solid"
                            bg="#0D74FF"
                            color="white"
                            _hover={{}}>
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    );
  }