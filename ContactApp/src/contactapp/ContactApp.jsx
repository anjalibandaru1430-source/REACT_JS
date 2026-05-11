import React, { useEffect, useState } from 'react';
import ContactList from './ContactList';
import Axios from 'axios';
const ContactApp = () => {
  let [users,setUsers]=useState([]);
  useEffect(()=>{
    let url='https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist'
    Axios.get(url)
    .then((resp)=>{setUsers(resp.data)})
    .catch()
  },[])
  return <div>
                <h2>ContactApp Compoent</h2>
                <hr/>
                <pre>{JSON.stringify(users)}</pre>
                {
                  users.length>0 ? <>
                  <ContactList  users={users}/>
                  </>:<>No Data</>
                }
                
            </div>
}

export default ContactApp