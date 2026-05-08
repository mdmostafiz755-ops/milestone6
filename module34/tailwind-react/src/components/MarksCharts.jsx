import React, { use } from 'react'
import { Bar, BarChart, XAxis, YAxis } from 'recharts';
const MarksCharts = ({ marksPromise }) => {
    const marksDataRes = use(marksPromise);
    const marksData = marksDataRes.data;
    // console.log(marksData)
    const marksChartsData = marksData.map(MarkSDATA => {
    const Sdata = {
        id: MarkSDATA.id,
        name: MarkSDATA.name,
        phy: MarkSDATA.phy,
        che: MarkSDATA.che,
        math: MarkSDATA.math
    }
 const markAvg=(MarkSDATA.phy+ MarkSDATA.che+MarkSDATA.math)/3;
 Sdata.avg=markAvg;
    return Sdata
})

console.log(marksChartsData);
    return (
        <div className='grid justify-center items-center'>
            <BarChart width={500} height={500} data={marksChartsData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Bar dataKey={'avg'} fill='lime'></Bar>
                <Bar dataKey={'che'} fill='blue'></Bar>
            </BarChart>
        </div>
    )
}

export default MarksCharts