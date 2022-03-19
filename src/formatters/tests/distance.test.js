import distance from '../distance'

describe('distance', () => {
  it('should throw an error if typeof value is not number', () => {
    let actual
    let error

    try {
      actual = distance()
    } catch (e) {
      error = e
    }

    expect(actual).toBeUndefined()
    expect(error).toMatchSnapshot()
  })

  it('should throw an error if value is not a number', () => {
    let actual
    let error

    try {
      actual = distance(NaN)
    } catch (e) {
      error = e
    }

    expect(actual).toBeUndefined()
    expect(error).toMatchSnapshot()
  })

  it('should throw an error if unit is not "mile" or "kilometer"', () => {
    let actual
    let error

    try {
      actual = distance(1234, 'test')
    } catch (e) {
      error = e
    }

    expect(actual).toBeUndefined()
    expect(error).toMatchSnapshot()
  })

  it('should throw an error if display is not "short", "long", or "narrow"', () => {
    let actual
    let error

    try {
      actual = distance(1234, 'mile', 'test')
    } catch (e) {
      error = e
    }

    expect(actual).toBeUndefined()
    expect(error).toMatchSnapshot()
  })

  it('should return default formatted distance if only value is provided', () => {
    const expected = '1,234 mi'

    const actual = distance(1234)

    expect(actual).toBe(expected)
  })

  it('should return formatted distance if unit is "kilometer"', () => {
    const expected = '1,234 km'

    const actual = distance(1234, 'kilometer')

    expect(actual).toBe(expected)
  })

  it('should return formatted distance if display is "long"', () => {
    const expected = '1,234 miles'

    const actual = distance(1234, undefined, 'long')

    expect(actual).toBe(expected)
  })

  it('should return formatted distance if display is "narrow"', () => {
    const expected = '1,234mi'

    const actual = distance(1234, undefined, 'narrow')

    expect(actual).toBe(expected)
  })
})
