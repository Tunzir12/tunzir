import React from 'react'

const SkillBar = ({skill,level,color}) => {
  return (
    <div className='my-4'>
        <div className="text-lg">{skill}</div>
        <div className="w-full bg-gray-200 rounded-full h-5">
        <div
          className="h-5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%`,
                    backgroundColor: color }}
        ></div>
      </div>
    </div>
  )
}

export default SkillBar