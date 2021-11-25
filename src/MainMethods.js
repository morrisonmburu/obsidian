class MainMethods {
  constructor () {
    this.defaultMonths = 12
  }

  methods () {
    return {
      getNoDays: (date) => {
        const currentMonth = date.getMonth() + 1
        const currentYear = date.getFullYear()
        const daysInMonth = new Date(currentMonth, currentYear, 0).getDate()
        return daysInMonth
      }
    }
  }
}

module.exports = new MainMethods().methods()
