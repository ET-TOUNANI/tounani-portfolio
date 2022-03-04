import React from 'react'

function Testimonials() {
  return (
    <aside className="testimonials aside section">
                    <div className="section-inner shadow-sm rounded">
                        <h2 className="heading">Testimonials</h2>
                        <div className="content">
                            <div className="item">
                                <blockquote className="quote">                                  
                                    <p><i className="fas fa-quote-left"></i>He delivered the task very promptly, and he is easy to communicate with. Thank you</p>
                                </blockquote>                
                                <p className="source"><span className="name">Saery Kato</span><br /><span className="title">Chill TEA </span></p>                                                             
                            </div>
                            
                            <p><a className="more-link" href="https://www.linkedin.com/in/abderrahmane-et-tounani-21348020b/"><i className="fas fa-external-link-alt"></i>More on Linkedin</a></p> 
                            
                        </div>
                    </div>
                </aside>
  )
}

export default Testimonials