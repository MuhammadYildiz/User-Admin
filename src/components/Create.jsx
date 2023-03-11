import React, { useState } from 'react'
import { useUser, addUser, showUpdateStatus, removeUser } from "../redux/reducer"
export default function Create() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [inputAlert, setInputAlert] = useState("")
    const userData = useUser().users
    const userShow = useUser().showUpdate
    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName && lastName && email) {
            setInputAlert("")
            const userObj = {
                firstName,
                lastName,
                email,
                id: Math.floor(Math.random() * 100)
            }
            addUser(userObj);
            setFirstName("")
            setLastName("")
            setEmail("")
        }
        else {
            setInputAlert("Please complate All Input")
        }
    }
    return (
        <div className='flex flex-col justify-center items-center  m-5 p-5'>
            {!userShow && <form onSubmit={handleSubmit} className=' rounded-lg p-2 flex flex-col justify-center items-center bg-white shadow-2xl shadow-gray-900 '>
                <h1 className='text-3xl text-green-600 my-5'>Create Users</h1>
                <div className='flex justify-around items-end flex-col md:flex-row bg-white shadow-2xl shadow-gray-400 '>
                    <label className='m-3'>
                        <span>First Name: </span>
                        <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} onFocus={() => setFirstName("")} className='border border-red-600 px-2 rounded-2xl py-1 ' placeholder='First name...' />
                    </label>
                    <label className='m-3'>
                        <span>Last Name: </span>
                        <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} onFocus={() => setLastName("")} className='border border-red-600 px-2 rounded-2xl py-1 ' placeholder='Last name...' />
                    </label>
                    <label className='m-3'>
                        <span>Email: </span>
                        <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} onFocus={() => setEmail("")} className='border border-red-600 px-2 rounded-2xl py-1 ' placeholder='Email...' />
                    </label>
                </div>
                <p className='text-xl text-red-500 text-center h-8 my-3'>{inputAlert}</p>
                <button type="submit" className='bg-blue-700 text-white px-4 py-2 mb-5 rounded-lg hover:bg-black shadow-2xl shadow-gray-900 '>
                    Add User
                </button>
            </form>}
            <h1 className='text-3xl text-green-600 my-10 shadow-2xl shadow-gray-900 p-3'>Users List</h1>
            <div className='flex flex-col flex-wrap sm:flex-row justify-center items-center w-full shadow-2xl shadow-gray-900 rounded-3xl p-5'>
                {userData.map((user, id) => (
                    <div key={id} className="border-2 border-green-400 p-3 m-3 flex flex-col justify-center items-center shadow-2xl shadow-gray-900 rounded-3xl ">
                        <div className='m-3'>
                            <p>First Name : {user.firstName}</p>
                            <p>Last Name : {user.lastName}</p>
                            <p>Email : {user.email}</p>
                        </div>
                        <div>
                            <button onClick={() => showUpdateStatus(user.id)}
                                className='bg-blue-700 text-white px-4 m-2 py-2 rounded-lg hover:bg-black'>Update User</button>
                            <button onClick={() => removeUser(user.id)} className='bg-blue-700 text-white px-4 m-2 py-2 rounded-lg hover:bg-black'>Remove User</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
