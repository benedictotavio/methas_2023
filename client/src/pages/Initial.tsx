import * as React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';

export interface IInitialProps {
}

export default function Initial(props: IInitialProps) {
    return (
        <div>
            <Navbar />
            <div>
                METHAS
            </div>

            <div>
                <button>
                    <Link to='/login'>
                        Sign In
                    </Link>
                </button>
            </div>
        </div>
    );
}