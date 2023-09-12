// YogaList.js
import React from 'react';
import './YogaStyle.css';
import Yoga from './Yoga';
const yogaData = [
  {
    name: 'Downward Dog',
    imageUrl: 'https://img.freepik.com/premium-vector/happy-cute-little-kid-boy-practice-yoga_97632-2255.jpg',
    description: 'Stretches the entire body, promoting flexibility.Strengthens the arms, shoulders, and legsImproves posture and alignment.Relieves mild back pain.Enhances blood circulation and reduces stress.',
  },
  {
    name: 'Tree Pose',
    imageUrl: 'https://img.freepik.com/premium-vector/happy-cute-little-kid-boy-practice-yoga_97632-2255.jpg',
    description: 'Stand on one leg and place the sole of the other foot on your inner thigh or calf. Bring your hands to your heart center. This pose improves balance, concentration, and strengthens the legs for Yoga Pose 2.',
  },
  {
    name: 'Cobra Pose ',
    imageUrl: 'https://img.freepik.com/premium-vector/happy-cute-little-kid-boy-practice-yoga_97632-2255.jpg',
    description: 'Lie on your stomach, place your hands under your shoulders, and lift your chest while keeping your pelvis on the ground. This pose stretches and strengthens the back muscles and helps relieve lower back pain for Yoga Pose 3.',
  },
  {
    name: 'Warrior II ',
    imageUrl: 'https://img.freepik.com/premium-vector/happy-cute-little-kid-boy-practice-yoga_97632-2255.jpg',
    description: 'Kneel on the floor and sit back on your heels, then extend your arms forward with your forehead resting on the mat. This pose is a relaxing and restorative posture that stretches the back and shoulders for Yoga Pose 4.',
  },
  {
    name: 'Triangle Pose',
    imageUrl: 'https://img.freepik.com/premium-vector/happy-cute-little-kid-boy-practice-yoga_97632-2255.jpg',
    description: 'Stand with your feet wide apart, reach one hand down to touch your shin or the floor while extending the other arm upward. This pose stretches the legs, opens the chest, and improves overall flexibility .',
  },
  {
    name: 'Plank Pose',
    imageUrl: 'https://img.freepik.com/premium-vector/happy-cute-little-kid-boy-practice-yoga_97632-2255.jpg',
    description: 'Begin in a push-up position with your arms straight and your body in a straight line from head to heels. This pose strengthens the core, arms, and shoulders',
  },
  {
    name: 'Pigeon Pose',
    imageUrl: 'https://img.freepik.com/premium-vector/happy-cute-little-kid-boy-practice-yoga_97632-2255.jpg',
    description: 'Start in a lunge position, bring one knee forward and place it behind your wrist, then lower your chest toward the floor. This pose is excellent for hip flexibility and can alleviate tension in the hips',
  },
  {
    name: 'Bridge Pose ',
    imageUrl: 'https://img.freepik.com/premium-vector/happy-cute-little-kid-boy-practice-yoga_97632-2255.jpg',
    description: 'Lie on your back with your knees bent and feet flat on the floor. Lift your hips off the ground while keeping your feet and shoulders grounded. This pose strengthens the back, glutes, and opens the chest',
  },
  


  // Add more yoga exercises following the same structure
];

const YogaList = () => {
  return (
    <div className="yoga-list">
      {yogaData.map((exercise, index) => (
        <Yoga
          key={index}
          name={exercise.name}
          imageUrl={exercise.imageUrl}
          description={exercise.description}
        />
      ))}
    </div>
  );
};

export default YogaList;