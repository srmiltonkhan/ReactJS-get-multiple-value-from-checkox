import React, { useState } from "react";

import {selectOptionData} from "./selectOptionData";

  
function CheckboxForm() {
  const [permissions, setPermissions] = useState({
    permissionsArray: []
  });
  
  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { permissionsArray } = permissions;
    
    // Case 1 : The user checks the box
    if (checked) {
      setPermissions({
        permissionsArray: [...permissionsArray, value],
      });
    }
    // Case 2  : The user unchecks the box
    else{
      setPermissions({
        permissionsArray: permissionsArray.filter((item) => item !== value),
      })
    }

  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(permissions.permissionsArray)
  }


    
  return (

          <form onSubmit={handleSubmit}>
              {
                selectOptionData.map( (item, index) => 
                  <div key={index}>
                    <input type="checkbox" name="" value={item.name} onChange={handleChange}/>
                    <label>{item.name}</label>
                  </div>
                )
              }   

              <textarea name="response" value={permissions.permissionsArray}  onChange={handleChange} ></textarea>

              <input type="submit" value="Save" onClick={handleSubmit} />
          </form>
     
 
  );
}
  
export default CheckboxForm;