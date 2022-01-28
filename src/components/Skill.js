import React from 'react';

function Skill({title,rating}) {

        return (
            <div className='skill'>
                <p className='skill_title'>{title}</p>
                <div className='skill_rating'>
                    <div className='circle circle'></div>
                    <div className='circle circle'></div>
                    <div className='circle circle-plain'></div>
                    <div className='circle circle-plain'></div>
                    <div className='circle circle-plain'></div>
                </div>
            </div>
        );
    }



export default Skill;