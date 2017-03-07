require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

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
  render() {
    // var controllerUnits=[]
    var ImgFigures=[];
    // imageDatas.forEach(value=> ImgFigures.push(<ImgFigure data={value}/>))
    for(var m of imageDatas){
      ImgFigures.push(<ImgFigure data={m}/>)
    }
    return (
      <section className="stage">
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
