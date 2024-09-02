import Footer from "@/components/Footer"
import TopNavigation from "@/components/TopNavigation"

interface childrenProps{
    children: React.ReactNode
}

const Layout:React.FC <childrenProps> = ({children}) =>{
    return(
        <>
         <TopNavigation />
          <main>{children}</main>
          <Footer />
        </>
    )
}
export default Layout