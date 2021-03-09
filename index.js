function countDown(){
    // 東京オリンピック2021年7月23日開催
    const tokyo_olympic =new Date(2021,7,23,20,0,0); 
    const t1 = new Date(); //今の時間
    const today = new Date(t1.getFullYear(),t1.getMouth(),t1.getDate());
    const elapsed = Math.floor((tokyo_olympic.getTime()-today.getTime())/(1000 * 60 * 60 * 24));
}