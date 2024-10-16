import { useState } from "react"
import { Box, Heading, Text, FormControl, FormLabel, Input, Button } from "@chakra-ui/react"
import { createClient } from '../../utils/supabase/component'
import Link from "next/link"
import { useRouter } from "next/router"


function Login({setToken}) {
    const supabase = createClient()
    const router = useRouter()

    const [loginData, setLoginData] = useState({
        email:'',
        password:'',
    })

    function handleChange(event){
        setLoginData(details => {
            return{
            ...details,
            [event.target.name] : event.target.value
            }
        })
    }

    async function handleSignup(event){
        try{
            const { data, error } = await supabase.auth.signInWithPassword(
                {
                  email: loginData.email,
                  password: loginData.password,
                }
            )
            if (error) throw error
            console.log(data)
            alert("Success! You are now logged in.")
            setToken(data)
            console.log(data)
            router.push('/')
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
        <Heading mb={6}>Log In</Heading>
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
            <FormControl id="email" mb={4} isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={loginData.email}
                    onChange={handleChange}
                />
            </FormControl>
            <FormControl id="password" mb={4} isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={loginData.password}
                    onChange={handleChange}
                />
            </FormControl>
            <Button 
                colorScheme="orange" 
                width="full" 
                onClick={handleSignup}
            >
                Log In
            </Button>
        </Box>
        <Text>
            Don't have an account?
        </Text>
        <Link
            href={'/signup'}
        >
            <Button
                colorScheme="orange"
                size= 'sm'
                variant={'outline'}
            >
                Sign Up
            </Button>
        </Link>
    </Box>
    )
}

export default Login