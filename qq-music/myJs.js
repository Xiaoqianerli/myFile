// QQ music
// document.querySelector(".btn_big_down").addEventListener('click',function(){
//     setTimeout(() => {
//         document.querySelector(".popup__subtit").innerHTML = `hi amy,由于你是我们的vvip客户,您可直接下载   <a href=${document.querySelector('audio').getAttribute('src')} target="_blank">点击下载</a>`;
//     }, 0);
// })
//bbDJ
document.querySelector(".dl").addEventListener('click',function(){
    setTimeout(() => {
        document.querySelector(".layui-layer-content").innerHTML=`<h3><a href=${document.querySelector("audio").getAttribute("src")} target="_blank">downLoad</a><h3>`;
    }, 0);
})
