import { PropsWithChildren } from 'react';
import classes from './index.module.scss';
import Footer from '../footer';

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <div className={classes.layout} >
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout
