import React from 'react'
import { ChannelList, listener, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import Add from '../assets/add.png';
import LogoutIcon from  '../assets/logout.png';
import DisableVoice from '../assets/disablevoice.png';
import AbleVoice from '../assets/ablevoice.png';

const SideBar = () =>(
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={Add} alt="Add" width="30"/>
            </div>
        </div>
        <div className="channel-list__sidebar__icon2">
            <div className="icon1__inner">
                <img src={LogoutIcon} alt="Logout" width="30"/>
            </div>
        </div>
    </div>
);

const CompanyHeader = () =>(
    <div className="channel-list__header">
        <p className="channel-list__header__text">ShowFace Pager</p>
    </div>
);
var statusValue=true;
 const VoiceControl = () =>{
    if(statusValue){
        document.getElementById('imgevoice').src=DisableVoice;
        statusValue=false;
    }
    else
    {
        document.getElementById('imgevoice').src=AbleVoice;
        statusValue=true;
    }
 }
const ControlAction = () => (
    <div className="control-action-box">
        <div className="user-avatar">
            <img className="imge-avatar" src="https://image.flaticon.com/icons/png/512/1177/1177568.png" alt="avatar"/>
            <span className="online-icon"></span>
        </div>
        <div className="display-username">
            <h3>Phong Nguyen</h3>
        </div>
        <div>
            <button className="voice" onClick={VoiceControl}> 
                <img id="imgevoice" src={AbleVoice} alt="ablevoice" width="30"/>
            </button>
        </div>
    </div>
);

const ChannelListContainer = () => {
    return (
        <>
            <SideBar />
            <div className="channel-list__list__wrapper">
                <CompanyHeader /> 
                <ChannelSearch/>  
            <ChannelList
                filters={{}}
                channelRenderFilterFn={() =>{}}
                List={(listProps) => (
                <TeamChannelList
                    {...listProps}
                    type="team"
                />
            )}
            Preview={(previewProps)=>(
                <TeamChannelPreview
                    {...previewProps}
                    type ="team"
                />
            )}
            />
            <ChannelList
                filters={{}}
                channelRenderFilterFn={() =>{}}
                List={(listProps) => (
                <TeamChannelList
                    {...listProps}
                    type="messaging"
                />
            )}
            Preview={(previewProps)=>(
                <TeamChannelPreview
                    {...previewProps}
                    type ="messaging"
                />
            )}
            />
            <ControlAction/>
            </div>
        </>
    );
}

export default ChannelListContainer;
