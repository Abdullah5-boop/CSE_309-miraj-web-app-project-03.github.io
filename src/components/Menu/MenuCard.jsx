import React from 'react';

const MenuCard = ({ data, datalist }) => {
    return (
        <div className='gap-5'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://source.unsplash.com/2lWGQ02DGL8" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{data.id}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={() => datalist(data)}>Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;