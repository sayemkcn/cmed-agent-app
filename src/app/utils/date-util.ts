export class DateUtil {
  public static monthNames: string[] = [
    'January', 'February', 'March',
    'April', 'May', 'June', 'July',
    'August', 'September', 'October',
    'November', 'December'
  ];

  public static monthNamesShort: string[] = [
    'Jan', 'Feb', 'Mar',
    'Apr', 'May', 'Jun', 'Jul',
    'Aug', 'Sep', 'Oct',
    'Nov', 'Dec'
  ];

  public static formatReadableDateTime(date) {
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const armyhours = date.getHours();
    const hours = (armyhours >= 12) ? armyhours - 12 : armyhours;
    const minutes = date.getMinutes();
    const ampm = (armyhours >= 12) ? 'PM' : 'AM';
    return this.monthNamesShort[monthIndex] + ' ' + day + ', ' + year + ' at ' + hours + ':' + minutes + ' ' + ampm;
  }

  public static formatReadableDate(date) {
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    return this.monthNamesShort[monthIndex] + ' ' + day + ', ' + year;
  }

  public static isInValidDateForSharing(month: string, year: number) {
    if (month == null || year == null) { return true; }

    let mNumber: number;
    DateUtil.monthNames.forEach((m, i) => {
      if (m.toLowerCase() === month.toLowerCase()) {
        mNumber = i + 1;
      }
    });
    const date: Date = new Date();
    date.setFullYear(year, mNumber, 0);

    const currentDate: Date = new Date();
    console.log('CurrentDate: ' + currentDate);
    console.log('Selected : ' + date);
    return date.getTime() >= currentDate.getTime();
  }

  public static getLastMonthString(date: Date): string {
    let lastMonth = 'December';
    DateUtil.monthNames.forEach((m, i) => {
      if ((i + 1) === date.getMonth()) {
        lastMonth = m;
      }
    });
    return lastMonth;
  }

  static getLastMonthYear(month: string): number {
    if (month === 'december') {
      return new Date().getFullYear() - 1;
    }
    return new Date().getFullYear();
  }
}
