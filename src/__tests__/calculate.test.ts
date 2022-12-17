import { calculate } from '@/__tests__/calculate'

import { describe, expect, it } from 'vitest'

describe('calculate', () => {
  it('1 + 1 = 2', () => {
    const result = calculate(1, 1)
    expect(result).toBe(2)
  })
})
