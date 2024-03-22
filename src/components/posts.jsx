import React from 'react'


function Posts() {
  const techStack =['angular','react']
  const chosenStack = Math.random() > 0.5 ? techStack[0] : techStack[1]
  return (
    <>
    <h2>
    TEST POST IS COMING FROM THE COMPONENT
    </h2>
    <h2>
    {chosenStack}, is best for Ui development 
    </h2>
    </>
  )
}

export default Posts