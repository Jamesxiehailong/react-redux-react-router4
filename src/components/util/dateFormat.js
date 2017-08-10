export function dateFormat(date,format) {
  var d = new Date(date);
  var dateStr = "";
  var MMMArrEn=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  var MMMArr=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];
  var WeekArrEn=["Sun","Mon","Tue","Web","Thu","Fri","Sat"];
  var WeekArr=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
  var time={};
  time.Year=d.getFullYear();
  time.Month=d.getMonth()+1;
  time.TMonth=time.Month<10?"0"+time.Month:time.Month;
  time.Day=d.getDate();
  time.TDay=time.Day<10?"0"+time.Day:time.Day;
  time.Hour=d.getHours();
  time.THour=time.Hour<10?"0"+time.Hour:time.Hour;
  time.hour=time.Hour<13?time.Hour:time.Hour-12;
  time.Thour=time.hour<10?"0"+time.hour:time.hour;
  time.Minute=d.getMinutes();
  time.TMinute=time.Minute<10?"0"+time.Minute:time.Minute;
  time.Second=d.getSeconds();
  time.TSecond=time.Second<10?"0"+time.Second:time.Second;
  time.Millisecond=d.getMilliseconds();
  time.Week=d.getDay();
  switch(format){
    case "yyyy-MM-dd HH:mm:ss":
    dateStr =  time.Year+"-"+time.TMonth+"-"+time.TDay+" "+time.THour+":"+ time.TMinute+":"+time.TSecond;
    break;
    case "yyyy-MM-dd":
    dateStr =  time.Year+"-"+time.TMonth+"-"+time.TDay;
    break;
    case "yyyy/MM/dd HH:mm:ss":
    dateStr =  time.Year+"/"+time.TMonth+"/"+time.TDay+" "+time.THour+":"+ time.Minute+":"+time.TSecond;
    break;
    case "yyyy年MM月dd日 HH:mm:ss":
    dateStr =  time.Year+"年"+time.TMonth+"月"+time.TDay+"日"+" "+time.THour+":"+ time.TMinute+":"+time.TSecond;
    break;
    case "yyyy年 MM月 dd日 eee":
    dateStr =  time.Year+"年"+" "+MMMArr[time.TMonth]+"月"+" "+time.TDay+"日"+" "+ WeekArr[time.Week];
    break;
    default:
    dateStr =  time.Year+"-"+time.Month+"-"+time.Day+" "+time.Hour+":"+ time.Minute+":"+time.Second;
  }
  return dateStr;
}
//时间还原成毫秒
export function dateRes(date){
  var changeTime =  date.replace(new RegExp("-","gm"),"/");
  return  new Date(changeTime);
}
