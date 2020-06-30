module.exports = {
    entry : { //핵심파일을 넣어준다
        app: './main.js', // app : 나중에 합쳐질 파일의 이름
    },
    module : { //webpack의 핵심 모듈 
        rules :[{
            
        }],
    },
    plugins : [],
    output : {
        filename : '[name].js', //최종 결과물
        path : './dist', //폴더경로
    },
};