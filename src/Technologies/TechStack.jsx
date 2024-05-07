import React from 'react'
import styled from 'styled-components'

const skills = [
    {
      title: "Frontend",
      skills: [
        {
          name: "React Js",
          image:
            "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
        },
        {
          name: "Redux",
          image:
            "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
        },
        {
          name: "Next Js",
          image:
            "https://vercel.com/_next/static/media/logo-nextjs-logo-dark.fa9d7fb9.svg",
        },
        {
          name: "HTML",
          image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
        },
        {
          name: "CSS",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
        },
        {
          name: "JavaScript",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Node Js",
          image: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
        },
        {
          name: "Express Js",
          image:
            "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg",
        },

        {
          name: "Postgresql",
          image: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
        },
        {
          name: "MongoDB",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
        },
        {
          name: "AppWrite",
          image: "https://appwrite.io/assets/logomark/logo.svg",
        },
      ],
    },
  ];



const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
`

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`

const SkillItem = styled.div`
  font-size: 20px;
  font-weight: 400;
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`

const Skill = styled.div

`
  max-width: 500px;

  overflow:hidden;
  box-shadow: rgba(230, 230, 230, 0.10) 0px 4px 24px;
  border-radius: 14px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 90vw;
    padding: 10px 36px;
  }
`



const Skills = () => {
  return (
    <div className='flex mt-10 flex-col justify-center relative items-center pt-16 border-t-[1px] border-neutral-900' >
      <div className='relative flex justify-between items-center flex-col max-w-[1200px] gap-3'>
            <div className='flex flex-col lg:flex-row justify-center items-center lg:items-baseline'>
                <h1 className='text-neutral-200 text-center text-3xl md:pb-[1vw]'>
                    Technologies we Use?
                </h1>
                <h1 className='text-neutral-500 text-center font-light text-xl mt-2 md:mt-0 md:ml-5'>
                    Everything we use to build your great product on the web.
                </h1>
            </div>
        <div className="w-full flex flex-wrap  gap-[30px]  justify-center">
          {skills.map((skill) => (
            <Skill className='border-[1px] bg-gradient-to-t from-black to-[rgb(14,14,14)] border-neutral-800'>
              <SkillTitle className='text-gray-200'>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item) => (
                  <SkillItem>
                    <img className='w-[36px] h-[36px]' src={item.image}/>
                     <h1 className='text-gray-200'>
                        {item.name}    
                    </h1>
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Skills