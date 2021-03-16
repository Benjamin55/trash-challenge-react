import React  from 'react';
import './donations.css';
import productInfo from './productInfo';
import Note from './Note'

function setCard(data) {
    return <Note 
        key={data.id}
        name = {data.name}
        description = {data.description}
        price = {data.price}
        img = {data.img}
    />
}


function Donations() {

    return (
        <div className='donations'>
            <div className="donate">
                
            </div>
            <h1>BE THE PART OF TRASH CHALLENGE COMUNITY AND HELP US CLEAN THE PLANET</h1>
            <div className='setCard'>{productInfo.map(setCard)}</div>  
        </div>
    )
}

export default Donations
