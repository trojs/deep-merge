import test from 'node:test'
import assert from 'node:assert'
import { deepMerge } from './index.js'

test('deepMerge', async (t) => {
    await t.test('It should merge 2 objects', async () => {
        const obj1 = {
            a: 1,
            b: 1,
            c: { x: 1, y: 1 },
            d: [1, 1]
        }
        const obj2 = {
            b: 2,
            c: { y: 2, z: 2 },
            d: [2, 2],
            e: 2
        }
        const result = deepMerge(obj1, obj2)

        const expectedResult = {
            a: 1,
            b: 2,
            c: { x: 1, y: 2, z: 2 },
            d: [1, 1, 2, 2],
            e: 2
        }
        assert.deepEqual(result, expectedResult)
    })

    await t.test('It should merge 3 objects', async () => {
        const obj1 = {
            a: 1,
            b: 1
        }
        const obj2 = {
            b: 2,
            c: 2
        }
        const obj3 = {
            c: 3,
            d: 3
        }
        const result = deepMerge(obj1, obj2, obj3)

        const expectedResult = {
            a: 1,
            b: 2,
            c: 3,
            d: 3
        }
        assert.deepEqual(result, expectedResult)
    })
})
