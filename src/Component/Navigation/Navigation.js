import React from 'react'
import "./Navigation.css"
import MediaQuery from 'react-responsive'
import PhoneNavigation from './PhoneNavigation'
import { DesktopNavigation } from './DesktopNavigation'

export const Navigation = () => {
    return (
        <div>
            {/* Desktop viewport */}
            <MediaQuery minWidth={1000}>
                <DesktopNavigation />
            </MediaQuery>

            {/* Phone view port */}
            <MediaQuery maxWidth={1000} >
                <PhoneNavigation />
            </MediaQuery>
        </div>
    )
}
