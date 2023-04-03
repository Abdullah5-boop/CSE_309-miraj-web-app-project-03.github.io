import React from 'react';
import './Main.css';
import { Link, useNavigate } from 'react-router-dom';


const Main = () => {
    const navigate = useNavigate();
    const HnadleOnclick = () => {
        navigate('/menu')
    }
    return (
        <div className="bg-gray-100">
            <header className="bg-gray-800 text-white position-set">
                <nav className="mx-auto px-4 py-6 flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Food Delivery</h1>
                    <ul className="flex space-x-4">
                        <li><Link to="/home" className="text-lg hover:text-yellow-400">Home</Link></li>
                        <li><Link to="/menu" className="text-lg hover:text-yellow-400">Menu</Link></li>
                        <li><Link to="/about" className="text-lg hover:text-yellow-400">About Us</Link></li>
                        <li><Link to="/contract" className="text-lg hover:text-yellow-400">Contract us</Link></li>

                    </ul>
                </nav>
            </header>

            <main className="mx-auto px-4 py-8">
                <section className="banner bg-gradient-to-r from-yellow-400 to-yellow-500 text-white rounded-lg p-8 mb-8">
                    <h1 className="text-4xl font-bold mb-4 text-center">Delicious Food Delivered To Your Footstep</h1>
                    <p className="text-lg mb-4 text-center">Order now and get your food delivered in under 10 minutes!</p>
                    <div className='flex justify-center'>
                        <button className="btn btn-primary btn-lg" onClick={HnadleOnclick} id="order-now-btn">Order Now</button>
                    </div>

                </section>

                {/* <section>
                <div className="carousel w-full">
                    <div id="item1" className="container carousel-item object-cover">
                        <img src="images/picture.03.jpg" className="rounded-lg" />
                    </div> 
                    <div id="item2" className="container carousel-item">
                        <img src="images/picture.04.jpg" className="rounded-lg" />
                    </div> 
                    <div id="item3" className=" container carousel-item">
                        <img src="images/picture.01.jpg" className="rounded-lg" />
                    </div> 
                    <div id="item4" className="container carousel-item">
                        <img src="images/picture.02.jpg" className="rounded-lg" />
                    </div>
                </div> 
                    <div className="flex justify-center w-full py-2 gap-2">
                        <a href="#item1" className="btn btn-xs">1</a> 
                        <a href="#item2" className="btn btn-xs">2</a> 
                        <a href="#item3" className="btn btn-xs">3</a> 
                        <a href="#item4" className="btn btn-xs">4</a>
                    </div>
            </section> */}
                <section>
                    <div className="carousel w-full">
                        <div id="item1" className="carousel-item w-full">
                            <img src="https://source.unsplash.com/-YHSwy6uqvk" className="w-full rounded-lg" />
                        </div>
                        <div id="item2" className="carousel-item w-full">
                            <img src="https://source.unsplash.com/XoByiBymX20" className="w-full rounded-lg" />                        
                        </div>
                        <div id="item3" className="carousel-item w-full">
                            <img src="https://source.unsplash.com/-YHSwy6uqvk" className="w-full rounded-lg" />
                        </div>
                        <div id="item4" className="carousel-item w-full">
                            <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" className="w-full rounded-lg" />
                        </div>
                    </div>
                    <div className="flex justify-center w-full py-2 gap-2">
                        <a href="#item1" className="btn btn-xs">1</a>
                        <a href="#item2" className="btn btn-xs">2</a>
                        <a href="#item3" className="btn btn-xs">3</a>
                        <a href="#item4" className="btn btn-xs">4</a>
                    </div>
                </section>
                <section className="menu">
                    <h2 className="text-3xl font-bold mb-5 py-10">Popular item</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="card shadow-md">
                            <img src="images/egg kichuri.jpg" alt="Egg Khichuri" className="w-full h-48 object-cover rounded-t-lg" />
                            <div className="card-body">
                                <h3 className="text-xl font-bold mb-2 mt-5">Egg Khichuri</h3>
                                <p className="text-gray-600 mb-4 mt-5">Khichdi is a dish that pre-cooks rice, pulses, veggies and other ingredients. It is a comfort food, often eaten by those recuperating from illness</p>
                            </div>
                        </div>
                        <div className="card shadow-md">
                            <img src="images/chicken biriany.jpg" alt="Egg Khichuri" className="w-full h-48 object-cover rounded-t-lg" />
                            <div className="card-body">
                                <h3 className="text-xl font-bold mb-2 mt-5">Chicken Biriyani</h3>
                                <p className="text-gray-600 mb-4 mt-5">Chicken Biryani is a savory chicken and rice dish that includes layers of chicken, rice, and aromatics that are steamed together.</p>
                            </div>
                        </div>
                        <div className="card shadow-md">
                            <img src="images/plain rice.jpg" alt="plane rice" className="w-full h-48 object-cover rounded-t-lg" />
                            <div className="card-body">
                                <h3 className="text-xl font-bold mb-2 mt-5">Plain rice</h3>
                                <p className="text-gray-600 mb-4 mt-5">This special variety of rice is rated outstanding in every possible aspects, be it taste, quality or purity. It is free from dust and pebbles.</p>
                            </div>
                        </div>
                        <div className="card shadow-md">
                            <img src="images/rui fish.jpg" alt="rui fish" className="w-full h-48 object-cover rounded-t-lg" />
                            <div className="card-body">
                                <h3 className="text-xl font-bold mb-2 mt-5">Rohu fish</h3>
                                <p className="text-gray-600 mb-4 mt-5">Rohu fry feed mainly on zooplankton. Juveniles and adults show a strong positive selection for  selection for all zooplanktonic organisms .</p>
                            </div>
                        </div>
                        <div className="card shadow-md">
                            <img src="images/telapiya fish.jpg" alt="telapiya fish" className="w-full h-48 object-cover rounded-t-lg" />
                            <div className="card-body">
                                <h3 className="text-xl font-bold mb-2 mt-5">Tilapia fish</h3>
                                <p className="text-gray-600 mb-4 mt-5">Tilapia is a mild and flaky fish, making it easy to pair with various herbs, spices and sauces. Because tilapia is generally sold as fillets, it is a great choice for a quick-cooking meal.</p>
                            </div>
                        </div>
                        <div className="card shadow-md">
                            <img src="images/chicken roast.jpg" alt="chicken roast" className="w-full h-48 object-cover rounded-t-lg" />
                            <div className="card-body">
                                <h3 className="text-xl font-bold mb-2 mt-5">Chicken roast</h3>
                                <p className="text-gray-600 mb-4 mt-5">Rotisserie chicken is a chicken dish that is cooked on a rotisserie by using direct heat in which the chicken is placed next to the heat source.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-900 text-white py-8 px-4">
                <div className="container bg-gray-800 mx-auto py-10 px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <h2 className="text-2xl font-bold text-center">Independent University,Bangladesh</h2>
                            <p className="text-gray-400">Plot 16 Aftab Uddin Ahmed Rd, Dhaka 1229</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-auto text-center sm:text-left">
                        <h3 className="text-xl font-bold text-white mb-4">Menu</h3>
                        <ul className="list-none">
                            <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Menu</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Locations</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
                        </ul>
                    </div>
                    {/* <div className="w-full sm:w-auto text-center mb-6 sm:mb-0">
                <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
              </div> */}
                    <div className="w-full sm:w-auto text-center">
                        <h3 className="text-xl font-bold text-white mb-4">Newsletter</h3>
                        <form>
                            <div className="flex justify-center items-center">
                                <input type="email" placeholder="Enter your email address" className="bg-gray-700 rounded-l-lg px-4 py-2 w-56 sm:w-auto text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                <button type="submit" className="bg-blue-500 hover:bg-blue-600 rounded-r-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="bg-gray-700 py-2">
                    <div className="container mx-auto text-center text-gray-500">
                        <p>© 2023 Vite React Food Theme</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Main;  