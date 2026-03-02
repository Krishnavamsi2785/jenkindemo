import React from 'react'

const page = () => {
  return (
    <>

        <div className='login' style={{ height: '100vh', backgroundColor: '#a0ec90ff', margin: '0'}}>
            <h1 style={{marginTop:"0px", color: 'white',fontSize:"24px",display:"flex", justifyContent:"center"}}><strong>Login Page</strong></h1>
            <div style={{display:"flex",flexDirection:"column",height:"200px",width:"300px",backgroundColor:"white",borderRadius:"10px",margin:"0 auto",marginTop:"50px",alignItems:"center",justifyContent:"center"}}>
                <input type="text" placeholder='Username' style={{padding: '10px', margin: '10px', borderRadius: '5px', border: 'none'}} />
                <input type="password" placeholder='Password' style={{padding: '10px', margin: '10px', borderRadius: '5px', border: 'none'}} />
                <input type="email" placeholder='email' style={{padding: '10px', margin: '10px', borderRadius: '5px', border: 'none'}} />

                <button style={{padding: '10px 20px', margin: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#333', color: 'white'}}>Login</button>
            </div>

        </div>
    </>
  )
}

export default page