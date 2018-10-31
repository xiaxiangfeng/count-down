class Clock {

  constructor(id, time = '2018/01/01 00:00:00', visibleDays) {

    this.target_date = new Date(time).getTime()

    this.countdown = document.getElementById(id)

    this.visibleDays = !!visibleDays
  }

  visibleDays = false

  target_date

  days

  hours

  minutes

  seconds

  countdown

  timer

  getCountdown () {

    const current_date = new Date().getTime();
    let seconds_left = (this.target_date - current_date) / 1000;

    this.days = this.pad(parseInt(seconds_left / 86400))

    seconds_left = seconds_left % 86400

    this.hours = this.pad(parseInt(seconds_left / 3600))

    seconds_left = seconds_left % 3600;

    this.minutes = this.pad(parseInt(seconds_left / 60))

    this.seconds = this.pad(parseInt(seconds_left % 60));

    if (this.days === '00' && this.hours === '00' && this.minutes === '00' && this.seconds === '00') {
      this.stop()
    }

    this.countdown.innerHTML = this.daysStr + this.hoursStr + this.minutesStr + this.secondsStr
  }

  get daysStr () {
    if (!this.visibleDays) return ''
    return "<span>" + this.days + "</span>"
  }

  get hoursStr () {
    return "<span>" + this.hours + "</span>"
  }

  get minutesStr () {
    return "<span>" + this.minutes + "</span>"
  }

  get secondsStr () {
    return "<span>" + this.seconds + "</span>"
  }

  pad (n) {

    if (n <= 0) return '00'

    return (n < 10
      ? '0'
      : '') + n;
  }

  start () {
    this.stop()
    this.getCountdown()
    const contxt = this
    this.timer = setInterval(function () {
      contxt.getCountdown();
    }, 1000);

    return this
  }

  stop () {
    clearInterval(this.timer)
  }

}

export const clock = (id, time, visibleDays) => {
  return new Clock(id, time, visibleDays)
}

export default Clock
