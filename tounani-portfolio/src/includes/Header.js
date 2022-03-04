import React from 'react'

function Header() {
  return (
        <div className="container">     
	        <div className="row align-items-center">
			    <div className="col">         
		            <img className="profile-image img-fluid float-start rounded-circle" alt="image of abderrahmane" src="assets/images/id.png" alt="profile image" />
		            <div className="profile-content">
		                <h1 className="name">Abderrahmane ETTOUNANI</h1>
		                <h2 className="desc">Web App Developer</h2>   
                        
		                <ul className="social list-inline">
		                    <li className="list-inline-item"><a target="_blank" href="https://twitter.com/TounaniEt"><i className="fab fa-twitter"></i></a></li>
		                    <li className="list-inline-item"><a target="_blank" href="https://www.linkedin.com/in/abderrahmane-et-tounani-21348020b/"><i className="fab fa-linkedin-in"></i></a></li>
		                    <li className="list-inline-item"><a target="_blank" href="https://github.com/ET-TOUNANI"><i className="fab fa-github-alt"></i></a></li>    
		                    <li className="list-inline-item"><a target="_blank" href="https://stackoverflow.com/users/15770547/abderrahmane"><i className="fab fa-stack-overflow"></i></a></li>   
		                    <li className="list-inline-item last-item"><a target="_blank" href="https://www.upwork.com/freelancers/~0175f27d8aa7c90f5d"><i className="fa fa-user"></i></a></li>                
		                </ul> 
		            </div>
			    </div>
	            <div className="col-12 col-md-auto">
		            <div className="dark-mode-switch d-flex">
						<div className="form-check form-switch mx-auto mx-md-0">
							<input type="checkbox" className="form-check-input me-2" id="darkSwitch" />
							<label className="custom-control-label" for="darkSwitch">Dark Mode</label>
						</div>
			        </div>
	                <a className="btn btn-cta-primary" href="https://wa.me/qr/7Y5HGRFJMGCNJ1" target="_blank"><i className="fas fa-paper-plane"></i> Contact Me</a>        
	            </div>
	        </div>       
        </div>
  )
}

export default Header