import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Authentication/AuthProvider';

const MyToys = () => {

    const { user } = useContext(AuthContext);

    const [myToys, setMyToys] = useState([]);

    useEffect(() => {
        fetch(`https://toy-server.vercel.app/toys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data);
            })
    }, [user]);

    // console.log(myToys);

    return (
        <div>
            <h2>My Toys: {myToys.length}</h2>
        </div>
    );
};

export default MyToys;