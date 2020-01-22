/*봇 실행을 위한 단락*/
const Discord = require('discord.js');      //라이브러리 참조
const bot = new Discord.Client();           //봇 클라이언트

bot.login('NjY3NjU5NTY2NTc3NzQ1OTIy.XiaPUw.r4je5f2qDJbv8Q4FU24EgdHnuhU');           //로그인
/*봇 실행을 위한 단락*/

/*미디어 플레이*/
const fs = require('fs')
/*미디어 플레이*/

//욕설 필터
var badWord = ['시발','ㅅㅂ','ㅅ1ㅂ','씨발','개새끼','좆','ㅈ까','씨이발','ㅄ','병1신','병신','븅슨','븅신','벼엉신','ㅂㅅ','븅싄','뵹싄','애미','느금','너검','어미'];

bot.on('message',(msg)=>{       //메세지를 받았을 때
    if(msg.author.bot)return;
    for(var i=0;i<badWord.length;i++){
        if(msg.content.indexOf(badWord[i])!=-1){
            msg.delete(100);
            break;
        }
    }
    if(msg.content === '/logout'){
        msg.reply('봇을 종료합니다.')
        bot.destroy();
    }
    else if(msg.content === '/?'||msg.content === '/help'){
        msg.channel.send('현재 비속어 필터 기능만 존재합니다.'+
        '\n-------------------명령어 리스트-------------------'+
        '\n모든 명령어 앞에서는/을 붙여야 합니다.'+
        '\nlogout : 봇을 로그아웃 시킵니다.')
    }
    else if(msg.content === '/join'){
        if (msg.member.voiceChannel) {
            msg.member.voiceChannel.join().then(connection => {
                msg.reply('채널 입장')
            })
        }else{
            msg.reply('먼저 보이스 채널에 입장해주세요.')
        }
    }
});
bot.on('messageDelete',(delmsg)=>{  //메세지가 삭제될 때 
    delmsg.channel.send('규제에 따라 '+delmsg.author+'님의 메세지를 삭제했습니다.');
});
/*
media.on('end',()=>{        //재생이 끝날때

})
media.on('error',e=>{
    console.log(e);
})
*/
/**
 * 볼륨 컨트롤
 * @param value 볼륨값  1~100
 */
function volumeControl(value) {

}
