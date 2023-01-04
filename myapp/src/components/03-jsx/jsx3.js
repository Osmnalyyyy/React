import React from "react";

// comment satırı
/* 
comment bloğu
*/

const Jsx3 = () => {
  const isAdmin = true;
  return (
    <div>
      {isAdmin ? (
        <>
          <h2>Admin Menu</h2>
          <ul>
            <li>Create user</li>
            <li>Update user</li>
            <li>Delete user</li>
          </ul>
        </>
      ) : (
        <>
          <h2>User Menu</h2>
          <ul>
            <li>Login user</li>
            <li>REgister user</li>
          </ul>
        </>
      )}
    </div>
  );
};

export default Jsx3;
