require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

//获取图片相关数据
var imageDatas=require("../data/imageDatas.json");

//利用自执行函数，将图片名信息专成图片URL路径信息
imageDatas=(function(imageArr){

})(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please Add <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
