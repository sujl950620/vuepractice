const VueLoaderPlugin = require('vue-loader/lib/plugin'); //node require로 부른다
const path = require('path');
module.exports = {
    mode : 'development',
    devtool : 'eval',
    resolve : {
        extensions : ['.js','.vue'], //확장자 필요없어짐
    },
    entry : { //핵심파일을 넣어준다
        app: path.join(__dirname,'main.js'), // app : 나중에 합쳐질 파일의 이름
    },
    module : { //webpack의 핵심 모듈 
        rules :[{ 
            test : /\.vue$/, //정규식 .vue로 끝나는 파일인것들 
            use : 'vue-loader', //template 처리 use = loader같음
        }],
    },
    plugins : [ //module들이 처리하다 후처리 
        new VueLoaderPlugin(),
    ],
    output : {
        filename : '[name].js', //최종 결과물
        path : path.join(__dirname,'dist'), //폴더경로
    },
};