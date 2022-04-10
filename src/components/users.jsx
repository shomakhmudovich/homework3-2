import React, { useState } from 'react'
import API from '../API'
import User from "./user";

const Users = ({ users, ...rest }) => {


  return (
    <>
      {users.length > 0 && (
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Имя</th>
              <th scope='col'>Качество</th>
              <th scope='col'>Профессия</th>
              <th scope='col'>Встретились раз</th>
              <th scope='col'>Оценка</th>
              <th scope='col'>Избранное</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
          {users.map(user=><User key={user._id} {...user} {...rest}/> )}
          </tbody>
        </table>
      )}
    </>
  )
}

export default Users
