import './App.css';
import {useState,useEffect} from "react";
import Avatar from './avatar.png'
import Tou from './tou.png'
import My from './my.png'
import Main from './chain.png'
import One from './one.png'
import Two from './two.png'
import Three from './three.png'
import Bao from './bao.png'
import Bi from './bi.png'
import Cancels from './Cancel.png'
import P1 from './p1.png'
import Ok from './Ok.png'
import P2 from './p2.png'
import PT from './pt.png'
import Minus from './Minus.png'
import Chains from './chains.png'


function App() {
    const [no, setNo] = useState(false)
    const [top, setTop] = useState(false)

    useEffect(() => {
        if(top){
            setTimeout(()=>{
                setNo(!no)
            }, 3000)
        }
    }, [top]);
    const data=[{img:One,text:'My assets'},{img:Two,text:'My tokens'},{img:Three,text:'My profile'}]

    const list=[{img:PT,text:'name',do:Ok},{img:P1,text:'Emma',do:Minus},{img:P2,text:'Liam',do:Minus}]
    const click = () => {
        setTop(!top)
        setNo(!no)
    }
    const clickImg=()=>{
        setTop(!top)
    }
    return (<div className={top&&!no? "App ":'App hei'}>
        <div className={top?'right back':'right ground'} >
            <div className={"a"} onClick={click}>
                <div className={'rightOne'}>
                    {
                        top&&no?<img src={Main} alt=""/>:top? <img src={Chains} alt=""/>:null
                    }
                </div>
                <div className={'rightTwo'}>{top?'0xc8C...5e86':'Connect'}</div>
                <img className={'rightThree'} src={top&&no?My:Avatar} alt=""/>
            </div>
            {
                top&&no?<img src={Tou} alt="" className={'center'}/>:top&&!no?<div style={{padding:0,margin:'20px'}}>
                    <ul style={{listStyle:'none',padding:0,margin:'0px 10px',overflow:'hidden'}}>
                        {
                            data.map((i,v)=>{
                                return <li className={'li'} key={v}><img src={i.img} style={{marginRight:'50px'}} alt=""/> <p>{i.text}</p></li>
                            })
                        }
                    </ul>
                    <div className={'list'}>
                        <ul style={{padding:0,margin:0,overflow:"hidden"}}>
                            {
                                list.map((i,v)=>{
                                    if(v===0){
                                        return  <li className={'listLi bor'} style={{backgroundColor:'rgba(211, 245, 197, 1)'}}>
                                            <img src={i.img} alt=""/>
                                            <input type="text" placeholder={'name'} className={'input'}/>
                                        </li>
                                    }else {
                                        return  <li className={'listLi line'}>
                                            <img src={i.img} alt=""/>
                                            <p>{i.text}</p>
                                            <img src={i.do} alt=""/>
                                        </li>
                                    }
                                })
                            }
                        </ul>
                    </div>
                    <div className={'bottom'}>
                        <div className={'bo'}>
                            <img src={Bao} style={{width:'70%'}} alt=""/>
                            <img src={Bi} alt=""/>
                        </div>
                        <img src={Cancels} alt="" onClick={clickImg}/>
                    </div>
                </div>: null
            }
        </div>
    </div>);
}

export default App;
