import React from 'react'
import { Header } from './styles'
import { ReactComponent as ReactLogo } from '../assets/logo.svg'
import { LazyComponent } from './Lazy.component.jsx'

export const HeaderComponent = () => {
  return (
    <Header>
      <section>
        <ReactLogo />
        <div>
          <LazyComponent />
          <LazyComponent />
          <LazyComponent />
          <LazyComponent />
          <LazyComponent />
        </div>
      </section>
    </Header>
  )
}
