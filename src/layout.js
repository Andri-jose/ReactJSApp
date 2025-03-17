import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from './header'

export default function Layout() {
  const [selectedMenu, setSelectedMenu] = useState(0);

  return (
    <>
      <Header selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <Outlet context={[selectedMenu, setSelectedMenu]} />
    </>
  )
}