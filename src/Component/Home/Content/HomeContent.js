import React from 'react'
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import PeopleIcon from '@mui/icons-material/People';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';

const HomeContent = () => {
    return (
        <div className='home-content'>

            {/* How introduction */}
            <div className='home-introduction'>
                <div className='home-introduction-image' >
                    <h3 className='text-content'>About mental health:</h3>
                    <img className='home-image' width={700} src='https://sahodar.in/wp-content/uploads/2021/06/Mental-Health-1.jpg' />
                </div>
                <div className='home-introduction-text'>
                    <p className='text-content'>Mental health determines how you think, feel and act. Good mental health is when you feel positive about yourself and cope well with the everyday pressures.
                        Mental health allows people to use their abilities, be productive, make decisions, and play an active role in their communities.</p>
                </div>
            </div>
            {/* Features */}
            <div className='home-introduction'>
                <div className='home-features'>
                <h1>Features</h1>
                    <div>
                        <SportsMartialArtsIcon fontSize='large' className='font-sz' />
                        <span className='font-sz' >Exercise</span>
                    </div>
                    <div>
                        <PeopleIcon fontSize='large' className='font-sz' />
                        <span className='font-sz' >Community</span>
                    </div>
                    <div>
                        <LocalHospitalIcon fontSize='large' className='font-sz' />
                        <span className='font-sz' >Expert Help</span>
                    </div>
                    <div>
                        <PsychologyAltIcon fontSize='large' className='font-sz' />
                        <span className='font-sz' >Check Your Mental Score</span>
                    </div>
                </div>
                <div>
                    <img className='home-image' width={500}  src='https://cdn5.vectorstock.com/i/1000x1000/72/29/task-list-icon-from-commerce-set-vector-5397229.jpg' />
                </div>
            </div>

            {/* Testimonial */}
            <div className='testimonial-container'>
            <h2>Trusted By Government</h2>
                <div>
                    <img className='testimonial-img' src='https://pbs.twimg.com/profile_images/1030286408488050688/aIzFiXmw_400x400.jpg' />
                </div>
                <div>
                    <img className='testimonial-img' src='https://www.logopeople.in/wp-content/uploads/2013/01/government-of-india.jpg' />
                </div>
                <div>
                    <img className='testimonial-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-l83DA4hU3hyHp3L8a02I_91gxR5LrlwQngkpVWSBKIjd8Etp7bV6opnbIPr4xSLoQMA&usqp=CAU' />
                </div>
                <div>
                    <img className='testimonial-img' src='https://blogmedia.testbook.com/blog/wp-content/uploads/2023/05/gujarat-education-department--4facefbd.jpg' />
                </div>
            </div>

        </div>
    )
}

export default HomeContent