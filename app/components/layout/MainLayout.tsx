import { ReactNode } from "react"

const MainLayout = ({children}:{children: ReactNode}) => {
  return (
    <div className="w-full h-[100vh] flex ">
      {children}
    </div>
  )
}

export default MainLayout
