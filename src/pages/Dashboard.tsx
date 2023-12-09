import Aside from "../components/Aside"
import Main from "../components/Main"
import Navbar from "../components/Navbar"



const Dashboard = () => {


  return (
    <section className="h-screen overflow-hidden">
        <Navbar/>
        <div className="flex gap-2 h-full overflow-hidden">
        <Aside/>
        <Main/>
        </div>
    </section>
  )
}

export default Dashboard