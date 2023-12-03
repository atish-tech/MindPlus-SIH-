import React, { useEffect, useState } from 'react'
import { Circles } from 'react-loader-spinner';
import { apiData } from './ApiData';
export const Exercise = () => {
    const API = apiData;
    console.log(API);

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://yoga-api-nzy4.onrender.com/v1/categories")
            .then(response => response.json())
            .then(d => {
                // console.log(d)
                setData(d);
                setLoading(false)
            });
        setData(apiData)
    }, []);

    return (
        <>
            <div className='exercise-container mt-20'>
                {
                    loading &&
                    <div className='loading-con'>
                    <Circles
                        height="80"
                        width="80"
                        color="#4fa94d"
                        ariaLabel="circles-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                    </div>
                }
                {
                    data.map((d) => {
                        return (
                            <div key={d.id} className='exercise-category'>
                                <h1 className='text-blue-gray-100'> {d.category_name} </h1>
                                <p className='text-gray-800' >{d.category_description}</p>

                                {
                                    d.poses.map((pose) => {
                                        return (
                                            <div key={pose.id} className='pose-container'>
                                                <div className='pose-img-title'>
                                                    <img width={350} className='yoga-img' src={pose.url_png} />
                                                    <div>
                                                        <h1 className='text-purple-800'> Name: {pose.english_name} </h1>
                                                        <h1 className='text-purple-800 mt-5'> Sanskrit Name {pose.sanskrit_name} </h1>
                                                    </div>
                                                </div>
                                                <p className='text-blue-gray-500'> Pose Description: {pose.pose_description} </p>
                                                <p className='text-blue-gray-700 mt-4'>Pose Benifits : {pose.pose_benefits} </p>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
