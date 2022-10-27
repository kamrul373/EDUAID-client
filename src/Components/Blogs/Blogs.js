import React from 'react';
import "./Blogs.css";
const Blogs = () => {
    return (
        <div>
            <h1 className='my-4 text-success'>Blogs</h1>
            <div className="blogs container" style={{ textAlign: "left" }}>
                <div className="row">
                    <div className="blog col-10 mx-auto">
                        <div className="title text-center my-2">
                            <h2>What is cors?</h2>
                        </div>
                        <div className="thumb mt-3">
                            <img src="https://getkt.com/wp-content/uploads/2019/02/Cross-Origin-Resource-Sharing.jpg" alt="cors" />
                        </div>
                        <div className="content">
                            <p>Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. </p>
                            <p>CORS is the mechanism that provides the ability to alter the behavior of this policy, enabling you to do things like hosting static content at www.example.com and the backend API at api.example.com. This kind of request would be called a Cross-Origin request, as a resource from one subdomain is requesting a resource from another subdomain.</p>
                            <p className='text-success'>Cors Works like :  </p>
                            <p>This workflow begins with the browser automatically making a preflight request to the external web server. This preflight request uses the HTTP method OPTIONS and has several HTTP headers that we'll go into detail on later. The external web server should then validate these preflight request headers to ensure that scripts from that origin are allowed to make the actual request to the resource using the nominated request method and custom request headers specified in the preflight request headers.</p>
                            <p>
                                Once verified the external web server should then respond with its own set of HTTP headers. These response headers define the range of acceptable origins, request methods, custom headers, whether or not it's acceptable to send any credentials (such as cookies, authentication headers, etc.), and how long the browser should keep the response for. This allows the browser to keep that response cached as a form of pre-validation for any future requests that the script might wish to make.
                            </p>
                        </div>
                    </div>
                    <div className="blog col-10 mx-auto">
                        <div className="title text-center my-2">
                            <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
                        </div>
                        <div className="thumb mt-3">
                            <img src="https://firebase.google.com/images/social.png" alt="cors" />
                        </div>
                        <div className="content">
                            <p>
                                Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.
                            </p>
                            <p>
                                Firebase concept is simple. When you build a client-side app with JavaScript or any of its frameworks, for instance, Google Firebase can turn this into a serverless app in no time. It also removes the need to manage databases yourself, as it does that for you.
                            </p>
                            <p>
                                Therefore, implementing Firebase means plugging a ready-made backend into your client code to make it dynamic. Ultimately, it eliminates the need to write backend code from scratch and gives you a fully functional one instead.Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;