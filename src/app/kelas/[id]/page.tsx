'use client';

import { useParams } from 'next/navigation';

export default function id() {
    const {id} = useParams();
    return (
        <div>
            <h1>WELCOME TO KELAS</h1>
            <p>Welcome to the kelas page with ID: {id}!</p>
        </div>
    );
}