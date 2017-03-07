require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ReactDOM from 'react-dom';

// let yeomanImage = require('../images/yeoman.png');

//获取图片相关数据
var imageDatas=require('../data/imageDatas.json');

//利用自执行函数，将图片名信息专成图片URL路径信息
imageDatas=(function(imageArr){
    for(var i=0,j=imageArr.length;i<j;i++){
      var img=imageArr[i];
      img.imageURL=require('../images/'+img.fileName);
      imageArr[i]=img;
    }
    return imageArr;
})(imageDatas);




class ImgFigure extends React.Component{
  render(){
    return (
      <figure className="img-figure">
          <img src={this.props.data.imageURL} alt={this.props.data.title}/>
          <figcaption>
              <h2 className='img-title'>{this.props.data.title}</h2>
          </figcaption>
      </figure>
    )
  }
}

class AppComponent extends React.Component {
  constructor(props){
    super(props);
    this.state={
      imgsArr:[{pos:{left:0,top:0}}
    ]
  }
  }
  Constant={
    centerPos:{
      left:0,right:0
    },
    hPosRange:{
      leftSecX:[0,0],
      rightSecX:[0,0],
      y:[0,0]
    },
    vPosRange:{
      x:[0,0],
      topY:[0,0]
    }
  }
  //重新布局所有图片
  rearrange(centerIndex){

  }
  componentDidMount(){
    //首先拿到舞台大小
    var stageDom=React.findDOMNode(this.refs.stage);
    var stageW=stageDom.scrollWidth;
    var stageH=stageDom.scrollHeight;
    var halfStageW=Math.ceil(stageW/2);
    var halfStageH=Math.ceil(stageH/2);
    //拿到一个imageFigure的大小
    var imgFigureDom=React.findDOMNode(this.refs.ImgFigure0);
    var imgW=imgFigureDom.scrollWidth;
    var imgH=imgFigureDom.scrollHeight;
    var halfImgW=Math.ceil(imgW/2);
    var halfImgH=Math.ceil(imgH/2);

    this.Constant.centerPos={
      left:halfStageW-halfImgW,
      top:halfStageH-halfImgH
    }
    //计算左侧，右侧区域图片排布位置的取值范围
    this.Constant.hPosRange.leftSecX[0]=-halfImgW;
    this.Constant.hPosRange.leftSecX[1]=halfStageW-halfImgW*3;
    this.Constant.hPosRange.rightSecX[0]=halfStageH=halfImgH;
    this.Constant.hPosRange.rightSecX[1]=stageW-halfImgW;
    this.Constant.hPosRange.y[0]=-halfImgH;
    this.Constant.hPosRange.y[1]=stageH-halfImgH;
    //计算上侧区域图片排布位置的取值范围
    this.Constant.vPosRange.topY[0]=-halfImgH;
    this.Constant.vPosRange.topY[1]=halfStageH-  halfImgH*3;
    this.Constant.vPosRange.x[0]=halfImgW-imgW;
    this.Constant.vPosRange.x[1]=halfImgW;

    this.rearrange(0);
  }
  render() {
    // var controllerUnits=[]
    var ImgFigures=[];
    // imageDatas.forEach(value=> ImgFigures.push(<ImgFigure data={value}/>))
    
    imageDatas.forEach((value,index)=>{
      if(!this.state.imgsArr[index]){
          this.state.imgsArr[index]={
            pos:{left:0,top:0}
          }
      }
      ImgFigures.push(<ImgFigure data={value} ref={'imgFigure'+index}/>)
    }).bind(this);
    return (
      <section className="stage" ref="stage">
          <section className="img-sec">
            {ImgFigures}
          </section>
          <nav className="controller-nav"></nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
