import React, { useState } from 'react'
import  { nanoid } from 'nanoid'
const App = () => {
  const  [user, setUser] = useState([])
  const [Form,setForm] = useState({})
  const [Search,setSearch] = useState("")
  const handleChange =(event)=>{
    const {name, value} = event.target
    setForm({...Form, [name]:value})
  }
  const handleSubmit =(event)=>{
    event.preventDefault();
    let id = nanoid()
    const paylout = {...Form, id}
    user.push(paylout)
    setUser([...user])
    event.target.reset()
    }
    const deleteUser =(i)=>{
      let new_user = user.filter((item,index) => index !== i)
      setUser([...new_user])
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
              <form id='submit' onSubmit={handleSubmit}>
              <input required type="text" name="name" onChange={handleChange} placeholder='Name' className='from-control my-2'/>
              <input required type="number" name="age" onChange={handleChange} placeholder='Age' className='from-control my-2'/>
              <input required type="number" name="phone" onChange={handleChange} placeholder='Phone' className='from-control my-2'/>
              <input required type="text" name="address" onChange={handleChange} placeholder='Address' className='from-control my-2'/>
            </form>
              </div>
              <div className="card-footer">
                <button type='submit' form='submit'>Add user</button>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6">
                <input type="text" placeholder='Search..' onChange={(e)=>setSearch(e.target.value)} className='from-control mb-2' />
              </div>
            </div>
            <table className='table table-bordered table-hover table-striped'>
              <thead>
                <tr>
                  <td>T/R</td>
                  <td>Name</td>
                  <td>Age</td>
                  <td>Phone</td>
                  <td>Address</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {
                  user?.filter((item)=>{
                    if(item?.name?.toLowerCase().includes(Search.toLowerCase())){
                      return item
                    }
                  }).map((item,index) =>{
                    return <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.phone}</td>
                    <td>{item.address}</td>
                    <td><button type='submit' className='btn btn-danger' onClick={()=>deleteUser(index)}><i className="fa-regular fa-trash-can"></i></button></td>
                    </tr>
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
