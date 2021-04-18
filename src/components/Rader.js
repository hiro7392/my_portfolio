    //表示させたいデータ群
     //表示させたいデータ群
import {PolarGrid,Tooltip,RadarChart,PolarAngleAxis,Radar} from 'recharts'
import React,{Component} from 'react';
import firebase from "firebase";
import "firebase/storage";
class GradeRader extends Component{
//const GradeRader=()=>{
  
  constructor(props) {
    super(props);
    this.state = {
        player:[],
    };
    this.getFireData();
    
  }

  // Firebaseからのデータ取得
  getFireData(){
    let db = firebase.database();
    
    let ref2=db.ref("player/");
    let self = this;
    ref2
      .orderByKey()
      .on("value", snapshot => {
        self.setState({
          player: snapshot.val()
        });
      });
    }
      
  render(){
      var dataRadar = [
        { rank: 'knowledge', value: this.state.player.knowledge },
        { rank: 'experiment', value: this.state.player.experiment },
        { rank: 'skill', value: this.state.player.skill },
        { rank: 'HP', value: this.state.player.HP },
        { rank: 'MP', value: this.state.player.MP }
        ];
    
    return(
      <div>
      <h1 className="status">Status</h1>
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
        name="point"  //hoverした時に表示される名前を指定
        dataKey="value" //Array型のデータのパラメータータイトルを指定
        stroke="#8884d8"  //レーダーの線の色を指定
        //fill="#8884d8" //レーダーの中身の色を指定
        fill="#008000" //レーダーの中身の色を指定
        
        fillOpacity={1.0} //レーダーの中身の色の薄さを指定
      />
      <Tooltip /> //hoverすると各パラメーターの値が表示される
      </RadarChart>
      
      </div>
    );
  }
}

export default GradeRader;