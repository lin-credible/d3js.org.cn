/**
 * Created by zj on 2015/11/20.
 */
//定义权限验证

exports.userRequired=function(req,res,next){
    Promise.resolve().then(function(){
        //TODO；
        next();
    })
}
exports.adminRequired=function(req,res,next){
    Promise.resolve().then(function(){
        //TODO；
        next();
    })
}
