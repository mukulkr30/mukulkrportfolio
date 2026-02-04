import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './component/Home/Home.jsx'
import Skill from './component/Skill/Skill.jsx'
import Contact from './component/Contact/Contact.jsx'
import Ranking from './component/Ranking/Ranking.jsx'
import Project from './component/Project/Project.jsx'
import Certificate from './component/Certificates/Certificate.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='skill' element={<Skill/>}/>
      <Route path='certificate' element={<Certificate/>}/>
      <Route path='project' element={<Project/>}/>
      <Route path='ranking' element={<Ranking/>}/>
      <Route path='contact' element={<Contact/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
