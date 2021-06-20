import React from 'react'
import { shallow } from 'enzyme/build'
import App from './App'
import ChartLineSimple from './views/charts/ChartLineSimple'
import Dashboard from './views/Stock/Articles.js.js'


it('mounts without crashing', () => {
  const wrapper = shallow(<App/>)
  wrapper.unmount()
})

it('mounts dashboard without crashing', () => {
  const wrapper = shallow(<Articles/>)
  wrapper.unmount()
})

it('mounts charts without crashing', () => {
  const wrapper = shallow(<ChartLineSimple/> )
  wrapper.unmount()
})
