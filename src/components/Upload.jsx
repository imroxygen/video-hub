import { Container, HStack, VStack,Input, Button } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'

const Upload = () => {
  return (
    <Container maxW={'contaner.xl'} h={'100vh'} p={'16'}>
        <VStack color={'purple.500'} h={'full'} justifyContent={'center'}>
            <AiOutlineCloudUpload size={'10vmax'} />

            <form>
                <HStack>
                    <Input required type={'file'}
                    css={{
                        '&::file-selector-button':{
                            border:'none',
                            width:'calc(100%+36px)',
                            height:'100%',
                            marginLeft:'-18px',
                            color:'purple',
                            backgroundColor:'white',
                            cursor:'pointer',
                        },
                    }}
                    
                    
                    />
                    <Button colorScheme='purple' type='submit'>upload</Button>
                </HStack>
            </form>
        </VStack>

    </Container>
  )
}

export default Upload