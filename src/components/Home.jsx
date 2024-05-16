import React from 'react'
import {Box, Container, Heading,Image, Stack,Text}from '@chakra-ui/react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import img1 from'../assest/1.jpg'
import img2 from'../assest/2.jpg'
import img3 from'../assest/3.jpg'
import img4 from'../assest/4.jpg'
import img5 from '../assest/5.png'

const headingOptions={
    pos:'absolute',
    left:'50%',
    top:'50%',
    transform:'translate(-50%,-50%)',
    textTransform:'uppercase',
    p:'4',
    size:'4xl',
};

const Home = () => {
  return (
    <Box>
        <MyCarousel />

        <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
            <Heading 
            textTransform={'uppercase'}
            py={'2'}
            w={'fit-content'}
            borderBottom={'2px solid'}
            m={'auto'}
            >
                Services
            </Heading>

            <Stack
            h="full"
            p={'4'}
            alignItems={'center'}
            direction={['column','row']}
            
            >
            <Image src={img5} h={['40','400']} filter={'hue-rotate(-130deg)'} />
            <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={"center"}>
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor eligendi nulla vel numquam perspiciatis laudantium praesentium ratione sunt expedita cum. Voluptatum modi esse iste deleniti aliquid! Optio corporis dolorum placeat odit nostrum ea possimus quae dicta quis minima et voluptate itaque eum molestiae error fugiat mollitia cumque, neque similique qui? Repellat dolores unde quis ullam. Assumenda quidem voluptatibus doloremque? Voluptatum!
            </Text>
            </Stack>

            
        </Container>
    </Box>
  )
}

const MyCarousel=()=>(
    <Carousel autoPlay infiniteLoop interval={2*1000} showThumbs={false} showStatus={false} showArrows={false}>
        <Box w={'full'} h={'100vh'}>
            <Image  src={img1} h={'full'} w={'full'} objectFit={'cover'} />
            <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingOptions} >Watch The Future</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img2} h={'full'} w={'full'} objectFit={'cover'} />
            <Heading bgColor={"whiteAlpha.600"} color={'black'} {...headingOptions} >Future Is Gaming</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img3} h={'full'} w={'full'} objectFit={'cover'} />
            <Heading bgColor={"whiteAlpha.600"} color={'black'} {...headingOptions} >Gaming On Console</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img4} h={'full'} w={'full'} objectFit={'cover'} />
            <Heading bgColor={"whiteAlpha.600"} color={'black'} {...headingOptions} >Night Life Is cool</Heading>
        </Box>
    </Carousel>
)

export default Home;