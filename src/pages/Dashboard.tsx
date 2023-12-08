import Aside from "../components/Aside"
import Main from "../components/Main"
import Navbar from "../components/Navbar"

const Dashboard = () => {
  return (
    <section className=" gap-2 h-screen">
        <Navbar/>
        <div className="flex gap-2 h-full">
        <Aside/>
        <Main/>
        </div>
    </section>
  )
}

export default Dashboard