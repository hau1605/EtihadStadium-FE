import React from 'react'
import './Topbar.css';
import { NotificationsNone, Settings } from '@mui/icons-material';

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft" style={{marginTop: 8}}>
                <span className="logo">
                    Etihad Stadium
                </span>
            </div>
            <div className="topRight">
                <div className="topbarIconsContainer">
                    <NotificationsNone/>
                    <span className="topIconBag">2</span>
                </div>
                <div className="topbarIconsContainer">
                    <Settings/>
                </div>
                <img style={{width: 30, height: 30}} src='https://www.mancity.com/dist/images/logos/crest.svg' alt="logo" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}
