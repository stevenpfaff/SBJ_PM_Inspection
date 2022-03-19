import { render } from '@testing-library/react'

import Title from '../Title'

describe('Title', () => {
  it('should match snapshot when workOrderNumber is empty', () => {
    const { container } = render(<Title />)

    expect(container).toMatchSnapshot()
  })

  it('should match snapshot when workOrderNumber is defined', () => {
    const { container } = render(<Title workOrderNumber='123456' />)

    expect(container).toMatchSnapshot()
  })
})
