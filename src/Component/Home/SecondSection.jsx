import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToyCardBoat from './ToyCardBoat';
import ToyCardCar from './ToyCardCar';
import ToyCardPlane from './ToyCardPlane';

const SecondSection = () => {

    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch("https://toy-server.vercel.app/toys")
            .then(res => res.json())
            .then(data => setToys(data))

    }, [])

    const boats = toys.filter(toy => toy.subCategory === "Boat");
    const cars = toys.filter(toy => toy.subCategory === "Car");
    const planes = toys.filter(toy => toy.subCategory === "Plane");

    console.log(boats);

    return (
        <div className='bg-white py-16'>
            <div className='max-w-7xl mx-auto px-2 '>
                <Tabs>
                    <TabList className={"flex justify-center border-b"}>
                        <Tab >Car</Tab>
                        <Tab >Boat</Tab>
                        <Tab>Plane</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8'>
                            {
                                cars.map(car => <ToyCardCar
                                    key={car._id}
                                    car={car}
                                ></ToyCardCar>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8'>
                            {
                                boats.map(boat => <ToyCardBoat
                                    key={boat._id}
                                    boat={boat}
                                ></ToyCardBoat>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8'>
                            {
                                planes.map(plane => <ToyCardPlane
                                    key={plane._id}
                                    plane={plane}
                                ></ToyCardPlane>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default SecondSection;