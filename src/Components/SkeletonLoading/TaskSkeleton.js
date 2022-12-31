import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const TaskSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#2B5876" highlightColor="#292E49">
    <div className="skelton_todo__card">
                      
                      <div className="skelton_todo__card-bottom">
                        <h4><Skeleton/></h4>
                        <p className='skelton_todo__description'><Skeleton/></p>
                        <div className='skelton_todo__card-other'>
                          <div className='skelton_todo__card-icons'>
                          <p style={{margin:"0px"}}><Skeleton/></p>
                          <p style={{width:"100px"}}><Skeleton/></p>
                          <p> <Skeleton/></p>
                          <p><Skeleton/></p>
                          <p><Skeleton/></p>
                          </div>
                          <span className='skelton_task__status'> <Skeleton/></span>
                        </div>
                      </div>
          </div>
    </SkeletonTheme>
  )
}

export default TaskSkeleton