import React from 'react';
import './Contact.css';
export const Contact = ({ data }) => {
  return <div className="contacts">
    {data.map(element => <div className='aaaa'>
      <div className='contact' key={element.email}>
        <img src='https://avatars.mds.yandex.net/get-pdb/1930923/ef167839-904e-445e-9c86-a38bad90aaf8/s1200' />
        <div className="tvyalner">
          <p><h3>{element.name}</h3></p>
		  <div className="parb"><img src='https://i7.pngguru.com/preview/178/595/684/user-profile-computer-icons-login-user-avatars.jpg' height="20" width="20" />  {element.username}</div>
          <div className="parb"><img src='https://tochkatepla71.ru/sites/default/files/high-contrast-emblem-mail.svg_.png' height="20" width="20" /> <a href={`mailto:${element.email}`}>  {element.email} </a></div>
          <div className="parb"><img src='https://c7.hotpng.com/preview/982/427/634/telephone-call-computer-icons-iphone-symbol-telefono.jpg' height="20" width="20" />    {element.phone}</div>
        </div>
      </div>
      <p className="Address">Address</p>
      <div className='street'>
        <p> Street:  {element.address.street}</p>
        <p> Suite:  {element.address.suite}</p>
        <p> City:  {element.address.city}</p>
        <p> Zipcode:  {element.address.zipcode}</p>
      </div>
    </div>)}
  </div>
}

export default Contact;