import React from "react";
import './note.css';
import StripeCheckout from 'react-stripe-checkout';

function Note(props){

function handleToken(token, addresses) {

}


return <div className="note">
    <div className="container">
    <h2>{props.name}</h2>
    <i className='fab fa-pagelines' id='unikatna'></i>
    <p>{props.description}</p>
    <h4>$  {props.price}</h4>
   
    <StripeCheckout
    className='stripe-checkout'
    stripeKey='pk_test_51I2EW9JJBvgEwazlAUP1rdMHbco4FsspcecU7PGdJ6Ahoy3qTaoPWXXkBzPKJErAYEcye6w8014BvuZKwVHAk8tP00L02eGAot'
    token={handleToken}
    amount={props.price * 100} 
    name={props.name}/>
    

   
    
    </div>
    
</div>
}

export default Note;
