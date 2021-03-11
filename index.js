function countdown(due){
    // 東京オリンピック2021年7月23日開催
    const t1 = new Date(); //今の時間
    const today = new Date(t1.getFullYear(),t1.getMonth()+1,t1.getDate(),t1.getHours(),t1.getMinutes(),t1.getSeconds());
    const differ = tokyo_olympic.getTime() - today.getTime(); //あと何秒かの計算
    const day = Math.floor(differ/(1000*60*60*24));
    const hour=Math.floor(differ/1000/60/60)%24;
    const min=Math.floor(differ/1000/60)%60;//1時間=60分だからね
    const sec = Math.floor(differ/1000)%60;//ミリ秒を秒に直す
    const count =[day,hour,min,sec];
    return count;
}

const tokyo_olympic =new Date(2021,7,23,20,0,0); 

function recalc(){
    const counter =countdown(tokyo_olympic);
    document.getElementById('day').textContent =String(counter[0]).padStart(2,"0");//一桁になった時0がつくように
    document.getElementById('hour').textContent =String(counter[1]).padStart(2,"0");
    document.getElementById('min').textContent =String(counter[2]).padStart(2,"0");
    document.getElementById('sec').textContent =String(counter[3]).padStart(2,"0");
    setTimeout(recalc,1000);//1秒毎に繰り返す


}
recalc();

// countDown();

// unction countdown(){
//     const now=new Date();//今の時間
//     const tomorrow=new Date(now.getFullYear(),now.getMonth(),now.getDate()+1);//明日の0:00
//     const differ=tomorrow.getTime()-now.getTime();//あと何秒か計算
    
    
//     const sec=Math.floor(differ/1000)%60;//ミリ秒を秒に直してから
//     const min=Math.floor(differ/1000/60)%60;//1時間=60分だからね
//     const hour=Math.floor(differ/1000/60/60);
    
    
//     document.getElementById("hour").textContent=String(hour).padStart(2,"0"); //一桁になった時0がつくように
//     document.getElementById("min").textContent=String(min).padStart(2,"0")
//     document.getElementById("sec").textContent=String(sec).padStart(2,"0")
//     setTimeout(countdown,1000);//1秒毎に繰り返す
//     }
//     countdown();