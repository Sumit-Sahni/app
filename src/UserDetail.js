import React from "react";
import styledComponents from "styled-components";

const Container = styledComponents.div`
     font-size:0.6rem;
`


const UserDetail = (props) => {
    const  {location:{street:{name},city,state}, name:{title ,first, last}, email, dob:{age}} = props.user;
    return(
        <div>
          <Container>
            <h3>{title}  {first} {last}</h3>
            <p>Email: {email} |</p><p>Age: {age}</p> 
            <p>Street: {name}</p><p>City: {city}</p><p>State: {state}</p>
          </Container>
        </div>
    )
}
export default UserDetail;
