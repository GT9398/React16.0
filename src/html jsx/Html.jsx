import React from 'react'
import Image1 from '../html jsx/images/img1.png'
// import video1 from '../html jsx/Video/video1'
// import Audio1 from './Audio/audio1'
const Html = () => {
  return (
    <div className='html'>
        <h1>Welcome To React Html </h1>
        <img src="https://plus.unsplash.com/premium_photo-1700566981992-a193442997d5?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" height={'500px'} width={'49%'}/>
        <img src={Image1} alt='' height={'500px'} width={'49%'}></img>
        {/* <audio src={}></audio> */}
        {/* <video src={video1}></video> */}
        <iframe width="50%" height="500" src="https://www.youtube.com/embed/ONpQVfMOvtI?si=rWrVtXyV4TTFhjdW" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.4964044841295!2d73.91112627496254!3d18.506456682584417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1c1fceb8377%3A0xb160caad3213fedf!2sKumar%20Primus!5e0!3m2!1sen!2sin!4v1702443379822!5m2!1sen!2sin" width="49%" height="500"  loading="lazy" ></iframe>

        <table border={1} rules={'all'}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Place</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ganesh</td>
              <td>ganesh@gmail.com</td>
              <td>Yedshi</td>
            </tr>
            <tr>
              <td>Ganesh</td>
              <td>ganesh@gmail.com</td>
              <td>Yedshi</td>
            </tr>
            <tr>
              <td>Ganesh</td>
              <td>ganesh@gmail.com</td>
              <td>Yedshi</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3} >@CopyWrite Ganesh</td>
            </tr>
          </tfoot>
        </table>
    </div>
  )
}

export default Html