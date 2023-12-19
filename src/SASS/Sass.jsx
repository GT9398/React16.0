import './Style.scss'
const SassApp = () => {
  return (
    <div className='wrapper'>
        <form action="">
        <h1>Register Here</h1>
        <br></br>   
            <input type="text" placeholder='Enter Name'/>
        <br></br>
            <input type="email" placeholder='Enter Email'/>
        <br></br>
            <input type="phone" placeholder='Enter Phone No.'/>
        <br></br>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default SassApp