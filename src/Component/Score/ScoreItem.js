import React from 'react'

export const ScoreItem = ({data , updateScore}) => {
    return (
        <>
            {
                data.map(d => {
                    return (
                        <div key={Date.now()} className="question-container">
                            <p>{d.question}</p>
                            <div className="checkbox">
                                <input onChange={() => {updateScore()}} type="checkbox" value='4' className="box" /><span>{d.ans[0]}</span>
                            </div>
                            <div className="checkbox">
                                <input onChange={() => {updateScore()}} type="checkbox" value='4' className="box" /><span>{d.ans[1]}</span>
                            </div>
                            <div className="checkbox">
                                <input onChange={() => {updateScore()}} type="checkbox" value='4' className="box" /><span>{d.ans[2]}</span>
                            </div>
                            <div className="checkbox">
                                <input onChange={() => {updateScore()}} type="checkbox" value='4' className="box" /><span>{d.ans[3]}</span>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
