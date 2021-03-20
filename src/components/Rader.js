    //表示させたいデータ群
     //表示させたいデータ群
import {PolarGrid,Tooltip,RadarChart,PolarAngleAxis,Radar} from 'recharts'
import React from 'react';

const GradeRader=()=>{
    const dataRadar = [
        { rank: '知識', value: 120 },
        { rank: '経験', value: 85 },
        { rank: '集中力', value: 65 },
        { rank: 'HP', value: 35 },
        { rank: 'MP', value: 35 },
        ];
    
    return(
    <RadarChart // レーダーチャートのサイズや位置、データを指定
    height={400} //レーダーチャートの全体の高さを指定
    width={500} //レーダーチャートの全体の幅を指定
    cx="50%" //要素の左を基準に全体の50%移動
    cy="50%" //要素の上を基準に全体の50%移動
    data={dataRadar} //ここにArray型のデータを指定
    fill="#f0f8ff"
    >
    <PolarGrid /> //レーダーのグリッド線を表示
    <PolarAngleAxis
      dataKey="rank" //Array型のデータの、数値を表示したい値のキーを指定
    />
    <Radar //レーダーの色や各パラメーターのタイトルを指定
      name="score"  //hoverした時に表示される名前を指定
      dataKey="value" //Array型のデータのパラメータータイトルを指定
      stroke="#8884d8"  //レーダーの線の色を指定
      //fill="#8884d8" //レーダーの中身の色を指定
      fill="#008000" //レーダーの中身の色を指定
      fillOpacity={1.0} //レーダーの中身の色の薄さを指定
    />
    <Tooltip /> //hoverすると各パラメーターの値が表示される
    </RadarChart>

    );
}

export default GradeRader;