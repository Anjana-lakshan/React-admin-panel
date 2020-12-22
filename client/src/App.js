import { Admin, Resource } from 'react-admin'

import PostCreate from './components/PostCreate'
import PostEdit from './components/PostEdit'
import PostList from './components/PostList'
import React from 'react'
import UserCreate from './components/UserCreate'
import UserEdit from './components/UserEdit'
import UserList from './components/UserList'
import restProvider from 'ra-data-simple-rest'

function App() {
  return <Admin dataProvider={restProvider('http://localhost:3000')}>
    <Resource 
    name='posts' 
    list={PostList} 
    create={PostCreate} 
    edit={PostEdit} 
    />
    <Resource 
    name='users' 
    list={UserList} 
    create={UserCreate} 
    edit={UserEdit} 
    />
  </Admin>
}

export default App;
