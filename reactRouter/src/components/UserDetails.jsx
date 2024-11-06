import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
   const userId= useParams();
   //useParams get a current route 
   //we want to access the parameters of current route 
   //give value in object form
   //that's why using userId.id
   const id=userId.id;
   //id is come form dynamic route[path=':id']
    return (
        <div>
            <h2>User Details Page--{id}</h2>
        </div>
    );
}

export default UserDetails;
