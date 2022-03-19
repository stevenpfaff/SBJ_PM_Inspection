import { render } from '@testing-library/react'

import Table1 from '../Table1'

describe('Table1', () => {
  it('should match snapshot', () => {
    const { container } = render(<Table1 />)

    expect(container).toMatchSnapshot()
  })
})
