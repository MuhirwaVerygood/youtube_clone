import { Button, useColorMode } from "@chakra-ui/react"
import Sidebar from "./Sidebar"

const Main = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <div className="w-full pl-[5%]  h-[calc(100vh-50px)]  overflow-auto ">
      <div className="h-[50%] w-full">body</div>
      <div className="h-[50%] w-full">body</div>
      <div className="h-[50%] w-full">body</div>
      <div className="h-[50%] w-full">body</div>


      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
      
    </div>
  )
}

export default Main
