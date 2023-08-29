import { Route, Routes } from "react-router-dom"
import { Layout } from "./layout"
import { Home } from "./Pages/Home"
export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="/edboard" element={<EdBoard />} /> */}
      </Route>
    </Routes>
  )
}
