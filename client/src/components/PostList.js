import { Datagrid, DateField, DeleteButton, EditButton, List, TextField } from 'react-admin'

import React from 'react'

const PostList = (props) =>{
    return<List {...props}>
        <Datagrid>
            <TextField source='id'/>
            <TextField source='title'/>
            <DateField source='publishedAt'/>
            <EditButton basePath='/posts'/>
            <DeleteButton basePath='/posts'/>
        </Datagrid>
        </List>
}
export default PostList