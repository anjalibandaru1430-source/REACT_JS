import React, { useEffect, useState } from 'react';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import Axios from 'axios';
const ContactApp = () => {
  let [users,setUsers]=useState([]);
  let [selUser,setSelUser]=useState({});
  useEffect(()=>{
    let url='https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist'
    Axios.get(url)
    .then((resp)=>{setUsers(resp.data)})
    .catch()
  },[])
  let getSelContact=(user)=>{
    console.log(user.name.first)
    setSelUser(user)
  }
  return <div className='container'>
        <h2>ContactApp Compoent</h2>
        <pre>{JSON.stringify(users)}</pre>
        <pre>{JSON.stringify(selUser)}</pre>
        <div className="row">
          <div className="col-8">
           {
                  users.length>0 ? <>
                  <ContactList  users={users} getSelContact={getSelContact}/>
                  </>:<>No Data</>
                }
          </div>
          <div className="col-4">
                {
                  Object.keys(selUser).length>0?
                  <>
                  <ContactDetails selUser={selUser}/>
                  </>:<>No Data</>
                }
          </div>
        </div>
                
                <hr/>
                
               
                
                
            </div>
}

export default ContactApp