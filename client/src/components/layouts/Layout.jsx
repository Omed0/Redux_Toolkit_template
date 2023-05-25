
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
    return (
        <>
            <Header />
            <main className='font-mono'>
                <Outlet />
            </main>
        </>
    )
}

export default Layout