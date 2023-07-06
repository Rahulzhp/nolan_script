import React from 'react'
import "../Styles/Login.css"
import { Button, Text, FormControl, FormLabel, Image, Input, Select, Textarea, useDisclosure } from '@chakra-ui/react'
import logo from "../Images/logo.png"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

const Login = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    return (
        <div className='logn'>
            <div className='loginMain'>
                <div className='loginLogo'>
                    <img src={logo} alt={logo}></img>
                </div>
                <div className='loginHed'>
                    <div>
                        <h1>Log in</h1>
                        <p>Log in to unlock the full Nolan Experience.</p>
                    </div>
                </div>
                <div className='loginCont'>
                    <div>
                        <div className='loginBtn'>
                            <div><Button onClick={onOpen} width={"205px"} backgroundColor={"#cc5e5e"} color={"white"} borderRadius={"19px"}>Continue with Email</Button></div>
                            <div><Button width={"205px"} backgroundColor={"#cc5e5e"} color={"white"} borderRadius={"19px"}>Continue with Google</Button></div>
                            <div><Button width={"205px"} backgroundColor={"#cc5e5e"} color={"white"} borderRadius={"19px"}>Continue with Facebook</Button></div>
                            <Text>Forgot Password?</Text>
                        </div>
                        <div className='policy'>
                            <p>By signing up, you agree to the <span style={{ color: "blue" }}> Terms of Service </span>and <span style={{ color: "blue" }}>Privacy Policy</span>.</p>
                        </div>
                    </div>
                </div>
            </div>
            <>
                <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Create Script</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            < FormControl isRequired>
                                <FormLabel>Title</FormLabel>
                                <Input ref={initialRef} borderRadius={"21px"} placeholder='Enter Title' />
                            </FormControl>
                            <FormControl mt={5}>
                                <FormLabel>Plot</FormLabel>
                                <Textarea borderRadius={"19px"} placeholder='Sci-fi adventure across multiverse' ></Textarea>
                            </FormControl>
                            <FormControl isRequired mt={5}>
                                <FormLabel>Genre</FormLabel>
                                <Select borderRadius={"19px"} placeholder='Select option'>
                                    <option value='option1'>Action</option>
                                    <option value='option2'>Adventure</option>
                                    <option value='option3'>Comedy</option>
                                </Select>
                            </FormControl>
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme='blue' mr={3}>
                                Save
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
        </div>
    )
}

export default Login