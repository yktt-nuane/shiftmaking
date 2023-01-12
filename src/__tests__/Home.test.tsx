import Home from '@/app/page'

import { render, screen, within } from '@testing-library/react'
import { expect, test } from 'vitest'

test('home', () => {
  render(<Home />)
  const main = within(screen.getByRole('main'))
  expect(
    main.getByRole('heading', { level: 1, name: /Shiftmaking/i })
  ).toBeDefined()
})
