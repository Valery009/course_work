import { FC } from 'react';
import { Outlet } from 'react-router-dom'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';
const Layout: FC = () => {
    const [name, setName] = useState('');
    const handleNameChange = (name:string) => {
        setName(name);
    }
    return (
        <div className='w-full h-screen  font-roboto text-white'>
            <Header onChange={handleNameChange} /> 

            <div className='container max-w-[100%] mx-auto'> 
                <Outlet context={[name,setName]}/>
            </div>
            <Footer />
        </div>
    )
}

export default Layout;