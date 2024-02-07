import React, { useEffect, useState } from 'react'
import landingImg from '../assets/Images/landingImg.png'
import { Link, useNavigate } from 'react-router-dom'
import ProjectCard from '../Components/ProjectCard'
import { ToastContainer, toast } from 'react-toastify'
import { getHomeProjectAPI } from '../Services/allAPIs'


function Home() {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [allProjects, setAllProjects] = useState([])

  console.log(allProjects);

  const getHomeProject = async () => {
    const result = await getHomeProjectAPI()
    if (result.status === 200) {
      setAllProjects(result.data)
    } else {
      console.log(result);
    }
  }

  useEffect(() => {
    getHomeProject()
    if (sessionStorage.getItem("token")) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [])

  const handleProjectPage = () => {
    if (sessionStorage.getItem("token")) {
      navigate('/projects')
    } else {
      toast.warning('Please Login to explore our Projects')
    }

  }
  return (
    <>
      {/* landing part */}
      <div className='bg-success rounded ' style={{ height: '100vh', width: '100%' }}>
        <div style={{ height: '100%' }} className='container'>
          <div style={{ height: '100%' }} className="row align-items-center">
            <div className="col-lg-6">
              <h1 className='fw-bolder text-light pt-5' style={{ fontSize: '70px' }}><i class="fa-brands fa-stack-overflow fa-bounce"></i>
                Project Fair</h1>
              <p>One stop Destination for all software Development Project. Where User can add and manage their projects.As well as access all projects available iin our website... What are you waiting for!!!</p>

              {isLoggedIn ? <Link className="btn btn-warning" to={'/dashboard'}>Manage your Projects <i class="fa-solid fa-arrow-right ms-1" ></i></Link> :
                <Link className="btn btn-warning" to={'/login'}>Starts to explore <i class="fa-solid fa-arrow-right ms-1" ></i></Link>}
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-4">
              <img className='img-fluid' src={landingImg} alt="No Image" />
            </div>
          </div>
        </div>
      </div>
      {/* all projects */}
      <div className="projects mt-5">
        <h1 className='text-center mb-5'>Explore Our Projects</h1>
        <marquee >
          <div className="d-flex justify-content-between">
            {allProjects.length > 0 ? allProjects.map((project, index) => (
              <div key={index} className="me-5">
                <ProjectCard project={project}  />
              </div>
            )) : null}
          </div>
        </marquee>
        <div className='text-center'>
          <button onClick={handleProjectPage} className='btn btn-link'>View More Projects</button>
        </div>
      </div>
      <ToastContainer autoClose={3000} theme='colored' />
    </>

  )
}

export default Home