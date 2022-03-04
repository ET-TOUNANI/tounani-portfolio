import React from 'react'

function Infos() {
  return (
    <aside className="info aside section">
                    <div className="section-inner shadow-sm rounded">
                        <h2 className="heading sr-only">Basic Information</h2>
                        <div className="content">
                            <ul className="list-unstyled">
                                <li><i className="fas fa-map-marker-alt"></i><span className="sr-only">Location:</span>MOHAMMEDIA, MOROCCO</li>
                                <li><i className="fas fa-envelope"></i><span className="sr-only">Email:</span><a href="mailto://a.ettounani@etu.enset-media.ac.ma">a.ettounani@etu.enset-media.ac.ma</a></li>
                                <li><i className="fas fa-link"></i><span className="sr-only">Linkedin:</span><a href="https://www.linkedin.com/in/abderrahmane-et-tounani-21348020b/">Linkedin</a></li>
                            </ul>
                        </div>
                    </div>               
                </aside>
  )
}

export default Infos