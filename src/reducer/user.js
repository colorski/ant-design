import { combineReducers } from 'redux'
//import _ from 'underscore'
import cr from '../utils/cr'
import {
  USER_BASEINFO,
  USER_CONTACT,
  USER_PICTURE,
  EDIT_BASE,
  EDIT_CONTACT
} from '../actions/user'

export default combineReducers({
  base: cr(null,{
    [USER_BASEINFO]({base}){
      return base
    }
  }),
  editBase: cr(false,{
    [EDIT_BASE]({editBase}){
      return editBase
    }
  }),
  contact: cr(null,{
    [USER_CONTACT]({contact}){
      return contact
    }
  }),
  editContact: cr(false,{
    [EDIT_CONTACT]({editContact}){
      return editContact
    }
  }),
  pictureUrl: cr(null,{
    [USER_PICTURE]({pictureUrl}){
      return pictureUrl || null
    }
  }),
})

