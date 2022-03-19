import { render } from '@testing-library/react'

import Table4 from '../Table4'

describe('Table4', () => {
  it('should match snapshot', () => {
    const { container } = render(<Table4 />)

    expect(container).toMatchSnapshot()
  })
})
