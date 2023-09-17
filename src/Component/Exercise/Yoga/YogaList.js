// YogaList.js
import React, { useEffect, useState } from 'react';
import './YogaStyle.css';
import Yoga from './Yoga';
import { NavLink } from 'react-router-dom';
const yogaData = [
  {
    name: 'Downward Dog',
    imageUrl: 'https://img.freepik.com/premium-vector/happy-cute-little-kid-boy-practice-yoga_97632-2255.jpg',
    description: 'Stretches the entire body, promoting flexibility.Strengthens the arms, shoulders, and legsImproves posture and alignment.Relieves mild back pain.Enhances blood circulation and reduces stress.',
  },
  {
    name: 'Tree Pose',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXhlcmNpc2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60',
    description: 'Stand on one leg and place the sole of the other foot on your inner thigh or calf. Bring your hands to your heart center. This pose improves balance, concentration, and strengthens the legs for Yoga Pose 2.',
  },
  {
    name: 'Cobra Pose ',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXhlcmNpc2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60',
    description: 'Lie on your stomach, place your hands under your shoulders, and lift your chest while keeping your pelvis on the ground. This pose stretches and strengthens the back muscles and helps relieve lower back pain for Yoga Pose 3.',
  },
  {
    name: 'Warrior II ',
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZXhlcmNpc2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60',
  },
  {
    name: 'Triangle Pose',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1679596990326-4bdc2b65b386?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8eW9nYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
  },
  {
    name: 'Plank Pose',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW9nYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    description: 'Begin in a push-up position with your arms straight and your body in a straight line from head to heels. This pose strengthens the core, arms, and shoulders',
  },
  {
    name: 'Pigeon Pose',
    imageUrl: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eW9nYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    description: 'Start in a lunge position, bring one knee forward and place it behind your wrist, then lower your chest toward the floor. This pose is excellent for hip flexibility and can alleviate tension in the hips',
  },
  {
    name: 'Bridge Pose ',
    imageUrl: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8eW9nYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    description: 'Lie on your back with your knees bent and feet flat on the floor. Lift your hips off the ground while keeping your feet and shoulders grounded. This pose strengthens the back, glutes, and opens the chest',
  },
  


  // Add more yoga exercises following the same structure
];



const YogaList = () => {
  const [data , setData] = useState([]);
  useEffect(() => {
    fetch("https://yoga-api-nzy4.onrender.com/v1/categories")
    .then(response => response.json())
    .then(d => {console.log(d)
      setData(d);
    });
  } , []);

  return (
    <div className="yoga-list mt-32">
        {
          data.map(d => {
            return(
             data.map((d) => {
              return(
                <div key={d.id}>
                  <NavLink to={"/user/"+d.id} > {d.category_name} </NavLink>
                  <br/>
                </div>
              )
             })
            )
          })
        }
    </div>
  );
};





















// const YogaList = () => {
//   return (
//     <div className="yoga-list">
//       {yogaData.map((exercise, index) => (
//         <Yoga
//           key={index}
//           name={exercise.name}
//           imageUrl={exercise.imageUrl}
//           description={exercise.description}
//         />
//       ))}
//     </div>
//   );
// };

export default YogaList;