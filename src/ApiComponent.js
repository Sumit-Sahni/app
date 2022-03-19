import React, {useState, useEffect} from "react";
import styledComponents from "styled-components";
import UserDetail from "./UserDetail";


const NavBar = styledComponents.div`
 position: sticky;
 top: 0;
 justify-content: flex-start;
 display: flex;
 flex-wrap: wrap;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
 padding: 0.5rem;
 box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

`

const Container = styledComponents.div`
   display: flex;
   flex-direction: row;
   margin:auto;
   width:100%;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
   justify-content: space-evenly;
   padding: 0 1rem 1rem;
   
`
const UserImage = styledComponents.img`
   width: 12%;
   border-radius: 50%;  
`
const ImageLogo = styledComponents.img`
   width: 5%;
   height: 5%;
`
const Detail = styledComponents.div`

 width: 28%;
 height: 10%;
 display: flex;
 flex-wrap: wrap;
 flex-direction: row;
 align-items: center;
 justify-content: center;
 margin-top:1rem;
 box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`

const SubDetail = styledComponents.div`
   font-size:0.8em;
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   width:70%;
   self-align: flex-start;
   margin-left:1rem;
`
const Loading = styledComponents.div`
     display: flex;
     flex-direction: column;
     text-align: center;
     align-items: center;
     text-align: center;
`
const Search = () => {
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState("");

 //  const fetchData = async () => {
 //        const res = await axios.get(`https://randomuser.me/api/?results=15`)
 //        setUsers(res.data.results);   
 //  };

 async function fetchData() {
   const response = await fetch('https://randomuser.me/api/?results=15');
   console.log(response);
   const data = await response.json();
   setUsers(data.results);
 }
 useEffect(()=>{
   fetchData();
 },[])


 if(!users.length){
   return <Container>
           <Loading>
             <img style={{width: '50%', height: '50%' }} src={"https://th.bing.com/th/id/OIP.GqqdcfVlXkWp0hEK_2QVqAHaHa?pid=ImgDet&w=195&h=195&c=7&dpr=1.25"}/>
             <h1>Loading...</h1>
           </Loading>
        </Container>
 }

const mapUser = ()=>{  
     console.log(users);
       return users.filter((user) => user.name.first.includes(input)).map(user =>(
           <Detail  key={user.login.uuid}>        
             <UserImage src={user.picture.large} alt={user.login.username}/>
             <SubDetail>
               <UserDetail user={user}/>
              </SubDetail>
           </Detail>
           
       ));
   
  };



  const handleChange = (e)=>{
       setInput(e.target.value);
  }
 
   return(
    
       <div>
         <NavBar>
             <ImageLogo 
                src={"https://th.bing.com/th/id/OIP.GqqdcfVlXkWp0hEK_2QVqAHaHa?pid=ImgDet&w=195&h=195&c=7&dpr=1.25"}>
             </ImageLogo>
            <input 
               type="text" 
               value={input} 
               onChange={handleChange}
               placeholder="Search..."
            />
        </NavBar>
      
        <Container>
         {!users.filter((user) => user.name.first.includes(input)).length ? <h1>No Data Found</h1> :<Container>{mapUser()}</Container>}
        </Container>
        </div>
       
   )
}   

export default Search;
