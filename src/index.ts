import ClockInterface from './index.interface'

class Clock implements ClockInterface {

  constructor(id: string, time: string = '2018/01/01 00:00:00', visibleDays: boolean) {

    this.targetDate = new Date(time).getTime()

    this.countdown = document.getElementById(id)

    this.visibleDays = !!visibleDays
  }

  private visibleDays: boolean = false

  private targetDate: number

  private days: string

  private hours: string

  private minutes: string

  private seconds: string

  private countdown: HTMLElement

  private timer: number

  private getCountdown (): void {

    const current_date: number = new Date().getTime()

    let seconds_left: number = (this.targetDate - current_date) / 1000

    this.days = this.pad(parseInt(String(seconds_left / 86400)))

    seconds_left = seconds_left % 86400

    this.hours = this.pad(parseInt(String(seconds_left / 3600)))

    seconds_left = seconds_left % 3600;

    this.minutes = this.pad(parseInt(String(seconds_left / 60)))

    this.seconds = this.pad(parseInt(String(seconds_left % 60)))

    if (this.days === '00' && this.hours === '00' && this.minutes === '00' && this.seconds === '00') {
      this.stop()
    }

    this.countdown.innerHTML = this.daysStr + this.hoursStr + this.minutesStr + this.secondsStr
  }

  private get daysStr (): string {
    if (!this.visibleDays) return ''
    return "<span>" + this.days + "</span>:"
  }

  private get hoursStr (): string {
    return "<span>" + this.hours + "</span>:"
  }

  private get minutesStr (): string {
    return "<span>" + this.minutes + "</span>:"
  }

  private get secondsStr (): string {
    return "<span>" + this.seconds + "</span>"
  }

  private pad (n: number): string {

    if (n <= 0) return '00'

    return (n < 10
      ? '0'
      : '') + n;
  }

  public start (): Clock {
    this.stop()
    this.getCountdown()
    const contxt = this
    this.timer = setInterval(function () {
      contxt.getCountdown();
    }, 1000);

    return this
  }

  public stop (): void {
    clearInterval(this.timer)
  }

}

export const clock = (id: string, time: string, visibleDays: boolean) => {
  return new Clock(id, time, visibleDays)
}

export default Clock
