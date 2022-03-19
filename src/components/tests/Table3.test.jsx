import { render } from '@testing-library/react'

import Table3 from '../Table3'

describe('Table3', () => {
  it('should match snapshot', () => {
    const { container } = render(<Table3 />)

    expect(container).toMatchSnapshot()
  })
})
