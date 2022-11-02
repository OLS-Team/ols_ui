import { mount } from '@vue/test-utils'
import ListView from './ListView.vue'

test('mount component', async () => {
  expect(ListView).toBeTruthy()

  const wrapper = mount(ListView, {
    props: {},
  })

  expect(wrapper.text()).toContain('Courses')
  // expect(wrapper.html()).toMatchSnapshot()

})