import { assert, test,  } from 'vitest'
import { render } from '@testing-library/react'
import App from './App'

test('Render app', () => {
    render(<App/>)
    assert.isTrue(true)
})