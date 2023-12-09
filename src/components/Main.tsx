import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const API_URL = 'https://randomuser.me/api/?results=100';

const getRandomEmploymentType = () => {
  const employmentTypes = ['Full-time', 'Part-time', 'Daily wage'];
  const randomIndex = Math.floor(Math.random() * employmentTypes.length);
  return employmentTypes[randomIndex];
};

interface UserData {
  gender: string;
}

const Main: React.FC = () => {
  const [genderData, setGenderData] = useState<Record<string, number> | null>(null);
  const [employmentData, setEmploymentData] = useState<Record<string, number> | null>(null);

  useEffect(() => {
    const empData:any={};
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        const usersByGender = data.results.reduce((acc: Record<string, number>, user: UserData) => {
          acc[user.gender] = acc[user.gender] || 0;
          acc[user.gender]++;
          const employmentType = getRandomEmploymentType();
          empData[employmentType] = empData[employmentType] || 0;
          empData[employmentType]++;
          return acc;
        }, {});

       
        setGenderData(usersByGender);
        setEmploymentData(empData);
      })
      .catch((error) => console.log(error));
  }, []);

  const generateChartData = (data: Record<string, number> | null, title: string) => {
    if (!data) return;

    const labels = Object.keys(data);
    const values = Object.values(data);
    const total = values.reduce((acc, value) => acc + value, 0);

    const chartData = labels.map((label, index) => ({ label, value: values[index] as number | string }));
    chartData.unshift({ label: 'Category', value: 'Count' as number | string }); 

    const titleWithCounts = `${title} (${labels.map((label) => `${label}: ${data[label] || 0}`).join(', ')}, Total: ${total})`;

    return {
      data: chartData,
      options: {
        title: titleWithCounts,
        is3D: true,
        backgroundColor: 'transparent', 
      },
    };
  };

  return (
    <main className="w-10/12 bg-[#eae7dc] h-4/5 rounded-md m-8 p-8 px-8 ">
      <h2 className="text-xl font-bold text-gray-700 mb-4 pd-2">Key Performance Indicators</h2>
      <div className="flex flex-col h-4/5 gap-3">
        <div className="flex h-1/2 w-full  border-2 border-solid border-gray-700 rounded-md ">
          
          {genderData && (
            <Chart
              width={'100%'}
              height={'100%'}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={generateChartData(genderData, 'Gender Distribution')?.data?.map((item) => [item.label, item.value])}
              options={generateChartData(genderData, 'Gender Distribution')?.options}
              rootProps={{ 'data-testid': '1' }}
            />
          )}
        </div>
        <hr />
        <div className=" h-1/2 w-full border-2 border-solid border-gray-700 rounded-md">
          
          {employmentData && (
            <Chart
              width={'100%'}
              height={'100%'}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={generateChartData(employmentData, 'Employment Type ')?.data.map((item) => [item.label, item.value])}
              options={generateChartData(employmentData, 'Employment Type ')?.options}
              rootProps={{ 'data-testid': '2' }}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Main;
