import React from 'react';
import "./Blogs.css";
const Blogs = () => {
    return (
        <div>
            <h1 className='my-4 text-success'>Blogs</h1>
            <div className="blogs container" style={{ textAlign: "left" }}>
                <div className="row">
                    {/* blog 1 */}
                    <div className="blog col-lg-10 mx-auto">
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
                    {/* blog 2 */}
                    <div className="blog col-lg-10 mx-auto">
                        <div className="title text-center my-2">
                            <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
                        </div>
                        <div className="thumb mt-3">
                            <img src="https://firebase.google.com/images/social.png" alt="firebase" />
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
                            <p className='text-success'>What other options do you have to implement authentication?</p>
                            <ul>
                                <li>Okta</li>
                                <li>Amazon Cognito</li>
                                <li>OneLogin</li>
                                <li>Auth0</li>
                                <li>Authress</li>
                                <li>Frontegg</li>
                                <li>Cookie-Based authentication</li>
                                <li>Token-Based authentication</li>
                                <li>Third party access(OAuth, API-token)</li>
                                <li>OpenId</li>
                                <li>SAML</li>
                                <li>STYTCH  etc.</li>

                            </ul>

                        </div>
                    </div>
                    {/* blog 3 */}
                    <div className="blog col-lg-10 mx-auto">
                        <div className="title text-center my-2">
                            <h2>How does the private route work?</h2>
                        </div>
                        <div className="thumb mt-3">
                            <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--E0vtJqHL--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/7is2fvy499tnuhv8p66v.png" alt="private route" />
                        </div>
                        <div className="content">
                            <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>

                            <p>Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.</p>
                        </div>
                    </div>
                    {/* blog 4 */}
                    <div className="blog col-lg-10 mx-auto">
                        <div className="title text-center my-2">
                            <h2>What is Node? How does Node work?</h2>
                        </div>
                        <div className="thumb mt-3">
                            <img src="https://kinsta.com/wp-content/uploads/2021/03/Nodejs-Architecture.png" alt="node" />
                        </div>
                        <div className="content">
                            <p>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications</p>
                            <p className='text-success'>How does Node work?</p>
                            <p>
                                Node. js runs on chrome v8 engine which converts javascript code into machine code
                                The single thread is the event loop which is responsible for running all functions and requests. The asynchronous behavior is extremely important when using node, because it guarantees that the event loop is never blocked by a synchronous function.
                            </p>
                            <p>There is only one event loop, when a request is made the loop passes the request to an asynchronous function which does the work. When this function is done and a response is returned, it can then be passed back to the event loop to be executed by the callback and sent to the user. If the functions were synchronous then the event loop would get locked up with one clients request and response, and all other clients would have to wait till that client was done. Because of the the asynchronous nature of JavaScript, the applications using node can handle many requests happening at the same time. This means that when programming in Node.js it is important to always keep in mind that the functions being written are not synchronous.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;