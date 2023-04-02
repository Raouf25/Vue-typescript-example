import { shallowMount } from '@vue/test-utils'
import Navbar from '@/components/Navbar.vue'

describe('Navbar', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(Navbar)
    expect(wrapper.exists()).toBe(true)
  })

  it('renders the navbar text', () => {
    const wrapper = shallowMount(Navbar)
    expect(wrapper.find('.nav-text').text()).toMatch('Vue + TS Blog')
  })

  it('renders the three navigation links', () => {
    const wrapper = shallowMount(Navbar)
    expect(wrapper.findAll('.nav-item')).toHaveLength(3)
  })

  it('sets the correct link for home', () => {
    const wrapper = shallowMount(Navbar)
    expect(wrapper.find('.nav-item:nth-child(1)').props('to')).toEqual({ name: 'home' })
  })

  it('sets the correct link for modify', () => {
    const wrapper = shallowMount(Navbar)
    expect(wrapper.find('.nav-item:nth-child(2)').props('to')).toEqual({ name: 'modify' })
  })

  it('sets the correct link for create', () => {
    const wrapper = shallowMount(Navbar)
    expect(wrapper.find('.nav-item:nth-child(3)').props('to')).toEqual({ name: 'create' })
  })
})