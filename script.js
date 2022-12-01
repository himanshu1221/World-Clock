
const updatetime = () => {

let date = new Date()
usa.innerHTML =  date.toLocaleString('en-US', {
    timeZone: 'America/New_York',
    dateStyle: 'full',
    timeStyle: 'full',
  })

india.innerHTML =  date.toLocaleString('en-US', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'full',
  })

china.innerHTML =  date.toLocaleString('en-US', {
    timeZone: 'Asia/Shanghai',
    dateStyle: 'full',
    timeStyle: 'full',
  })
let alarmhour = alarm.value.split(":")[0]
let alarmmin = alarm.value.split(":")[1]

if(date.getHours()==alarmhour && date.getMinutes() ==alarmmin){
    let audiourl = "https://file-examples.com/storage/fedfbdc1286387a0396414f/2017/11/file_example_MP3_700KB.mp3"
    let audio = new Audio(audiourl)
    audio.play()
}
}

setInterval(updatetime , 1000)