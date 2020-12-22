import {Create, DateInput, SimpleForm, TextInput} from 'react-admin'

import React from 'react'

const PostCreate = (props) => {
    return(
       <Create title='Create a Post' {...props}>
           <SimpleForm>
               <TextInput source='title'/>
               <TextInput multiline source='body'/>
               <DateInput label='Published' source='publishedAt'/>
           </SimpleForm>
       </Create>
    )
}
export default PostCreate
