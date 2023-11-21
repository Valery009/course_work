import React from 'react';
import { useJsApiLoader } from '@react-google-maps/api';
import Map from '../components/Map';
// Import necessary libraries and components

// Set container styles
const containerStyle: React.CSSProperties = {
    width: '100%',
    height: '100vh'
};

// Set the location htmlFor the map marker
const vitiLocation: google.maps.LatLngLiteral = {
    lat: 50.43012204275398,
    lng: 30.54400779179949
};

// Define the Contacts component
const Contacts: React.FC = () => {
    // Load Google Maps API
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBqVMbGUagGhsttUJGP68IX1nb_XkmWvFQ"
    });
    const svgCode = encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="#ff0000" /></svg>');


    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <div className="absolute inset-0 bg-gray-300" style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}>
                        {isLoaded ? (
                            <Map
                                mapContainerStyle={containerStyle}
                                center={vitiLocation}
                                zoom={13}
                                markerPosition={vitiLocation}
                                markerIcon={{
                                    url: `data:image/svg+xml;utf8,${svgCode}`

                                }}

                            />
                        ) : <></>}
                    </div>
                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">АДРЕСА</h2>
                            <p className="mt-1">Київ, вул.Князів Острозьких,45/1</p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ЕЛЕКТРОННА ПОШТА</h2>
                            <a className="text-blue-500 leading-relaxed">examl@dsa.com</a>
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">ТЕЛЕФОН</h2>
                            <p className="leading-relaxed">123-456-7890</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Зворотний зв'язок</h2>
                    <p className="leading-relaxed mb-5 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, veritatis.</p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Ім'я</label>
                        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Електронна пошта</label>
                        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Повідомлення</label>
                        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Відправити</button>
                    <p className="text-xs text-gray-500 mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio vitae quibusdam quo modi voluptatum officiis autem expedita molestias eius. Architecto delectus ducimus labore unde maxime soluta aut, repellendus doloribus ea aliquid quasi? Perferendis praesentium provident, earum ex nobis eum veritatis accusantium alias aliquid est? Inventore fugit nostrum atque veniam? Omnis?</p>
                </div>
            </div>
        </section>

    );
};

// Export the Contacts component
export default Contacts;

