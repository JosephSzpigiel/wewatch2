import { useState } from "react"
import { Box, Heading, Text, FormControl, FormLabel, Input, Button } from "@chakra-ui/react"
import { createClient } from '../../utils/supabase/component'
import Link from "next/link"


function signup() {
    const supabase = createClient()

    const [signupData, setSignupData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
    })

    function handleChange(event){
        setSignupData(details => {
            return{
            ...details,
            [event.target.name] : event.target.value
            }
        })
    }

    async function handleSignup(event){
        try{
            const { data, error } = await supabase.auth.signUp(
                {
                  email: signupData.email,
                  password: signupData.password,
                  options: {
                    data: {
                      first_name: signupData.firstName,
                      last_name: signupData.lastName
                    }
                  }
                }
            )
            console.log(data)
            if (error) throw error
            alert("Success! Log in to access your account.")
        } catch(error){
            alert(error)
        }
    }



    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
        >
        <Heading mb={6}>Sign Up</Heading>
        <Box 
            p={8} 
            borderWidth={1} 
            borderRadius="5px" 
            border="2px solid red"
            boxShadow="lg"
            backgroundColor="white"
            color="black"
        >
            {/* {error && <Text color="red.500" mb={4}>{error}</Text>} */}
            <FormControl id="fistName" mb={4} isRequired>
                <FormLabel>First Name</FormLabel>
                <Input
                    type="text"
                    name="firstName"
                    placeholder="Enter your first name"
                    value={signupData.firstName}
                    onChange={handleChange}
                />
            </FormControl>
            <FormControl id="lastName" mb={4} isRequired>
                <FormLabel>Last Name</FormLabel>
                <Input
                    type="text"
                    name="lastName"
                    placeholder="Enter your last name"
                    value={signupData.lastName}
                    onChange={handleChange}
                />
            </FormControl>
            <FormControl id="email" mb={4} isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={signupData.email}
                    onChange={handleChange}
                />
            </FormControl>
            <FormControl id="password" mb={4} isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={signupData.password}
                    onChange={handleChange}
                />
            </FormControl>
            <Button 
                colorScheme="orange" 
                width="full" 
                onClick={handleSignup}
            >
                Sign Up
            </Button>
        </Box>
        <Text>
            Already have an account?
        </Text>
        <Link
            href={'/login'}
        >
            <Button
                colorScheme="orange"
                size= 'sm'
                variant={'outline'}
            >
                Log In
            </Button>
        </Link>
    </Box>
    )
}

export default signup