import { useLoaderData } from "react-router-dom";
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import { getStoredCardDetails } from "../../Utility/LocalStorage";




const Statistics = () => {
    const saveData=useLoaderData();
    const localLength= getStoredCardDetails();
    const localStorageLength = localLength.length; 
const totalLength = saveData.length;



const data = [
    { name: "Total value", value: totalLength },
    { name: "Local Storage", value: localStorageLength},

  ];
  
  const COLORS = ["#ff0000", "#008000"];
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };



  return (
   <div>
     <div className="flex flex-col items-center justify-center ">
        <div>
        <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      
    </PieChart>
        </div>
    <div className="">
      
    <p className="">Your Donation <span className="bg-green-700 w-1/2 text-transparent">color</span>   <br />
         Total Donation <span className="bg-red-600 w-1/2 text-transparent">color</span></p>
    </div>
    
    </div>
    
   </div>
  );
};

export default Statistics;

