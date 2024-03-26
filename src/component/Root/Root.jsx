import { Outlet } from "react-router-dom"
import Nav from "../nav/Nav"


function Root() {
  return (
    <>
    <div className="">
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  </>
  )
}

export default Root;