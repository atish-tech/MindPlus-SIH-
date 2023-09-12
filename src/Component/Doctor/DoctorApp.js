import React from 'react'
import "./Doctor.css"
import Footer from "../Footer/Footer"
import DoctorCart from './DoctorCart'

const DoctorApp = () => {
  const doctorData = [{
    name: 'Dr. John Smith',
    domain: 'www.drjohnsmith.com',
    language: 'Hindi English',
    specification: 'Psychiatrist',
    contact: '8839207439',
    session: '12pm-3pm',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzA2p12P1URW3LPX-I7HhIFrLl42lTWHwZXT2VXDcVsg&s',
    noOfSession: 200,
    language: "Hindi",
    experience: 4,
    email: "abc@gmail.com",
    },

  {
    name: 'Dr. Jane Doe',
    domain: 'www.drjanedoe.com',
    language: 'Hindi English',
    specification: 'Counseling Psychiatrist',
    contact: '8435041204',
    session: '12pm-3pm',

    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzA2p12P1URW3LPX-I7HhIFrLl42lTWHwZXT2VXDcVsg&s',
    noOfSession: 200,
    language: "Hindi English",
    experience: 8,
    email: "abcd@gmail.com",
  },
  {
    name: 'Dr. Michael Johnson',
    domain: 'www.drmichaeljohnson.com',
    language: 'Hindi English',
    specification: 'Boon',

    contact: '6263339986',
    session: '12pm-3pm',

    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzA2p12P1URW3LPX-I7HhIFrLl42lTWHwZXT2VXDcVsg&s',
    noOfSession: 200,
    language: "English",
    experience: 1,
    email: "abc@gmail.com",
  },
  {
    name: 'Dr. John Smith',
    domain: 'www.drjohnsmith.com',
    language: 'Hindi English',
    specification: 'Psychiatrist',
    contact: '8839207439',
    session: '12pm-3pm',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzA2p12P1URW3LPX-I7HhIFrLl42lTWHwZXT2VXDcVsg&s',
    noOfSession: 200,
    language: "Hindi",
    experience: 4,
    email: "abc@gmail.com",
    },
  {
    name: 'Dr. Jane Doe',
    domain: 'www.drjanedoe.com',
    language: 'Hindi English',
    specification: 'Counseling Psychiatrist',
    contact: '8435041204',
    session: '12pm-3pm',

    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzA2p12P1URW3LPX-I7HhIFrLl42lTWHwZXT2VXDcVsg&s',
    noOfSession: 200,
    language: "Hindi English",
    experience: 8,
    email: "abc@gmail.com",
  },
  {
    name: 'Dr. Michael Johnson',
    domain: 'www.drmichaeljohnson.com',
    language: 'Hindi English',
    specification: 'Boon',

    contact: '6263339986',
    session: '12pm-3pm',

    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzA2p12P1URW3LPX-I7HhIFrLl42lTWHwZXT2VXDcVsg&s',
    noOfSession: 200,
    language: "English",
    experience: 1,
    email: "abc@gmail.com",
  },
  {
    name: 'Dr. John Smith',
    domain: 'www.drjohnsmith.com',
    language: 'Hindi English',
    specification: 'Psychiatrist',
    contact: '8839207439',
    session: '12pm-3pm',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzA2p12P1URW3LPX-I7HhIFrLl42lTWHwZXT2VXDcVsg&s',
    noOfSession: 200,
    language: "Hindi",
    experience: 4,
    email: "abc@gmail.com",
    },
  {
    name: 'Dr. Jane Doe',
    domain: 'www.drjanedoe.com',
    language: 'Hindi English',
    specification: 'Counseling Psychiatrist',
    contact: '8435041204',
    session: '12pm-3pm',

    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzA2p12P1URW3LPX-I7HhIFrLl42lTWHwZXT2VXDcVsg&s',
    noOfSession: 200,
    language: "Hindi English",
    experience: 8,
    email: "abc@gmail.com",
  },
  {
    name: 'Dr. Michael Johnson',
    domain: 'www.drmichaeljohnson.com',
    language: 'Hindi English',
    specification: 'Boon',

    contact: '6263339986',
    session: '12pm-3pm',

    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzA2p12P1URW3LPX-I7HhIFrLl42lTWHwZXT2VXDcVsg&s',
    noOfSession: 200,
    language: "English",
    experience: 1,
    email: "abc@gmail.com",
  },
  {
    name: 'Dr. John Smith',
    domain: 'www.drjohnsmith.com',
    language: 'Hindi English',
    specification: 'Psychiatrist',
    contact: '8839207439',
    session: '12pm-3pm',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzA2p12P1URW3LPX-I7HhIFrLl42lTWHwZXT2VXDcVsg&s',
    noOfSession: 200,
    language: "Hindi",
    experience: 4,
    },
  {
    name: 'Dr. Jane Doe',
    domain: 'www.drjanedoe.com',
    language: 'Hindi English',
    specification: 'Counseling Psychiatrist',
    contact: '8435041204',
    session: '12pm-3pm',

    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzA2p12P1URW3LPX-I7HhIFrLl42lTWHwZXT2VXDcVsg&s',
    noOfSession: 200,
    language: "Hindi English",
    experience: 8,
  },
  {
    name: 'Dr. Michael Johnson',
    domain: 'www.drmichaeljohnson.com',
    language: 'Hindi English',
    specification: 'Boon',

    contact: '6263339986',
    session: '12pm-3pm',

    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzA2p12P1URW3LPX-I7HhIFrLl42lTWHwZXT2VXDcVsg&s',
    noOfSession: 200,
    language: "English",
    experience: 1,
  },
  {
    name: 'Dr. John Smith',
    domain: 'www.drjohnsmith.com',
    language: 'Hindi English',
    specification: 'Psychiatrist',
    contact: '8839207439',
    session: '12pm-3pm',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzA2p12P1URW3LPX-I7HhIFrLl42lTWHwZXT2VXDcVsg&s',
    noOfSession: 200,
    language: "Hindi",
    experience: 4,

    },
  {
    name: 'Dr. Jane Doe',
    domain: 'www.drjanedoe.com',
    language: 'Hindi English',
    specification: 'Counseling Psychiatrist',
    contact: '8435041204',
    session: '12pm-3pm',

    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzA2p12P1URW3LPX-I7HhIFrLl42lTWHwZXT2VXDcVsg&s',
    noOfSession: 230,
    language: " English",
    experience: 3,
  },
  {
    name: 'Dr. Michael Johnson',
    domain: 'www.drmichaeljohnson.com',
    language: 'Hindi English',
    specification: 'Boon',

    contact: '6263339986',
    session: '12pm-3pm',

    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzA2p12P1URW3LPX-I7HhIFrLl42lTWHwZXT2VXDcVsg&s',
    noOfSession: 200,
    language: "English",
    experience: 1,
  },
]
  return (
    <>
    <div className='doctor-component'>
    {doctorData.map((d) => {
      return(<DoctorCart key={d.contact} data={d} /> )
    })}
    <Footer />
    </div>
    </>
  )
}

export default DoctorApp