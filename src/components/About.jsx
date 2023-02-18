import React from 'react';
import { Link } from 'react-router-dom';

function About(props) {
    return (
        <>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className='text-primary fw-bold'>About Us</h1>
                        <p className='lead my-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium inventore laborum delectus alias hic perferendis maxime? Veritatis sunt eos velit nulla cupiditate? Modi totam neque fugit cum dolorum velit illum repellendus sapiente odit error quidem maiores, harum in voluptatem iste tenetur iusto impedit cupiditate, perspiciatis amet! Laboriosam magni consequuntur consectetur saepe quia perferendis aut placeat, commodi nisi obcaecati sunt maxime non doloremque veritatis at aliquid id quo quae in reiciendis! Accusamus, sed ducimus aliquam rem repellendus delectus exercitationem velit expedita nam neque culpa illo, natus optio? Dolore minus eligendi nobis amet repellendus natus ut cum? Aliquid ipsa ea quisquam ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia libero dolorum excepturi error? Velit aut vel veniam nisi esse quod quidem quas asperiores, sed dolor fugiat eligendi architecto, blanditiis doloribus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut deserunt numquam dignissimos quia culpa sit voluptatem velit ratione et, necessitatibus non delectus qui consequatur quisquam ipsa autem accusantium labore error. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, similique ipsa facilis temporibus ipsam unde sequi asperiores laboriosam quidem cumque quae, nesciunt tenetur expedita reiciendis labore maxime, velit earum doloremque.</p>
                        <Link to='/contact' className='btn btn-outline-danger px-3'>Contact Us</Link>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/about.png" alt="About Img" height='400px' width='450px' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;