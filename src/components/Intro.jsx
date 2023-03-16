import React from 'react';

function Intro() {
    return (
        <div className="flex items-center 
        justify-center flex-col text-center pt-20
        pb-6">
            <h1 className="text-4x1 md:text-7x1
            mb-1 md:mb-3 font-bold">Elliott Weeks</h1>
            <p className="text-base md:text-x1 mb-3
            font-medium">Software Engineer & Web Developer</p>
            <p className="text-sm max-w-x1 mb-6
            font-bold">I am a student graduating with a B.S in
            Computer Science looking a job in Washington, Dc or
            remote starting May 2023. I have 3 years experience in
            IT and 1 year experience in software development, however
            I am primarily looking for software development positions.
            <br />
            This website is a portfolio of my personal projects that I
            have either created or contributed to creating. Also, this
            site will give a brief overview of my professional career
            as well.
            </p>
        </div>
    )
}

export default Intro;