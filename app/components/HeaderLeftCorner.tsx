import { HStack } from "@chakra-ui/react"
import { BiVideoPlus } from "react-icons/bi"
import { IoMdNotificationsOutline } from "react-icons/io"
import { RxAvatar } from "react-icons/rx"

const HeaderLeftCorner = () => {
  return (
    <HStack className="h-[50px] w-[40%] "  justifyContent={"flex-end"} spacing={14}>
    <BiVideoPlus className="text-[30px]" />
    <IoMdNotificationsOutline className="text-[30px]"/>
    <RxAvatar className="text-[30px]" />
  </HStack>
  )
}

export default HeaderLeftCorner
