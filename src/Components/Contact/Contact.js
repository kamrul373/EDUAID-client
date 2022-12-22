import React from 'react';

const Contact = () => {
    return (
        <section className="mb-4 mt-5 px-5">
            <h2 className="h1-responsive font-weight-bold  my-4">Contact us</h2>

            <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                a matter of hours to help you.</p>

            <div className="row">


                <div className="px-5 mb-5">
                    <form id="contact-form" name="contact-form">

                        <div className="row">


                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <label for="name" className="">Your name</label>
                                    <input type="text" id="name" name="name" className="form-control" />

                                </div>
                            </div>



                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <label for="email" className="">Your email</label>
                                    <input type="text" id="email" name="email" className="form-control" />

                                </div>
                            </div>


                        </div>

                        <div className="row">
                            <div className="col-md-12 mt-3">
                                <div className="md-form mb-0">
                                    <label for="subject" className="" >Subject</label>
                                    <input type="text" id="subject" name="subject" className="form-control" />

                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12 mt-3">

                                <div className="md-form">
                                    <label for="message">Your message</label>
                                    <textarea type="text" id="message" name="message" rows="5" className="form-control md-textarea"></textarea>

                                </div>

                            </div>
                        </div>


                    </form>

                    <div className=" text-md-left mt-5">
                        <button className="explore-course-btn w-25" >Send</button>
                    </div>
                    <div className="status"></div>
                </div>
            </div>

        </section>
    )

};

export default Contact;