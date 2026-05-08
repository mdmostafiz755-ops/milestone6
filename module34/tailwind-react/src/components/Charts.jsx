import React from 'react'
import { Line, LineChart, XAxis, YAxis } from 'recharts';
const resuktData = [
    {
        "id": 1,
        "name": "Rahim",
        "phy": 78,
        "che": 82,
        "math": 85
    },
    {
        "id": 2,
        "name": "Karim",
        "phy": 88,
        "che": 79,
        "math": 91
    },
    {
        "id": 3,
        "name": "Amina",
        "phy": 67,
        "che": 72,
        "math": 70
    },
    {
        "id": 4,
        "name": "Sadia",
        "phy": 90,
        "che": 86,
        "math": 93
    },
    {
        "id": 5,
        "name": "Hasan",
        "phy": 75,
        "che": 80,
        "math": 78
    },
    {
        "id": 6,
        "name": "Nusrat",
        "phy": 84,
        "che": 77,
        "math": 82
    },
    {
        "id": 7,
        "name": "Imran",
        "phy": 69,
        "che": 73,
        "math": 71
    },
    {
        "id": 8,
        "name": "Tania",
        "phy": 92,
        "che": 89,
        "math": 94
    },
    {
        "id": 9,
        "name": "Fahim",
        "phy": 81,
        "che": 85,
        "math": 88
    },
    {
        "id": 10,
        "name": "Mitu",
        "phy": 76,
        "che": 74,
        "math": 79
    }
]
const Charts = () => {
    return (
        <div className='scale-[0.5]'>
            <LineChart width={1500} height={1000} data={resuktData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey={'phy'} stroke='green'></Line>
                <Line dataKey={'che'} stroke='red'></Line>
            </LineChart>
        </div>
    )
}

export default Charts