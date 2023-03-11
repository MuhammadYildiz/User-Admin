
import React, { useState } from 'react'
import { useUser, updateUser,cancelUpdate } from "../redux/reducer"
export default function Update() {
    const [newfirstName, setnewFirstName] = useState("")
    const [newlastName, setnewLastName] = useState("")
    const [newemail, setnewEmail] = useState("")
    const [inputAlert, setInputAlert] = useState("")
    const userShow = useUser().showUpdate
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newfirstName && newlastName && newemail) {
            setInputAlert("")
            const userObj = {
                newfirstName,
                newlastName,
                newemail,
            }
            updateUser(userObj);
            setnewFirstName("")
            setnewLastName("")
            setnewEmail("")
        }
        else {
            setInputAlert("Please complate All Input")
        }
    }
    return (
        <div>
            {userShow && <div className='flex flex-col justify-center items-center  top-0 p-5  w-screen h-screen absolute'>
                <form onSubmit={handleSubmit} className='border bg-white shadow-2xl shadow-gray-900  h-[80%] rounded-lg p-2 flex flex-col justify-center items-center'>
                    <h1 className='text-3xl text-green-600 m-3 mb-10 bg-white shadow-2xl shadow-gray-900 p-3 '>Update User</h1>
                    <div className='flex justify-around items-end flex-col md:flex-row bg-white shadow-2xl shadow-gray-900 rounded-xl'>
                        <label className='m-3'>
                            <span>New First Name: </span>
                            <input type="text" onChange={(e) => setnewFirstName(e.target.value)} value={newfirstName} onFocus={() => setnewFirstName("")} className='border border-red-600 px-2 ' placeholder='First name...' />
                        </label>
                        <label className='m-3'>
                            <span>Last Name: </span>
                            <input type="text" onChange={(e) => setnewLastName(e.target.value)} value={newlastName} onFocus={() => setnewLastName("")} className='border border-red-600 px-2 ' placeholder='Last name...' />
                        </label>
                        <label className='m-3'>
                            <span>newEmail: </span>
                            <input type="text" onChange={(e) => setnewEmail(e.target.value)} value={newemail} onFocus={() => setnewEmail("")} className='border border-red-600 px-2 ' placeholder='newEmail...' />
                        </label>
                    </div>
                    <p className='text-xl text-red-500 text-center h-8'>{inputAlert}</p>
                    <button type="submit" className='bg-blue-700 text-white px-4 py-2 mb-5 rounded-lg hover:bg-black shadow-2xl shadow-gray-900'>
                        Done
                    </button>
                    <button type='button' onClick={()=>cancelUpdate()} className='bg-yellow-700 hover:bg-red-700 text-white px-4 py-2 mb-5 rounded-lg shadow-2xl shadow-gray-900 '>
                        Cancel Update
                    </button>
                </form>

            </div>}
        </div>
    )
}
