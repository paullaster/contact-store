import React from 'react'
import { deleteContact } from '../Contact'
import { redirect } from 'react-router-dom'

export const action = async ({params}) => {
    await deleteContact(params.contactId)
    return redirect ("/");
}