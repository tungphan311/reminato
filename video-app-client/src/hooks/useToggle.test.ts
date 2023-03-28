import { act, renderHook, waitFor } from '@testing-library/react'
import useToggle from './useToggle'

describe('useToggle', () => {
  test('Toggle value', async () => {
    const { result } = renderHook(() => useToggle(false))

    const [value, toggle] = result.current

    expect(value).toBe(false)

    act(() => {
      toggle()
    })

    const [newValue] = result.current
    expect(newValue).toBe(true)
  })
})
