import duration from '../duration'

describe('duration', () => {
  describe('formatHours', () => {
    it('should throw an error if typeof hours is not a number', () => {
      let actual
      let error

      try {
        actual = duration.formatHours()
      } catch (e) {
        error = e
      }

      expect(actual).toBeUndefined()
      expect(error).toMatchSnapshot()
    })

    it('should throw an error if hours is not a number', () => {
      let actual
      let error

      try {
        actual = duration.formatHours(NaN)
      } catch (e) {
        error = e
      }

      expect(actual).toBeUndefined()
      expect(error).toMatchSnapshot()
    })

    it('should return "1 hr" if hours === 1', () => {
      const expected = '1 hr'

      const actual = duration.formatHours(1)

      expect(actual).toBe(expected)
    })

    it('should return "1 hr" if 1 < hours && hours > 2', () => {
      const expected = '1 hr'

      const actual = duration.formatHours(1.3)

      expect(actual).toBe(expected)
    })

    it('should return formatted hours if hours > 1', () => {
      const expected = '2 hrs'

      const actual = duration.formatHours(2)

      expect(actual).toBe(expected)
    })

    it('should return formatted hours if hours is greater than 2 and not a whole number', () => {
      const expected = '2 hrs'

      const actual = duration.formatHours(2.5)

      expect(actual).toBe(expected)
    })
  })

  describe('formatMinutes', () => {
    it('should throw an error if typeof hours is not a number', () => {
      let actual
      let error

      try {
        actual = duration.formatMinutes()
      } catch (e) {
        error = e
      }

      expect(actual).toBeUndefined()
      expect(error).toMatchSnapshot()
    })

    it('should throw an error if hours is not a number', () => {
      let actual
      let error

      try {
        actual = duration.formatMinutes(NaN)
      } catch (e) {
        error = e
      }

      expect(actual).toBeUndefined()
      expect(error).toMatchSnapshot()
    })

    it('should return an empty string if hours is a whole number', () => {
      const expected = ''

      const actual = duration.formatMinutes(1)

      expect(actual).toBe(expected)
    })

    it('should return "1 min" if hour ends with ".0167"', () => {
      const expected = '1 min'

      const actual = duration.formatMinutes(0.0167)

      expect(actual).toBe(expected)
    })

    it('should return formatted minutes if 1 < hours && hours > 2', () => {
      const expected = '18 mins'

      const actual = duration.formatMinutes(1.3)

      expect(actual).toBe(expected)
    })

    it('should return formatted hours if hours is greater than 2 and not a whole number', () => {
      const expected = '30 mins'

      const actual = duration.formatMinutes(2.5)

      expect(actual).toBe(expected)
    })
  })
})
