import Zoom from 'react-reveal/Zoom'
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Body() {

    const [buku, setBuku] = useState([]);
    useEffect(()=>{
        axios
        .get("http://localhost:3004/buku")
        .then((res) => setBuku (res.data));
    },[]);


    return (
    <div className='container' id='home'>
        <br></br><br></br><br></br><br></br>
         <div className='popular'>
            <div className="container-fluid tm-container-content tm-mt-60">
                <div className="row mb-4" id='zoom'>
                    <h2 className="col-6 tm-text-primary">
                        Popular Books
                    </h2>
                    <div className="col-6 d-flex justify-content-end align-items-center">
                        <form action className="tm-text-primary"> Page <input type="text" defaultValue={1} size={1} className="tm-input-paging tm-text-primary" /> of 50
                        </form>
                    </div>
                </div> {/* div bagian atas (populer dgn page) */}
                <br></br>
                <Zoom>
                    <div>
                        <div className="row row-cols-20 row-cols-md-4 g-4">
                        {
                            buku.map(item => {
                            return (
                                <div className="col">
                                    <div className="card">
                                        <img src={`img/${item.cover}.jpg`} className="card-img-top" alt="buku 1" />
                                        <div className="card-body">
                                            <h6 className="card-title">{item.judul}</h6>
                                            <p className="card-text">A Tale of Two Cities is Charles Dickens's great historical novel <a href="#">...more</a></p>
                                            <a href="#" className="btn btn-outline-light" style={{backgroundColor: 'rgba(173, 122, 82, 1)'}}>Read</a>
                                            <p></p>
                                            <div class="card-footer text-center">
                                                <small class="text-muted">{item.review} reviews</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )})
                        }
                    </div>
                    </div>
                </Zoom>
            </div> {/* div for page & buku */}
                </div> 


        <br></br><br></br><br></br><br></br>
        <div className='container'>
            <div className='container'>
                <div class="row tm-mb-90">
                    <div class="col-12 d-flex justify-content-between align-items-center tm-paging-col">
                        <a href="#" class="btn tm-btn-prev disabled text-white" style={{backgroundColor: 'rgba(173, 122, 82, 1)'}}>Previous</a>
                        <div class="tm-paging d-flex">
                            <a href="#" class="active tm-paging-link">1 </a>
                            <a >  | 2 | 3 | ...</a>
                        </div>
                        <a href="#" class="btn tm-btn-next text-white" style={{backgroundColor: 'rgba(173, 122, 82, 1)'}}>Next Page</a>
                    </div>            
                </div>
            </div>
        </div>
        <br></br><br></br><br></br><br></br><br></br>
    </div>

  )
}