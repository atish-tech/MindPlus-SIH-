import React from 'react'
import "./Doctor.css"
// import Footer from "../Footer/Footer"
import DoctorCart from './DoctorCart'
import { Navigation } from '../Navigation/Navigation'
import Footer from '../Footer/Footer'

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
    name: 'Dr. Sakshi Sarma',
    domain: 'www.drjanedoe.com',
    language: 'Hindi English',
    specification: 'Counseling Psychiatrist',
    contact: '8435041204',
    session: '12pm-3pm',

    imageUrl: 'data:image/jpeg;base64,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',
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

    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8RIPfXYFy4-2OS9D3yV2txoDaByq_m9G1SA&usqp=CAU',
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
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6pzk-z0w128CGMXuoixmBWLIyzKg5xJ0jsw&usqp=CAU',
    noOfSession: 200,
    language: "Hindi",
    experience: 4,
    email: "abc@gmail.com",
    },
  {
    name: 'Dr. Shivam Jain',
    domain: 'www.drjanedoe.com',
    language: 'Hindi English',
    specification: 'Counseling Psychiatrist',
    contact: '8435041204',
    session: '12pm-3pm',

    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVAAtEKf0r5SivJpR8Ek-crrJ3fWtSMknuzg&usqp=CAU',
    noOfSession: 200,
    language: "Hindi English",
    experience: 8,
    email: "abc@gmail.com",
  },
  {
    name: 'Dr. Rachit Tiwari',
    domain: 'www.drmichaeljohnson.com',
    language: 'Hindi English',
    specification: 'Boon',

    contact: '6263339986',
    session: '12pm-3pm',

    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa0YM4F9aTgNFb7rg5uw1NK2hZeHw7q9XFkQ&usqp=CAU',
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
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZeEzeqSeG5MwgQd6_tq3q66w-XrYcZ8lZZA&usqp=CAU',
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

    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_cyKLTOT2BG1JqCOq4agn9t0Gv-VcD_Pi8w&usqp=CAU',
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
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbK51jQWU-j3G-xlascZTnov1DaI7oGerbLA&usqp=CAU',
    noOfSession: 200,
    language: "Hindi",
    experience: 4,
    },
  {
    name: 'Dr. Yashant Thakur',
    domain: 'www.drjanedoe.com',
    language: 'Hindi English',
    specification: 'Counseling Psychiatrist',
    contact: '8435041204',
    session: '12pm-3pm',

    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyG1ntG9FJoje21Ptejcq_2RzqXiRf5ceofg&usqp=CAU',
    noOfSession: 200,
    language: "Hindi English",
    experience: 8,
  },
  {
    name: 'Dr. Aatish Thakur',
    domain: 'www.drmichaeljohnson.com',
    language: 'Hindi English',
    specification: 'Boon',

    contact: '6263339986',
    session: '12pm-3pm',

    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEZQLx0v-Ir5kJ-bXbGd0eEH9jcqlJ-Sa_UQ&usqp=CAU',
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
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN3ywOYM_VL4rqLIfKeDJz0vMbZDPOP_bejA&usqp=CAU',
    noOfSession: 200,
    language: "Hindi",
    experience: 4,

    },
  {
    name: 'Dr. Pyush Galpat',
    domain: 'www.drjanedoe.com',
    language: 'Hindi English',
    specification: 'Counseling Psychiatrist',
    contact: '8435041204',
    session: '12pm-3pm',

    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvzxGMfVCNGUHzqUvZvfQLfOjX7gIRA1xDqA&usqp=CAU',
    noOfSession: 230,
    language: " English",
    experience: 3,
  },
  {
    name: 'Dr. Rachit Tiwari',
    domain: 'www.drmichaeljohnson.com',
    language: 'Hindi English',
    specification: 'Boon',

    contact: '6263339986',
    session: '12pm-3pm',

    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXLH9IGamS8CpikWN4rOlnFFGwaT3wCrZwkmTbkXjmpOy5yC_dU34cqsrgNltJ6KFSBAU&usqp=CAU',
    noOfSession: 200,
    language: "English",
    experience: 1,
  },
]
  return (
    <>
    <Navigation />
    <div className='doctor-component'>
    {doctorData.map((d) => {
      return(<DoctorCart key={Date.now()} data={d} /> )
    })}
    <Footer />
    </div>
    </>
  )
}

export default DoctorApp