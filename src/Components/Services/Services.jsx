import React,{useEffect} from 'react'

export const Services = () => {
    useEffect(()=>{
        document.getElementById('header').classList.add('header-top')

    },[])
    return (
        <div>
            <section id="services" className="services">
                <div className="container">

                    <div className="section-title">
                        <h2>Projects</h2>
                        <p>My Projects</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <a href="https://deepak-rathor18.github.io/myProject-html-css/" className='w-100'><div className="icon-box w-100">
                                    <div className="icon"><i className="fab fa-github"></i></div>
                                    <h4><a href="">Portfolio Website</a></h4>
                                    <p>Based on HTML CSS JavaScript</p>
                                </div></a>
                           
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <a href="https://github.com/Deepak-rathor18" className='w-100'><div className="icon-box w-100">
                                    <div className="icon"><i className="fab fa-github"></i></div>
                                    <h4><a href="">Spotify Clone</a></h4>
                                    <p>Based on MERN Stack</p>
                                </div></a>
                           
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}
