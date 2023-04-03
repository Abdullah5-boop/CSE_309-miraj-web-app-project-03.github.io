import React, { useEffect, useState } from 'react';
import './Menu.css';
import MenuCard from './MenuCard';

const Menu = () => {

    const [food, setuseFood] = useState([])
    const [value,setvalue]=useState(0)
 
    let emtyArray = []
   
    const datalist = (data) => {
        emtyArray.push(data)
        console.log(data)
        setvalue(p=>p+data.id)
    }
  


    let url = 'https://jsonplaceholder.typicode.com/posts'
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setuseFood(data))
    }, [])
    console.log(value)
    return (
        <section className='w-[100vw] grid grid-cols- lg:grid-cols-3'>
            <div className='container col-span-2 bg-purple-500'>
                <div className='grid grid-cols-1 lg:grid-cols-2 ml-10 gap-10 mt-10'>
                    {
                        food.map(data => <MenuCard datalist={datalist} data={data} key={data.key}></MenuCard>)
                    }
                </div>
            </div>
            <div className=' bg-gray-300'>
                {emtyArray.map(e=><>name : {e.title}</>)}
                <h1 className='menu-setting text-center text-3xl mt-10'>Sum of order : {value}</h1>

            </div>
        </section>
    );
};

export default Menu;