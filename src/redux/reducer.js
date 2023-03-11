import { createReduxModule } from "hooks-for-redux";
const initialState = {
     showUpdate: false,
     newID: 0,
     users: [
          {
               firstName: "John",
               lastName: " March",
               email: "www.gmail.com",
               id: 1,
          },
          {
               firstName: "Hanna",
               lastName: " David",
               email: "hanna.hotmail.com",
               id: 2,
          },
     ],
}
export const [useUser, { addUser, showUpdateStatus, updateUser,cancelUpdate, removeUser }] = createReduxModule("user", initialState, {
     addUser: (state, userObj) => {
          return {
               ...state,
               users: [...state.users, userObj]
          }
     },
     showUpdateStatus: (state,id) => {
          return {
               ...state,
               showUpdate: state.showUpdate = true,
               newID: state.newID = id
          }
     },
     updateUser: (state, {newfirstName, newlastName, newemail,},) => {
          return {
               ...state,
               users: state.users.map((item) => {
                    if (item.id === state.newID) {
                         item.firstName = newfirstName
                         item.lastName = newlastName,
                              item.email = newemail
                    }
                    return item
               }),
               showUpdate: state.showUpdate = false
          }
     },
     cancelUpdate:(state)=>{
          return{
               ...state,
               showUpdate: state.showUpdate = false
          }
     },
     removeUser: (state, id) => {
          return {
               ...state,
               users: state.users.filter((item) => (
                    item.id != id
               ))
          }
     }
})
