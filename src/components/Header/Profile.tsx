import {Flex, Text, Box, Avatar} from '@chakra-ui/react'

interface ProfileProps {
  showProfileDate: boolean;
}

export function Profile({showProfileDate}: ProfileProps){

  return (
    <Flex
      align="center"
    >
      {showProfileDate && (
        <Box mr="4" textAlign="right">
          <Text>Antonio Fernandes</Text>
          <Text
            color="gray.300"
            fontSize="small"
          >
            antonio@teste.com.br
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Antonio Fernandes" />

    </Flex>

  )
}
