import React, { useState } from "react";
import "./Score.css"
import MentalScore from "./MentalScore";

const data1 = [
  { id: 1, question: "1.)How have you been feeling lately?", ans: ["a).Great", " b) Okay ", "c) Not so good", "d) Terrible"] },
  { id: 2, question: "2.)Have you noticed any changes in your sleep patterns?", ans: ["a).Sleeping well", " b) Slight disturbances ", "c) Trouble falling asleep", "d) Severe insomnia"] },
  { id: 3, question: "3.)Are you finding it difficult to concentrate on tasks?", ans: ["a) No difficulty", " b) Mild difficulty  ", "c) Moderate difficulty", "d) Severe difficulty"] },
  { id: 4, question: "4.)Have you experienced a significant change in your appetite?", ans: ["a) Eating normally", " b) Eating a bit less ", "c) Eating significantly less", "d) Overeating or loss of appetite"] },
  { id: 5, question: "5.)Do you often feel hopeless or helpless?", ans: ["a) Rarely", " b) Sometimes  ", "c) Frequently ", "d) Constantly"] },
  { id: 6, question: "6.)Are you losing interest in activities you used to enjoy?", ans: ["a) No loss of interest", " b) Mild loss of interest ", "c) Moderate loss of interest", "d) Complete loss of interest"] },
  { id: 7, question: "7.)Have you had thoughts of self-harm or suicide?", ans: ["a) No thoughts", " b) Occasional fleeting thoughts ", "c) Frequent thoughts", "d) Persistent thoughts with a plan"] },
  { id: 8, question: "8.)How would you rate your overall energy levels? ", ans: ["a) High energy", " b) Moderate energy ", "c) Low energy", "d) No energy"] },
  { id: 9, question: "9.)Are you experiencing physical symptoms like aches or pains?", ans: ["a) No physical symptoms", " b) Mild physical symptoms ", "c) Moderate physical symptoms", "d) Severe physical symptoms"] },
  { id: 10, question: "10.)you currently taking any medications or receiving therapy for your depression?", ans: ["a)No treatment", " b) Medication only", "c) Therapy only", "d) Combination of medication and therapy"] },
]

const data2 = [
  { id: 1, question: "1.)How have you been feeling lately?", ans: ["a).Great", " b) Okay ", "c) Not so good", "d) Terrible"] },
  { id: 2, question: "2.)Have you noticed any changes in your sleep patterns?", ans: ["a).Sleeping well", " b) Slight disturbances ", "c) Trouble falling asleep", "d) Severe insomnia"] },
  { id: 3, question: "3.)Are you finding it difficult to concentrate on tasks?", ans: ["a) No difficulty", " b) Mild difficulty  ", "c) Moderate difficulty", "d) Severe difficulty"] },
  { id: 4, question: "4.)Have you experienced a significant change in your appetite?", ans: ["a) Eating normally", " b) Eating a bit less ", "c) Eating significantly less", "d) Overeating or loss of appetite"] },
  { id: 5, question: "5.)Do you often feel hopeless or helpless?", ans: ["a) Rarely", " b) Sometimes  ", "c) Frequently ", "d) Constantly"] },
  { id: 6, question: "6.)Are you losing interest in activities you used to enjoy?", ans: ["a) No loss of interest", " b) Mild loss of interest ", "c) Moderate loss of interest", "d) Complete loss of interest"] },
  { id: 7, question: "7.)Have you had thoughts of self-harm or suicide?", ans: ["a) No thoughts", " b) Occasional fleeting thoughts ", "c) Frequent thoughts", "d) Persistent thoughts with a plan"] },
  { id: 8, question: "8.)How would you rate your overall energy levels? ", ans: ["a) High energy", " b) Moderate energy ", "c) Low energy", "d) No energy"] },
  { id: 9, question: "9.)Are you experiencing physical symptoms like aches or pains?", ans: ["a) No physical symptoms", " b) Mild physical symptoms ", "c) Moderate physical symptoms", "d) Severe physical symptoms"] },
  { id: 10, question: "10.)you currently taking any medications or receiving therapy for your depression?", ans: ["a)No treatment", " b) Medication only", "c) Therapy only", "d) Combination of medication and therapy"] },
]

const data3 = [
  { id: 1, question: "1.)How have you been feeling lately?", ans: ["a).Great", " b) Okay ", "c) Not so good", "d) Terrible"] },
  { id: 2, question: "2.)Have you noticed any changes in your sleep patterns?", ans: ["a).Sleeping well", " b) Slight disturbances ", "c) Trouble falling asleep", "d) Severe insomnia"] },
  { id: 3, question: "3.)Are you finding it difficult to concentrate on tasks?", ans: ["a) No difficulty", " b) Mild difficulty  ", "c) Moderate difficulty", "d) Severe difficulty"] },
  { id: 4, question: "4.)Have you experienced a significant change in your appetite?", ans: ["a) Eating normally", " b) Eating a bit less ", "c) Eating significantly less", "d) Overeating or loss of appetite"] },
  { id: 5, question: "5.)Do you often feel hopeless or helpless?", ans: ["a) Rarely", " b) Sometimes  ", "c) Frequently ", "d) Constantly"] },
  { id: 6, question: "6.)Are you losing interest in activities you used to enjoy?", ans: ["a) No loss of interest", " b) Mild loss of interest ", "c) Moderate loss of interest", "d) Complete loss of interest"] },
  { id: 7, question: "7.)Have you had thoughts of self-harm or suicide?", ans: ["a) No thoughts", " b) Occasional fleeting thoughts ", "c) Frequent thoughts", "d) Persistent thoughts with a plan"] },
  { id: 8, question: "8.)How would you rate your overall energy levels? ", ans: ["a) High energy", " b) Moderate energy ", "c) Low energy", "d) No energy"] },
  { id: 9, question: "9.)Are you experiencing physical symptoms like aches or pains?", ans: ["a) No physical symptoms", " b) Mild physical symptoms ", "c) Moderate physical symptoms", "d) Severe physical symptoms"] },
  { id: 10, question: "10.)you currently taking any medications or receiving therapy for your depression?", ans: ["a)No treatment", " b) Medication only", "c) Therapy only", "d) Combination of medication and therapy"] },
]

const data4 = [
  { id: 1, question: "1.)How have you been feeling lately?", ans: ["a).Great", " b) Okay ", "c) Not so good", "d) Terrible"] },
  { id: 2, question: "2.)Have you noticed any changes in your sleep patterns?", ans: ["a).Sleeping well", " b) Slight disturbances ", "c) Trouble falling asleep", "d) Severe insomnia"] },
  { id: 3, question: "3.)Are you finding it difficult to concentrate on tasks?", ans: ["a) No difficulty", " b) Mild difficulty  ", "c) Moderate difficulty", "d) Severe difficulty"] },
  { id: 4, question: "4.)Have you experienced a significant change in your appetite?", ans: ["a) Eating normally", " b) Eating a bit less ", "c) Eating significantly less", "d) Overeating or loss of appetite"] },
  { id: 5, question: "5.)Do you often feel hopeless or helpless?", ans: ["a) Rarely", " b) Sometimes  ", "c) Frequently ", "d) Constantly"] },
  { id: 6, question: "6.)Are you losing interest in activities you used to enjoy?", ans: ["a) No loss of interest", " b) Mild loss of interest ", "c) Moderate loss of interest", "d) Complete loss of interest"] },
  { id: 7, question: "7.)Have you had thoughts of self-harm or suicide?", ans: ["a) No thoughts", " b) Occasional fleeting thoughts ", "c) Frequent thoughts", "d) Persistent thoughts with a plan"] },
  { id: 8, question: "8.)How would you rate your overall energy levels? ", ans: ["a) High energy", " b) Moderate energy ", "c) Low energy", "d) No energy"] },
  { id: 9, question: "9.)Are you experiencing physical symptoms like aches or pains?", ans: ["a) No physical symptoms", " b) Mild physical symptoms ", "c) Moderate physical symptoms", "d) Severe physical symptoms"] },
  { id: 10, question: "10.)you currently taking any medications or receiving therapy for your depression?", ans: ["a)No treatment", " b) Medication only", "c) Therapy only", "d) Combination of medication and therapy"] },
]

const data5 = [
  { id: 1, question: "1.)How have you been feeling lately?", ans: ["a).Great", " b) Okay ", "c) Not so good", "d) Terrible"] },
  { id: 2, question: "2.)Have you noticed any changes in your sleep patterns?", ans: ["a).Sleeping well", " b) Slight disturbances ", "c) Trouble falling asleep", "d) Severe insomnia"] },
  { id: 3, question: "3.)Are you finding it difficult to concentrate on tasks?", ans: ["a) No difficulty", " b) Mild difficulty  ", "c) Moderate difficulty", "d) Severe difficulty"] },
  { id: 4, question: "4.)Have you experienced a significant change in your appetite?", ans: ["a) Eating normally", " b) Eating a bit less ", "c) Eating significantly less", "d) Overeating or loss of appetite"] },
  { id: 5, question: "5.)Do you often feel hopeless or helpless?", ans: ["a) Rarely", " b) Sometimes  ", "c) Frequently ", "d) Constantly"] },
  { id: 6, question: "6.)Are you losing interest in activities you used to enjoy?", ans: ["a) No loss of interest", " b) Mild loss of interest ", "c) Moderate loss of interest", "d) Complete loss of interest"] },
  { id: 7, question: "7.)Have you had thoughts of self-harm or suicide?", ans: ["a) No thoughts", " b) Occasional fleeting thoughts ", "c) Frequent thoughts", "d) Persistent thoughts with a plan"] },
  { id: 8, question: "8.)How would you rate your overall energy levels? ", ans: ["a) High energy", " b) Moderate energy ", "c) Low energy", "d) No energy"] },
  { id: 9, question: "9.)Are you experiencing physical symptoms like aches or pains?", ans: ["a) No physical symptoms", " b) Mild physical symptoms ", "c) Moderate physical symptoms", "d) Severe physical symptoms"] },
  { id: 10, question: "10.)you currently taking any medications or receiving therapy for your depression?", ans: ["a)No treatment", " b) Medication only", "c) Therapy only", "d) Combination of medication and therapy"] },
]

const data6 = [
  { id: 1, question: "1.)How have you been feeling lately?", ans: ["a).Great", " b) Okay ", "c) Not so good", "d) Terrible"] },
  { id: 2, question: "2.)Have you noticed any changes in your sleep patterns?", ans: ["a).Sleeping well", " b) Slight disturbances ", "c) Trouble falling asleep", "d) Severe insomnia"] },
  { id: 3, question: "3.)Are you finding it difficult to concentrate on tasks?", ans: ["a) No difficulty", " b) Mild difficulty  ", "c) Moderate difficulty", "d) Severe difficulty"] },
  { id: 4, question: "4.)Have you experienced a significant change in your appetite?", ans: ["a) Eating normally", " b) Eating a bit less ", "c) Eating significantly less", "d) Overeating or loss of appetite"] },
  { id: 5, question: "5.)Do you often feel hopeless or helpless?", ans: ["a) Rarely", " b) Sometimes  ", "c) Frequently ", "d) Constantly"] },
  { id: 6, question: "6.)Are you losing interest in activities you used to enjoy?", ans: ["a) No loss of interest", " b) Mild loss of interest ", "c) Moderate loss of interest", "d) Complete loss of interest"] },
  { id: 7, question: "7.)Have you had thoughts of self-harm or suicide?", ans: ["a) No thoughts", " b) Occasional fleeting thoughts ", "c) Frequent thoughts", "d) Persistent thoughts with a plan"] },
  { id: 8, question: "8.)How would you rate your overall energy levels? ", ans: ["a) High energy", " b) Moderate energy ", "c) Low energy", "d) No energy"] },
  { id: 9, question: "9.)Are you experiencing physical symptoms like aches or pains?", ans: ["a) No physical symptoms", " b) Mild physical symptoms ", "c) Moderate physical symptoms", "d) Severe physical symptoms"] },
  { id: 10, question: "10.)you currently taking any medications or receiving therapy for your depression?", ans: ["a)No treatment", " b) Medication only", "c) Therapy only", "d) Combination of medication and therapy"] },
]
const Score = () => {
  const [score, setScore] = useState(0);
  const updateScore = (e) => {
    setScore(score + parseInt(e.target.value))
  }
  return (
    <>
    <div className="mt-32"></div>
      <div className="mental-score-component">
        <h1>Depression Questions</h1>
        {
          data1.map(d => {
            return (
              <div key={Date.now()} className="question-container">
                <p>{d.question}</p>
                <div className="checkbox">
                  <input onChange={updateScore} type="checkbox" value='4' className="box" /><span>{d.ans[0]}</span>
                </div>
                <div className="checkbox">
                  <input onChange={updateScore} type="checkbox" value='4' /><span>{d.ans[1]}</span>
                </div>
                <div className="checkbox">
                  <input onChange={updateScore} type="checkbox" value='4' /><span>{d.ans[2]}</span>
                </div>
                <div className="checkbox">
                  <input onChange={updateScore} type="checkbox" value='4' /><span>{d.ans[3]}</span>
                </div>
              </div>
            )
          })
        }
        <button className="bg-blue-gray-100 px-10 py-5 rounded-xl mt-5"> <MentalScore score={score} /> </button>
      </div>
    </>
  );
}


export default Score
