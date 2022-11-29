// import axios from "axios";
// import React, { useState, useEffect } from "react";

// const Buku = () => {
//     const [Buku, setBuku]=useState([]);
//     useEffect(()=>{
//         axios.get("http://localhost:3004/buku")
//         .then((res) => setBuku (res.data));
//     },[]);
// }

// export default function Data() {
//     return(
//         <h1>gratis</h1>
//     )
// }



// <div className="row row-cols-20 row-cols-md-4 g-4">
//                         <div className="col">
//                             <div className="card" style={{width: '15rem'}}>
//                                 <img src="img/b1.jpg" className="card-img-top" alt="buku 1" />
//                                 <div className="card-body">
//                                     <h6 className="card-title">{item.judul}</h6>
//                                     <p className="card-text">A Tale of Two Cities is Charles Dickens's great historical novel <a href="#">...more</a></p>
//                                     <a href="#" className="btn btn-outline-light" style={{backgroundColor: 'rgba(173, 122, 82, 1)'}}>Read</a>
//                                     <p></p>
//                                     <div class="card-footer text-center">
//                                         <small class="text-muted">21,423 reviews</small>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col">
//                             <div className="card" style={{width: '15rem'} }>
//                                 <img src="img/b2.jpg" className="card-img-top" alt="buku 2" />
//                                 <div className="card-body">
//                                     <h6 className="card-title">Don quixote - Miguel de Cervantes</h6>
//                                     <p className="card-text">Miguel de Cevantes wrote this book base on his own journey in <a href="#">...more</a></p>
//                                     <a href="#" className="btn btn-outline-light" style={{backgroundColor: 'rgba(173, 122, 82, 1)'}}>Read</a>
//                                     <p></p>
//                                     <div class="card-footer text-center">
//                                         <small class="text-muted">20,109 reviews</small>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col">
//                             <div className="card" style={{width: '15rem'}}>
//                                 <img src="img/b3.jpg" className="card-img-top" alt="buku 3" />
//                                 <div className="card-body">
//                                     <h6 className="card-title">Quotations - Chairman Mao Tse-Tung</h6>
//                                     <p className="card-text">A Tale of Two Cities is Charles Dickens's great historical <a href="#">...more</a></p>
//                                     <a href="#" className="btn btn-outline-light" style={{backgroundColor: 'rgba(173, 122, 82, 1)'}}>Read</a>
//                                     <p></p>
//                                     <div class="card-footer  text-center">
//                                         <small class="text-muted">21,423 reviews</small>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col">
//                             <div className="card" style={{width: '15rem'}}>
//                                 <img src="img/b4.jpg" className="card-img-top" alt="buku 4" />
//                                 <div className="card-body">
//                                     <h6 className="card-title">The Hobbit and Lord of the Rings - J.R.R. Tolkien</h6>
//                                     <p className="card-text">Miguel de Cevantes wrote this book base on his own journey in May 1999 <a href="#">...more</a></p>
//                                     <a href="#" className="btn btn-outline-light" style={{backgroundColor: 'rgba(173, 122, 82, 1)'}}>Read</a>
//                                     <p></p>
//                                     <div class="card-footer text-center">
//                                         <small class="text-muted">20,109 reviews</small>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col">
//                             <div className="card" style={{width: '15rem'}}>
//                                 <img src="img/b5.jpg" className="card-img-top" alt="buku 5" />
//                                 <div className="card-body">
//                                     <h6 className="card-title">Dream of the RedChamber - Tsao HsuehChin</h6>
//                                     <p className="card-text">A Tale of Two Cities is Charles Dickens's great historical novel <a href="#">...more</a></p>
//                                     <a href="#" className="btn btn-outline-light" style={{backgroundColor: 'rgba(173, 122, 82, 1)'}}>Read</a>
//                                     <p></p>
//                                     <div class="card-footer text-center">
//                                         <small class="text-muted">21,423 reviews</small>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col">
//                             <div className="card" style={{width: '15rem'}}>
//                                 <img src="img/b6.jpg" className="card-img-top" alt="buku 6" />
//                                 <div className="card-body">
//                                     <h6 className="card-title">Chuck Wendig - Wayward a novel</h6>
//                                     <p className="card-text">Miguel de Cevantes wrote this book base on his own journey in <a href="#">...more</a></p>
//                                     <a href="#" className="btn btn-outline-light" style={{backgroundColor: 'rgba(173, 122, 82, 1)'}}>Read</a>
//                                     <p></p>
//                                     <div class="card-footer  text-center">
//                                         <small class="text-muted">20,109 reviews</small>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col">
//                             <div className="card" style={{width: '15rem'}}>
//                                 <img src="img/b7.jpg" className="card-img-top" alt="buku 7" />
//                                 <div className="card-body">
//                                     <h6 className="card-title">Lisa - Secluded Cabin Sleeps Six</h6>
//                                     <p className="card-text">A Tale of Two Cities is Charles Dickens's great historical novel <a href="#">...more</a></p>
//                                     <a href="#" className="btn btn-outline-light" style={{backgroundColor: 'rgba(173, 122, 82, 1)'}}>Read</a>
//                                     <p></p>
//                                     <div class="card-footer text-center">
//                                         <small class="text-muted">21,423 reviews</small>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col">
//                             <div className="card" style={{width: '15rem'}}>
//                                 <img src="img/b8.jpg" className="card-img-top" alt="buku 8" />
//                                 <div className="card-body">
//                                     <h6 className="card-title">Think Again - Adam Grant (Terjemahan)</h6>
//                                     <p className="card-text">Miguel de Cevantes wrote this book base on his own journey in <a href="#">...more</a></p>
//                                     <a href="#" className="btn btn-outline-light" style={{backgroundColor: 'rgba(173, 122, 82, 1)'}}>Read</a>
//                                     <p></p>
//                                     <div class="card-footer text-center">
//                                         <small class="text-muted ">20,109 reviews</small>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col">
//                             <div className="card" style={{width: '15rem'}}>
//                                 <img src="img/b9.jpg" className="card-img-top" alt="buku 9" />
//                                 <div className="card-body">
//                                     <h6 className="card-title">The Silent Patient - Alex Michaelides</h6>
//                                     <p className="card-text">A Tale of Two Cities is Charles Dickens's great historical novel <a href="#">...more</a></p>
//                                     <a href="#" className="btn btn-outline-light" style={{backgroundColor: 'rgba(173, 122, 82, 1)'}}>Read</a>
//                                     <p></p>
//                                     <div class="card-footer text-center">
//                                         <small class="text-muted">21,423 reviews</small>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col">
//                             <div className="card" style={{width: '15rem'}}>
//                                 <img src="img/b10.jpg" className="card-img-top" alt="buku 10" />
//                                 <div className="card-body">
//                                     <h6 className="card-title">How to Change Your Mind - Michael Pollan</h6>
//                                     <p className="card-text">Miguel de Cevantes wrote this book base on his own journey in <a href="#">...more</a></p>
//                                     <a href="#" className="btn btn-outline-light" style={{backgroundColor: 'rgba(173, 122, 82, 1)'}}>Read</a>
//                                     <p></p>
//                                     <div class="card-footer  text-center">
//                                         <small class="text-muted">20,109 reviews</small>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col">
//                             <div className="card" style={{width: '15rem'}}>
//                                 <img src="img/b11.jpg" className="card-img-top" alt="buku 11" />
//                                 <div className="card-body">
//                                     <h6 className="card-title">Out of Time Charm - Tracy Wolff (Terjemahan)</h6>
//                                     <p className="card-text">A Tale of Two Cities is Charles Dickens's great historical novel <a href="#">...more</a></p>
//                                     <a href="#" className="btn btn-outline-light" style={{backgroundColor: 'rgba(173, 122, 82, 1)'}}>Read</a>
//                                     <p></p>
//                                     <div class="card-footer text-center">
//                                         <small class="text-muted">21,423 reviews</small>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col">
//                             <div className="card" style={{width: '15rem'}}>
//                                 <img src="img/b12.jpg" className="card-img-top" alt="buku 12" />
//                                 <div className="card-body">
//                                     <h6 className="card-title">It Didn't Start With You - Mark Wolynn</h6>
//                                     <p className="card-text">Miguel de Cevantes wrote this book base on his own journey in <a href="#">...more</a></p>
//                                     <a href="#" className="btn btn-outline-light" style={{backgroundColor: 'rgba(173, 122, 82, 1)'}}>Read</a>
//                                     <p></p>
//                                     <div class="card-footer text-center">
//                                         <small class="text-muted ">20,109 reviews</small>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

// {
//             buku.map(item => {
//             return (

    // const [buku, setBuku] = useState([]);
    // useEffect(()=>{
    //     axios
    //     .get("http://localhost:3004/buku")
    //     .then((res) => setBuku (res.data));
    // },[]);
    // , { useState, useEffect }


























                        // <div className="col">
                        //     <div className="card" style={{width: '15rem'} }>
                        //         <img src="img/b2.jpg" className="card-img-top" alt="buku 2" />
                        //         <div className="card-body">
                        //             <h6 className="card-title">{item.judul}</h6>
                        //             <p className="card-text">Miguel de Cevantes wrote this book base on his own journey in <a href="#">...more</a></p>
                        //             <a href="#" className="btn btn-outline-light" style={{backgroundColor: 'rgba(173, 122, 82, 1)'}}>Read</a>
                        //             <p></p>
                        //             <div class="card-footer text-center">
                        //                 <small class="text-muted">20,109 reviews</small>
                        //             </div>
                        //         </div>
                        //     </div>
                        // </div>
                        // <div className="col">
                        //     <div className="card" style={{width: '15rem'}}>
                        //         <img src="img/b3.jpg" className="card-img-top" alt="buku 3" />
                        //         <div className="card-body">
                        //             <h6 className="card-title">Quotations - Chairman Mao Tse-Tung</h6>
                        //             <p className="card-text">A Tale of Two Cities is Charles Dickens's great historical <a href="#">...more</a></p>
                        //             <a href="#" className="btn btn-outline-light" style={{backgroundColor: 'rgba(173, 122, 82, 1)'}}>Read</a>
                        //             <p></p>
                        //             <div class="card-footer  text-center">
                        //                 <small class="text-muted">21,423 reviews</small>
                        //             </div>
                        //         </div>
                        //     </div>
                        // </div>
                        // <div className="col">
                        //     <div className="card" style={{width: '15rem'}}>
                        //         <img src="img/b4.jpg" className="card-img-top" alt="buku 4" />
                        //         <div className="card-body">
                        //             <h6 className="card-title">The Hobbit and Lord of the Rings - J.R.R. Tolkien</h6>
                        //             <p className="card-text">Miguel de Cevantes wrote this book base on his own journey in May 1999 <a href="#">...more</a></p>
                        //             <a href="#" className="btn btn-outline-light" style={{backgroundColor: 'rgba(173, 122, 82, 1)'}}>Read</a>
                        //             <p></p>
                        //             <div class="card-footer text-center">
                        //                 <small class="text-muted">20,109 reviews</small>
                        //             </div>
                        //         </div>
                        //     </div>
                        // </div>
                        // <div className="col">
                        //     <div className="card" style={{width: '15rem'}}>
                        //         <img src="img/b5.jpg" className="card-img-top" alt="buku 5" />
                        //         <div className="card-body">
                        //             <h6 className="card-title">Dream of the RedChamber - Tsao HsuehChin</h6>
                        //             <p className="card-text">A Tale of Two Cities is Charles Dickens's great historical novel <a href="#">...more</a></p>
                        //             <a href="#" className="btn btn-outline-light" style={{backgroundColor: 'rgba(173, 122, 82, 1)'}}>Read</a>
                        //             <p></p>
                        //             <div class="card-footer text-center">
                        //                 <small class="text-muted">21,423 reviews</small>
                        //             </div>
                        //         </div>
                        //     </div>
                        // </div>
                        // <div className="col">
                        //     <div className="card" style={{width: '15rem'}}>
                        //         <img src="img/b6.jpg" className="card-img-top" alt="buku 6" />
                        //         <div className="card-body">
                        //             <h6 className="card-title">Chuck Wendig - Wayward a novel</h6>
                        //             <p className="card-text">Miguel de Cevantes wrote this book base on his own journey in <a href="#">...more</a></p>
                        //             <a href="#" className="btn btn-outline-light" style={{backgroundColor: 'rgba(173, 122, 82, 1)'}}>Read</a>
                        //             <p></p>
                        //             <div class="card-footer  text-center">
                        //                 <small class="text-muted">20,109 reviews</small>
                        //             </div>
                        //         </div>
                        //     </div>
                        // </div>
                        // <div className="col">
                        //     <div className="card" style={{width: '15rem'}}>
                        //         <img src="img/b7.jpg" className="card-img-top" alt="buku 7" />
                        //         <div className="card-body">
                        //             <h6 className="card-title">Lisa - Secluded Cabin Sleeps Six</h6>
                        //             <p className="card-text">A Tale of Two Cities is Charles Dickens's great historical novel <a href="#">...more</a></p>
                        //             <a href="#" className="btn btn-outline-light" style={{backgroundColor: 'rgba(173, 122, 82, 1)'}}>Read</a>
                        //             <p></p>
                        //             <div class="card-footer text-center">
                        //                 <small class="text-muted">21,423 reviews</small>
                        //             </div>
                        //         </div>
                        //     </div>
                        // </div>
                        // <div className="col">
                        //     <div className="card" style={{width: '15rem'}}>
                        //         <img src="img/b8.jpg" className="card-img-top" alt="buku 8" />
                        //         <div className="card-body">
                        //             <h6 className="card-title">Think Again - Adam Grant (Terjemahan)</h6>
                        //             <p className="card-text">Miguel de Cevantes wrote this book base on his own journey in <a href="#">...more</a></p>
                        //             <a href="#" className="btn btn-outline-light" style={{backgroundColor: 'rgba(173, 122, 82, 1)'}}>Read</a>
                        //             <p></p>
                        //             <div class="card-footer text-center">
                        //                 <small class="text-muted ">20,109 reviews</small>
                        //             </div>
                        //         </div>
                        //     </div>
                        // </div>
                        // <div className="col">
                        //     <div className="card" style={{width: '15rem'}}>
                        //         <img src="img/b9.jpg" className="card-img-top" alt="buku 9" />
                        //         <div className="card-body">
                        //             <h6 className="card-title">The Silent Patient - Alex Michaelides</h6>
                        //             <p className="card-text">A Tale of Two Cities is Charles Dickens's great historical novel <a href="#">...more</a></p>
                        //             <a href="#" className="btn btn-outline-light" style={{backgroundColor: 'rgba(173, 122, 82, 1)'}}>Read</a>
                        //             <p></p>
                        //             <div class="card-footer text-center">
                        //                 <small class="text-muted">21,423 reviews</small>
                        //             </div>
                        //         </div>
                        //     </div>
                        // </div>
                        // <div className="col">
                        //     <div className="card" style={{width: '15rem'}}>
                        //         <img src="img/b10.jpg" className="card-img-top" alt="buku 10" />
                        //         <div className="card-body">
                        //             <h6 className="card-title">How to Change Your Mind - Michael Pollan</h6>
                        //             <p className="card-text">Miguel de Cevantes wrote this book base on his own journey in <a href="#">...more</a></p>
                        //             <a href="#" className="btn btn-outline-light" style={{backgroundColor: 'rgba(173, 122, 82, 1)'}}>Read</a>
                        //             <p></p>
                        //             <div class="card-footer  text-center">
                        //                 <small class="text-muted">20,109 reviews</small>
                        //             </div>
                        //         </div>
                        //     </div>
                        // </div>
                        // <div className="col">
                        //     <div className="card" style={{width: '15rem'}}>
                        //         <img src="img/b11.jpg" className="card-img-top" alt="buku 11" />
                        //         <div className="card-body">
                        //             <h6 className="card-title">Out of Time Charm - Tracy Wolff (Terjemahan)</h6>
                        //             <p className="card-text">A Tale of Two Cities is Charles Dickens's great historical novel <a href="#">...more</a></p>
                        //             <a href="#" className="btn btn-outline-light" style={{backgroundColor: 'rgba(173, 122, 82, 1)'}}>Read</a>
                        //             <p></p>
                        //             <div class="card-footer text-center">
                        //                 <small class="text-muted">21,423 reviews</small>
                        //             </div>
                        //         </div>
                        //     </div>
                        // </div>
                        // <div className="col">
                        //     <div className="card" style={{width: '15rem'}}>
                        //         <img src="img/b12.jpg" className="card-img-top" alt="buku 12" />
                        //         <div className="card-body">
                        //             <h6 className="card-title">It Didn't Start With You - Mark Wolynn</h6>
                        //             <p className="card-text">Miguel de Cevantes wrote this book base on his own journey in <a href="#">...more</a></p>
                        //             <a href="#" className="btn btn-outline-light" style={{backgroundColor: 'rgba(173, 122, 82, 1)'}}>Read</a>
                        //             <p></p>
                        //             <div class="card-footer text-center">
                        //                 <small class="text-muted ">20,109 reviews</small>
                        //             </div>
                        //         </div>
                        //     </div>
                        // </div>
                        