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

const data3 = [
  { id: 1, question: "1.)How would you describe the intensity of your anxiety symptoms?", ans: ["a).Great", " b) Okay ", "c) Not so good", "d) Terrible"] },
  { id: 2, question: "2.)Have you noticed any changes in your sleep patterns?", ans: ["a).Sleeping well", " b) Slight disturbances ", "c) Trouble falling asleep", "d) Severe insomnia"] },
  { id: 3, question: "3.)Do you often experience physical symptoms like rapid heartbeat or trembling?", ans: ["a) No difficulty", " b) Mild difficulty  ", "c) Moderate difficulty", "d) Severe difficulty"] },
  { id: 4, question: "4.)Are you having difficulty controlling worries or irrational fears?", ans: ["a) Eating normally", " b) Eating a bit less ", "c) Eating significantly less", "d) Overeating or loss of appetite"] },
  { id: 5, question: "5.)How often do you avoid situations or places due to anxiety?", ans: ["a) Rarely", " b) Sometimes  ", "c) Frequently ", "d) Constantly"] },
  { id: 6, question: "6.)Have you noticed changes in your sleep patterns, such as difficulty falling asleep or staying asleep?", ans: ["a) No loss of interest", " b) Mild loss of interest ", "c) Moderate loss of interest", "d) Complete loss of interest"] },
  { id: 7, question: "7.)Are you experiencing muscle tension, restlessness, or feeling on edge?", ans: ["a) No thoughts", " b) Occasional fleeting thoughts ", "c) Frequent thoughts", "d) Persistent thoughts with a plan"] },
  { id: 8, question: "8.) d) which include sudden and intense feelings of fear or terror?", ans: ["a) High energy", " b) Moderate energy ", "c) Low energy", "d) No energy"] },
  { id: 9, question: "9.)How long have you been experiencing these anxiety symptoms?", ans: ["a) No physical symptoms", " b) Mild physical symptoms ", "c) Moderate physical symptoms", "d) Severe physical symptoms"] },
  { id: 10, question: "10.)Are you currently taking any medications or receiving therapy for your anxiety?", ans: ["a)No treatment", " b) Medication only", "c) Therapy only", "d) Combination of medication and therapy"] },
]

const data2 = [
  { id: 1, question: "1.)How would you describe the intensity of your anxiety symptoms?", ans: ["a).Mild", " b) Moderate ", "c) severe", "d) Overwhelming"] },
  { id: 2, question: "2.)Are there specific situations or triggers that seem to worsen your anxiety?", ans: ["a).No Specific triggers", " b) Some triggers ", "c) Many triggers", "d) Constant triggers"] },
  { id: 3, question: "3.)Do you often experience physical symptoms like rapid heartbeat or trembling?", ans: ["a) .Rarely", " b) Occasionally ", "c) Frequently", "d) Constantly"] },
  { id: 4, question: "4.)Are you having difficulty controlling worries or irrational fears?", ans: ["a)No difficulty", " b) Minor difficulty ", "c) Moderate difficulty", "d) Severe difficulty"] },
  { id: 5, question: "5.)How often do you avoid situations or places due to anxiety?", ans: ["a)Rarely avoid", " b) Sometimes avoid ", "c) Frequently avoid ", "d) Always avoid"] },
  { id: 6, question: "6.)Have you noticed changes in your sleep patterns, such as difficulty falling asleep or staying asleep?", ans: ["a).Sleeping well", " b) Mild sleep disturbance ", "c) Frequent sleep disturbance", "d) Severe insomnia"] },
  { id: 7, question: "7.)Are you experiencing muscle tension, restlessness, or feeling on edge?", ans: ["a).No tension or restlessness", " b) Occasional tension or restlessness", "c) Frequent tension or restlessness", "d) constant tension or restlessness"] },
  { id: 8, question: "8.)Have you had panic attacks, which include sudden and intense feeling of fear or terror?", ans: ["a).No", " b) Rare panic attacks ", "c) Occasional panic attacks", "d) Frequent panic attacks"] },
  { id: 9, question: "9.)How long have you experiencing these anxiety symptoms?", ans: ["a).A few weeks", " b) A few months ", "c) Over a year", "d) Several years"] },
  { id: 10, question: "10.)Are you currently taking any medications or receiving therapy for your anxiety?", ans: ["a).No", " b) Medication only ", "c) Therapy only", "d) Combination of medication and therapy"] },

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

const mood_disorder = [
  { id: 1, question: "1.)Have you noticed significant and persistent changes in your mood?", ans: ["a).No changes", " b) Some changes ", "c) Frequent changes", "d) Drastic and constant changes"] },
  { id: 2, question: "2.)How would you describe your mood?", ans: ["a).Generally stable and positive", " b) Mildly fluctuating  ", "c) Frequently low or irritable", "d) Constantly and severely depressed or manic"] },
  { id: 3, question: "3.)Do you experience periods of intense euphoria, high energy and impulsivity followed by depressive episodes?", ans: ["a) No", " b) Rarely  ", "c) Occasionally", "d) Frequently"] },
  { id: 4, question: "4.)Have you notices changes in your sleeping patterns, such as insomnia or excessive sleep?", ans: ["a)No", " b) Mild changes ", "c) Frequent changes", "d) Severe disturbances"] },
  { id: 5, question: "5.)Are you experiencing changes in your appetite or weight, such as overeating or loss of appetite?", ans: ["a)Stable appetite and weight", " b) Mild changes  ", "c) Moderate changes ", "d) Severe changes"] },
  { id: 6, question: "6.)Do you find difficulty concentrating in activities or making dicisions?", ans: ["a).No", " b) Mild difficulty ", "c) Moderate difficulty", "d) Severe difficulty"] },
  { id: 7, question: "7.)Have you lost interest or pleasure in activities you used to enjoy?", ans: ["a).No", " b) Mild loss of interest ", "c)Moderate loss of interest", "d) Complete loss of interest"] },
  { id: 8, question: "8.)Have you thought of self harm or suicide?", ans: ["a).No thoughts", " b) Occasionally fleeting thoughts ", "c) Frequent thoughts", "d) Persistent thoughts with a plan"] },
  { id: 9, question: "9.)How long have you experiencing this?", ans: ["a).Less than six months", " b) Six months to a year ", "c)One to two years", "d) Over two years"] },
  { id: 10, question: "10.)Are you currently receiving any treatmet for your mood disorder?", ans: ["a).No", " b) Medication only ", "c) Therapy", "d) Medication and therapy"] },

]

const ocd_questions = [
  { id: 1, question: "1.)Do you have recurrent, distressing, and inrusive thoughts or obsessions?", ans: ["a).No ", " b) Rarely  ", "c) Ocassionally", "d)Frequently"] },
 
 { id: 2, question: "2.)Are these obsessive thoughts causing you significant distress or anxiety?", ans: ["a).No", " b) Mild distress ", "c) Moderate distress", "d) Severe distress"] },
 
 { id: 3, question: "3.)Do you find yourself engaging in repetitive behaviours or rituals to alleviate the distress cause by your obsessions?", ans: ["a) No", " b) Rarely  ", "c) Occasionally", "d) Frequently"] },
 
 { id: 4, question: "4.)Are these compulsive behaviours interfering with your daily life and functioning?", ans: ["a)No", " b) Mild interference", "c) Moderate interference", "d) Severe interference"] },
 
 { id: 5, question: "5.)Can you descibe any specific obsessions or compulsions that you're experiencing?", ans: ["a)No specific", " b) Mild and manageable  ", "c)Distinct and distressing ", "d) Highly elaborate and time-consuming"] },
 
 { id: 6, question: "6.)How long have you experiencing this issue?", ans: ["a).Less than six months", " b) Six months to a year ", "c) One to two year", "d) Over two years"] },

  { id: 7, question: "7.)Have you sought any form of treatment or therapy for you OCD symptoms?", ans: ["a).No", " b)Therapy only ", "c)Medication only", "d) Combination of therapy and medication"] },
 
 { id: 8, question: "8.)Are there any specific situation or triggers that seem to worsen you OCD?", ans: ["a).No ", " b) Some triggers ", "c) Many triggers", "d) Constant triggers"] },
  
{ id: 9, question: "9.)Have you noticed any improvement or worsening of your OCD symptoms over time?", ans: ["a).Symptoms improving", " b) Stable symptoms ", "c)Symptoms worsening", "d) Symptoms fluctuating"] },
 
 { id: 10, question: "10.)How would you rate your overall quality of life given your current OCD symptoms?", ans: ["a).Good", " b) Fair ", "c) Poor", "d)Very poor"] },

];
const Score = () => {
  const [score, setScore] = useState(0);
  const updateScore = (e) => {
    setScore(score + parseInt(e.target.value))
  }
  return (
    <>
    <div className="mt-32"></div>
      <div className="mental-score-component">
        <h1 className="text-4xl text-pink-900">Depression Questions</h1>
        {/* Dipression */}
        {
          data1.map(d => {
            return (
              <div key={Date.now()} className="question-container">
                <p>{d.question}</p>
                <div className="checkbox">
                  <input onChange={updateScore} type="checkbox" value='4' className="box" /><span>{d.ans[0]}</span>
                </div>
                <div className="checkbox">
                  <input onChange={updateScore} type="checkbox" value='4' className="box" /><span>{d.ans[1]}</span>
                </div>
                <div className="checkbox">
                  <input onChange={updateScore} type="checkbox" value='4' className="box" /><span>{d.ans[2]}</span>
                </div>
                <div className="checkbox">
                  <input onChange={updateScore} type="checkbox" value='4' className="box" /><span>{d.ans[3]}</span>
                </div>
              </div>
            )
          })
        }


        {/* Anxiety Disorder */}
        <h1 className="text-4xl text-pink-900 mt-14">Anxiety Disorder</h1>
        {
          data2.map(d => {
            return (
              <div key={Date.now()} className="question-container">
                <p>{d.question}</p>
                <div className="checkbox">
                  <input onChange={updateScore} type="checkbox" value='4' className="box" /><span>{d.ans[0]}</span>
                </div>
                <div className="checkbox">
                  <input onChange={updateScore} type="checkbox" value='4' className="box" /><span>{d.ans[1]}</span>
                </div>
                <div className="checkbox">
                  <input onChange={updateScore} type="checkbox" value='4' className="box" /><span>{d.ans[2]}</span>
                </div>
                <div className="checkbox">
                  <input onChange={updateScore} type="checkbox" value='4' className="box" /><span>{d.ans[3]}</span>
                </div>
              </div>
            )
          })
        }

        {/* ocd_questions */} 
        <h1 className="text-4xl text-pink-900 mt-14">OCD questions</h1>

        {
          ocd_questions.map(d => {
            return (
              <div key={Date.now()} className="question-container">
                <p>{d.question}</p>
                <div className="checkbox">
                  <input onChange={updateScore} type="checkbox" value='4' className="box" /><span>{d.ans[0]}</span>
                </div>
                <div className="checkbox">
                  <input onChange={updateScore} type="checkbox" value='4' className="box" /><span>{d.ans[1]}</span>
                </div>
                <div className="checkbox">
                  <input onChange={updateScore} type="checkbox" value='4' className="box" /><span>{d.ans[2]}</span>
                </div>
                <div className="checkbox">
                  <input onChange={updateScore} type="checkbox" value='4' className="box" /><span>{d.ans[3]}</span>
                </div>
              </div>
            )
          })
        }

        {/* mood_disorder */}
        <h1 className="text-4xl text-pink-900 mt-14">Mood Disorder</h1>
        {
          mood_disorder.map(d => {
            return (
              <div key={Date.now()} className="question-container">
                <p>{d.question}</p>
                <div className="checkbox">
                  <input onChange={updateScore} type="checkbox" value='4' className="box" /><span>{d.ans[0]}</span>
                </div>
                <div className="checkbox">
                  <input onChange={updateScore} type="checkbox" value='4' className="box" /><span>{d.ans[1]}</span>
                </div>
                <div className="checkbox">
                  <input onChange={updateScore} type="checkbox" value='4' className="box" /><span>{d.ans[2]}</span>
                </div>
                <div className="checkbox">
                  <input onChange={updateScore} type="checkbox" value='4' className="box" /><span>{d.ans[3]}</span>
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
