import React from 'react'
import { addDecorator } from '@storybook/react'
import AppProvider from '../src/apollo/apolloClient'

addDecorator(story => <AppProvider>{story()}</AppProvider>)
