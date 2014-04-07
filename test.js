/** @constructor */
var __IDRRT__Type = function(type) {
  this.type = type;
};

var __IDRRT__Int = new __IDRRT__Type('Int');
var __IDRRT__Char = new __IDRRT__Type('Char');
var __IDRRT__String = new __IDRRT__Type('String');
var __IDRRT__Integer = new __IDRRT__Type('Integer');
var __IDRRT__Float = new __IDRRT__Type('Float');
var __IDRRT__Ptr = new __IDRRT__Type('Pointer');
var __IDRRT__Forgot = new __IDRRT__Type('Forgot');

var __IDRRT__ffiWrap = function(fid) {
  return function(){
    var res = fid;
    var i = 0;
    var arg;
    while (res instanceof __IDRRT__Con){
      arg = arguments[i];
      res = __IDRRT__tailcall(function(){
        return __IDR__mAPPLY0(res, arg);
      });
      ++i;
    }
    return res;
  }
};

var __IDRRT__tailcall = function(k) {
  var ret = k();
  while (ret instanceof __IDRRT__Cont)
    ret = ret.k();

  return ret;
};

var __IDRRT__print = function(s) {
  console.log(s);
};

var __IDRLT__APPLY65613 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return new __IDRRT__Con(65623,null,__IDRLT__APPLY65623,[null,null,__IDRRT__tailcall(function(){
return new __IDRRT__Con(65625,null,__IDRLT__APPLY65625,[null,new __IDRRT__Con(65620,null,__IDRLT__APPLY65620,[marg0])])
}),__IDRCTR__65617])
})
}
var __IDRLT__APPLY65614 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return window.onkeydown=__IDRRT__ffiWrap(mfn0.vars[0])
})
}
var __IDRLT__APPLY65615 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return new __IDRRT__Con(65625,null,__IDRLT__APPLY65625,[null,new __IDRRT__Con(65622,null,__IDRLT__APPLY65622,[marg0,"red"])])
})
}
var __IDRLT__APPLY65616 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return new __IDRRT__Con(65623,null,__IDRLT__APPLY65623,[null,null,__IDRRT__tailcall(function(){
return new __IDRRT__Con(65623,null,__IDRLT__APPLY65623,[null,null,new __IDRRT__Con(65625,null,__IDRLT__APPLY65625,[null,new __IDRRT__Con(65618,null,__IDRLT__APPLY65618,["target"])]),__IDRCTR__65619])
}),__IDRCTR__65615])
})
}
var __IDRLT__APPLY65617 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return new __IDRRT__Con(65623,null,__IDRLT__APPLY65623,[null,null,__IDRRT__tailcall(function(){
return new __IDRRT__Con(65625,null,__IDRLT__APPLY65625,[null,new __IDRRT__Con(65621,null,__IDRLT__APPLY65621,[marg0])])
}),__IDRCTR__65616])
})
}
var __IDRLT__APPLY65618 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return document.getElementById(mfn0.vars[0])
})
}
var __IDRLT__APPLY65619 = function(mfn0,marg0){
return new __IDRRT__Con(65624,null,__IDRLT__APPLY65624,[null,marg0])
}
var __IDRLT__APPLY65620 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return mfn0.vars[0].keyCode
})
}
var __IDRLT__APPLY65621 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return console.log(mfn0.vars[0])
})
}
var __IDRLT__APPLY65622 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return mfn0.vars[0].style['background-color']=mfn0.vars[1]
})
}
var __IDRLT__APPLY65623 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDR__mAPPLY0(__IDRRT__APPLYTC(mfn0.vars[3],__IDRRT__APPLYTC(mfn0.vars[2],marg0)),null)
})
}
var __IDRLT__APPLY65624 = function(mfn0,marg0){
return mfn0.vars[1]
}
var __IDRLT__APPLY65625 = function(mfn0,marg0){
return new __IDRRT__Cont(function(){
return __IDR__mAPPLY0(mfn0.vars[1],marg0)
})
}
var __IDRRT__APPLYTC = function(mfn0,marg0){
var ret = (mfn0 instanceof __IDRRT__Con && mfn0.app)?(mfn0.app(mfn0,marg0)):(null);
while (ret instanceof __IDRRT__Cont) {
ret=ret.k()
};
return ret
}
/** @constructor */
var __IDRRT__Con = function(tag,eval,app,vars){
this.tag=tag;
this.eval=eval;
this.app=app;
this.vars=vars
}
var __IDRCTR__65613 = new __IDRRT__Con(65613,null,__IDRLT__APPLY65613,[])
var __IDRCTR__65615 = new __IDRRT__Con(65615,null,__IDRLT__APPLY65615,[])
var __IDRCTR__65616 = new __IDRRT__Con(65616,null,__IDRLT__APPLY65616,[])
var __IDRCTR__65617 = new __IDRRT__Con(65617,null,__IDRLT__APPLY65617,[])
var __IDRCTR__65619 = new __IDRRT__Con(65619,null,__IDRLT__APPLY65619,[])
var __IDR__uFalseElim = null
var __IDR__umkForeignPrim = null
var __IDR__umkLazyForeignPrim = null
var __IDR__uunsafePerformPrimIO = null
var __IDR__wnswsinuDecEqCharsmudecEq0uprimitiveEq0swnswsinuDecEqCharsmudecEq0uprimitiveEq0 = null
var __IDR__wnswsinuDecEqCharsmudecEq0uprimitiveNotEq0swnswsinuDecEqCharsmudecEq0uprimitiveNotEq0 = null
var __IDR__wnswsinuDecEqFloatsmudecEq0uprimitiveEq0swnswsinuDecEqFloatsmudecEq0uprimitiveEq0 = null
var __IDR__wnswsinuDecEqFloatsmudecEq0uprimitiveNotEq0swnswsinuDecEqFloatsmudecEq0uprimitiveNotEq0 = null
var __IDR__wnswsinuDecEqIntsmudecEq0uprimitiveEq0swnswsinuDecEqIntsmudecEq0uprimitiveEq0 = null
var __IDR__wnswsinuDecEqIntsmudecEq0uprimitiveNotEq0swnswsinuDecEqIntsmudecEq0uprimitiveNotEq0 = null
var __IDR__wnswsinuDecEqIntegersmudecEq0uprimitiveEq0swnswsinuDecEqIntegersmudecEq0uprimitiveEq0 = null
var __IDR__wnswsinuDecEqIntegersmudecEq0uprimitiveNotEq0swnswsinuDecEqIntegersmudecEq0uprimitiveNotEq0 = null
var __IDR__wnswsinuDecEqStringsmudecEq0uprimitiveEq0swnswsinuDecEqStringsmudecEq0uprimitiveEq0 = null
var __IDR__wnswsinuDecEqStringsmudecEq0uprimitiveNotEq0swnswsinuDecEqStringsmudecEq0uprimitiveNotEq0 = null
/** @constructor */
var __IDRRT__Cont = function(k){
this.k=k
}
var __IDR__mAPPLY0 = function(mfn0,marg0){
return (mfn0 instanceof __IDRRT__Con && mfn0.app)?(mfn0.app(mfn0,marg0)):(null)
}
var __IDRCTR____IDR__mrunMain0_1 = new __IDRRT__Con(65625,null,__IDRLT__APPLY65625,[null,new __IDRRT__Con(65614,null,__IDRLT__APPLY65614,[__IDRCTR__65613])])
var __IDR__mrunMain0 = function(){
return new __IDRRT__Cont(function(){
return __IDRRT__tailcall(function(){
return new __IDRRT__Cont(function(){
return __IDR__mAPPLY0(__IDRRT__tailcall(function(){
return __IDRCTR____IDR__mrunMain0_1
}),null)
})
})
})
}
var main = function(){
if (document.readyState == "complete" || document.readyState == "loaded") {
__IDRRT__tailcall(function(){
return __IDR__mrunMain0()
});
} else {
window.addEventListener("DOMContentLoaded",function(){
__IDRRT__tailcall(function(){
return __IDR__mrunMain0()
})
},false);
}
}
main()