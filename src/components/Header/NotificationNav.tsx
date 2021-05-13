import {Icon, HStack} from '@chakra-ui/react'
import {RiNotificationLine, RiUserAddLine} from 'react-icons/ri'

export function NotificationNav(){

  return (
    <HStack
      spacing={["6", "4"]}
      mx={["6", "4"]}
      pr={["6", "4"]}
      py="1"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <Icon as={RiNotificationLine} fontSize="20" />
      <Icon as={RiUserAddLine} fontSize="20" />
    </HStack>
  )
}
