import React from 'react';
import useTitle from '../Hooks/useTitle';

const Blog = () => {
    useTitle("Blog")
    return (
        <div className='bg-[#FFFAFA]'>
            <div className='max-w-7xl mx-auto px-2 py-16 '>


                <div>
                    <h2 className={`text-3xl text-center md:text-4xl font-bold text-[#D7352E] leading-normal mb-10`}>Blog</h2>

                </div>


                {/* Question 1 */}
                <div className="item-box bg-slate-100 p-0 rounded-lg mt-2">
                    <h1 className="text-2xl  font-semibold p-4 bg-[#E2E8F0] text-slate-700 rounded-t-lg">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </h1>
                    <div className="px-4 py-4">
                        <p className="pb-4 text-lg text-slate-600"> <span className='font-bold'>Access token:</span> A short-lived credential granted to a client for accessing protected resources. It is included in each request to the server.



                        </p>
                        <p className="pb-4 text-lg text-slate-600">

                            <span className='font-bold'>Refresh token:</span> A long-lived credential used to obtain a new access token when the current one expires. It helps avoid re-authentication.



                        </p>
                        <p className="pb-4 text-lg text-slate-600">

                            <span className='font-bold'>Client-side storage:</span> Store access tokens securely (e.g., in an HTTP-only cookie or in memory). Store refresh tokens in secure storage mechanisms like HTTP-only cookies or limited-expiration localStorage.

                        </p>

                    </div>
                </div>

                {/* Question 2 */}
                <div className="item-box bg-slate-100 p-0 rounded-lg mt-4">
                    <h1 className="text-2xl font-semibold p-4 bg-[#E2E8F0] text-slate-700 rounded-t-lg">2. Compare SQL and NoSQL databases?</h1>
                    <div className="px-4 py-4">
                        <p className="pb-4 text-lg text-slate-600">SQL databases are structured, using predefined schemas and SQL for querying. They follow the relational model and scale vertically. They suit structured data and prioritize consistency.
                        </p>

                        <p className="pb-4 text-lg text-slate-600">
                            NoSQL databases are flexible, allowing schema-less designs and using various query languages. They scale horizontally and support different data models. They excel with unstructured, rapidly changing data and prioritize availability.


                        </p>

                        <p className="pb-4 text-lg text-slate-600">

                            Choosing between SQL and NoSQL depends on data nature, scalability needs, consistency requirements, and development preferences. SQL suits structured data and complex queries, while NoSQL handles unstructured, rapidly changing data with high scalability.
                        </p>


                    </div>
                </div>

                {/* Question 3 */}
                <div className="item-box  bg-slate-100 p-0 rounded-lg mt-4">
                    <h1 className="text-2xl font-semibold p-4 bg-[#E2E8F0] text-slate-700 rounded-t-lg">3. What is express js? What is Nest JS?</h1>
                    <div className="px-4 py-4">
                        <p className="pb-4 text-lg text-slate-600"> Express.js is a popular web application framework for Node.js, providing a minimalistic and flexible approach to building web and API applications. It simplifies server-side development with HTTP utility methods, routing, session management, and error handling.


                        </p>

                        <p className="pb-4 text-lg text-slate-600">

                            NestJS is a TypeScript-based framework for building scalable server-side applications. It follows Angular's architectural principles, offering decorators, dependency injection, and modules. It promotes maintainable code and integrates well with other tools.
                        </p>

                    </div>
                </div>

                {/* Question 4 */}
                <div className="item-box bg-slate-100 p-0 rounded-lg mt-4">
                    <h1 className="text-2xl font-semibold p-4 bg-[#E2E8F0] text-slate-700 rounded-t-lg">4. What is MongoDB aggregate and how does it work?</h1>
                    <div className="px-4 py-4">
                        <p className="pb-4 text-lg text-slate-600">In MongoDB, the aggregate function is used for advanced data processing and analysis on document collections. It operates through a pipeline of stages, where each stage performs a specific operation on the input documents and passes the result to the next stage. Stages can include filtering, grouping, sorting, and aggregating data. This allows for complex transformations, statistical calculations, and data analysis directly within the database. The aggregate function provides a powerful and flexible way to manipulate and extract insights from MongoDB data, reducing the need for client-side processing.

                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;