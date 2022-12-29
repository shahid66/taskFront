import React from 'react'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts'
import milrStsticsData from '../assets/dummy-data/mileStatics'

const MileStaticsChart = () => {
  return (
    <ResponsiveContainer width='100%' >
              <BarChart data={milrStsticsData}>
                <XAxis dataKey={'name'} stroke="#2884ff"/>
                <Bar dataKey={'mileStats'} stroke="#2884ff" fill="#2884ff" barSize={30}/>
                <Tooltip cursor={false} wrapperClassName="tooltip_style"/>
              </BarChart>
            </ResponsiveContainer>
  )
}

export default MileStaticsChart