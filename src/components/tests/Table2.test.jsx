import { fireEvent, render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import Table2 from '../Table2'

describe('Table2', () => {
  it('should match snapshot', () => {
    const { container } = render(<Table2 />)

    expect(container).toMatchSnapshot()
  })

  it('should do nothing on "completed" checkbox click', () => {
    const { asFragment, getAllByTestId } = render(<Table2 />)

    const completed = getAllByTestId('table-2-completed')

    expect(completed.length).not.toBeFalsy()

    const old = asFragment()

    act(() => {
      fireEvent.click(completed[0])
    })

    expect(asFragment()).toStrictEqual(old)
  })

  it('should do nothing on "not performed" checkbox click', () => {
    const { asFragment, getAllByTestId } = render(<Table2 />)

    const notPerformed = getAllByTestId('table-2-not-performed')

    expect(notPerformed.length).not.toBeFalsy()

    const old = asFragment()

    act(() => {
      fireEvent.click(notPerformed[0])
    })

    expect(asFragment()).toStrictEqual(old)
  })
})
