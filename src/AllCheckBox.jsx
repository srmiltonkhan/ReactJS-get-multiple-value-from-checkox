import React from 'react'
import { useState, useEffect } from 'react';

const userData = [
    { name: "Jeevan" },
    { name: "Manish" },
    { name: "Prince" },
    { name: "Arti" },
    { name: "rahul" }
  ];

const AllCheckBox = () => {

        const [users, setUsers] = useState([]);
      
        useEffect(() => {
          setUsers(userData);
        }, []);

        const handleChange = (e) => {
          const { name, checked } = e.target;
          if(name==="allSelect"){
            let tempUser = users.map( (user) => {
              return {...user, isChecked:checked}
            })
            setUsers(tempUser)
          }else{
            let tempUser = users.map( (user) => 
              user.name === name ? {...user, isChecked:checked} : user
            )
            setUsers(tempUser)
          }
        }
      
        return (
          <div className="container my-4" style={{ width: "500px" }}>
            <form className="form w-100">
              <h3>Select Users</h3>
              <div className="form-check">
                <input type="checkbox"  name="allSelect"   onChange={handleChange} 
                className="form-check-input"  
                // checked={!users.some((user) => user?.isChecked !== true)}
                />
                
                <label className="form-check-label ms-2">All Select</label>
              </div>
              {
              users.map((user, index) => (
                <div className="form-check" key={index}>
                  <input
                    type="checkbox"
                    id={user.name}
                    name={user.name}
                    checked={user?.isChecked || false}
                    onChange={handleChange}
                  />
                  <label className="form-check-label ms-2" htmlFor={user.name}>{user.name}</label>
                </div>
              ))
              }
            </form>
          </div>
        );
}

export default AllCheckBox