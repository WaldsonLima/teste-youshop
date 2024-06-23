import { $, expect } from '@wdio/globals'
import { mount } from '@vue/test-utils'
import FormUser from '../../components/FormUser.vue'
import { describe, it } from 'vitest'

describe('FormUser Component Testing', () => {
    it('increments value on click', async () => {
        // The render method returns a collection of utilities to query your component.
        const wrapper = mount(FormUser, { attachTo: document.body })
        expect(wrapper.text()).toContain('Quantidade de vezes clicada: 0')

        const button = await $('aria/addnumber')

        // Dispatch a native click event to our button element.
        await button.click()
        await button.click()

        expect(wrapper.text()).toContain('Quantidade de vezes clicada: 2')
        await expect($('p=Times clicked: 2')).toExist() // same assertion with WebdriverIO
    })
})
