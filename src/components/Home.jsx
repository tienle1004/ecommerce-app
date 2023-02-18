import React from 'react';
import './Home.css'

function Home(props) {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/assets/images/home/img1.jpg" className="d-block w-100" alt="..." height='450px' />
                    </div>
                    <div className="carousel-item">
                        <img src="/assets/images/home/img2.jpg" className="d-block w-100" alt="..." height='450px' />
                    </div>
                    <div className="carousel-item">
                        <img src="/assets/images/home/img3.jpg" className="d-block w-100" alt="..." height='450px' />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div>
                <main>
                    <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                        <div className="col-md-5 p-lg-5 mx-auto my-5">
                            <h1 className="display-4 fw-normal">Punny headline</h1>
                            <p className="lead fw-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.</p>
                            <a className="btn btn-outline-secondary" href="/">Coming soon</a>
                        </div>
                        <div className="product-device shadow-sm d-none d-md-block" />
                        <div className="product-device product-device-2 shadow-sm d-none d-md-block" />
                    </div>
                    <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
                        <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                            <div className="my-3 py-3">
                                <h2 className="display-5">Another headline</h2>
                                <p className="lead">And an even wittier subheading.</p>
                            </div>
                            <div className="bg-light shadow-sm mx-auto" style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }} />
                        </div>
                        <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                            <div className="my-3 p-3">
                                <h2 className="display-5">Another headline</h2>
                                <p className="lead">And an even wittier subheading.</p>
                            </div>
                            <div className="bg-dark shadow-sm mx-auto" style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }} />
                        </div>
                    </div>
                    <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
                        <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                            <div className="my-3 p-3">
                                <h2 className="display-5">Another headline</h2>
                                <p className="lead">And an even wittier subheading.</p>
                            </div>
                            <div className="bg-dark shadow-sm mx-auto" style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }} />
                        </div>
                        <div className="text-bg-primary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                            <div className="my-3 py-3">
                                <h2 className="display-5">Another headline</h2>
                                <p className="lead">And an even wittier subheading.</p>
                            </div>
                            <div className="bg-light shadow-sm mx-auto" style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }} />
                        </div>
                    </div>
                    <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
                        <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                            <div className="my-3 p-3">
                                <h2 className="display-5">Another headline</h2>
                                <p className="lead">And an even wittier subheading.</p>
                            </div>
                            <div className="bg-body shadow-sm mx-auto" style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }} />
                        </div>
                        <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                            <div className="my-3 py-3">
                                <h2 className="display-5">Another headline</h2>
                                <p className="lead">And an even wittier subheading.</p>
                            </div>
                            <div className="bg-body shadow-sm mx-auto" style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }} />
                        </div>
                    </div>

                </main>

            </div>

        </>
    );
}

export default Home;