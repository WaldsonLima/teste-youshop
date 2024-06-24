import { describe, test, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import FormPayment from '../components/FormPayment.vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

describe('import vue components', () => {
    test('normal imports as expected', async () => {
        const wrapper = mount(FormPayment, {
            global: {
              plugins: [vuetify],
            }
        })
        await wrapper.find('#paymentForm').trigger('submit')
        expect(wrapper.find('#paymentForm').exists()).toBe(true)
    })
})
