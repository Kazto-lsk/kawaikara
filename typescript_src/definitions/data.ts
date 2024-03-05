import { BrowserWindow } from "electron"

type Cateogry = {
    id : string,
    name : string,
    item : Cateogry|Service[]
}
type Service = {
    id : string,
    name : string,
    category : string, 
    link : string | Function
}

import { shell } from "electron"
import { Configure, GlobalObject } from "./types"
import { checkForUpdates } from "../component/autoupdater"
import { get_instance } from "../component/preference"
const app_info_f = ()=>{

}

const check_update_f = ()=>{
}

const open_preference_f = ()=>{

}
const goto_github_f = ()=>{
    shell.openExternal("https://github.com/fabyday/kawaikara")
}

export function isCService(obj : any) :obj is Service {
    return obj.link !== undefined
}

export const Link_data = [{
    id : "ott",
    name : "OTT",
    item : [
        {
            id : "goto_netflix",
            name : "netflix",
            link : "https://netflix.com/"
        },
        {
            id : "goto_laftel",
            name : "laftel",
            link : "https://laftel.net/"
        },
        {
            id : "goto_disney",
            name : "disneyplus",
            link : "https://www.disneyplus.com/"
        },
        {
            id : "goto_youtube",
            name : "youtubue",
            link : "https://netflix.com/"
        },
        {
            id : "goto_amazonprime",
            name : "amazonprime",
            link : "https://www.primevideo.com/"
        },
        {
            id : "goto_wavve",
            name : "wavve",
            link : "https://www.wavve.com/"
        },
        {
            id : "goto_watcha",
            name : "watcha",
            link : "https://watcha.com/"
        },
        {
            id : "goto_coupangplay",
            name : "coupangplay",
            link : "https://www.coupangplay.com/"
        },
        {
            id : "goto_tving",
            name : "tving",
            link : "https://www.tving.com/"
        },
    ]
    
},
{
    id : "streaming",
    name : "streaming",
    item : [
        {
            id : "goto_chzzk",
            name : "chzzk",
            link : "https://chzzk.naver.com/"
        },
        {
            id : "goto_twitch",
            name : "twitch",
            link : "https://www.twitch.tv/"
        },
    ]
},
{
    id : "music",
    name : "music",
    item : [
        {
            id : "goto_applemusic",
            name : "applemusic",
            link : "https://music.apple.com/"
        },
    ]
},
{
    
        id : "option",
        name : "option",
        item : [
            {
                id : "appinfo",
                name : "info",
                link : app_info_f
            },
            {
                id :"preference",
                name : "preference",
                link : open_preference_f
            },
            {
                id : "check_update",
                name : "check update",
                link : check_update_f
            },
            {
                id : "github",
                name : "github",
                link : goto_github_f
            }

        ]
    
}]



export function setup_menu_funtionality(gobj : GlobalObject, conf : Configure){
    const app_info_f = ()=>{
        
    }
    const open_preference_f = ()=>{
        gobj.preferenceWindow = get_instance(conf)
        gobj.preferenceWindow.show()
    }
    const check_update_f = ()=>{
        checkForUpdates();
    }
    const goto_github_f = ()=>{
        shell.openExternal("https://github.com/fabyday/kawaikara")
    }


    for(let item of Link_data[Link_data.length - 1].item ){

        switch(item.id){
            case "appinfo":
                item.link = app_info_f
                break;
            case "check_update":
                item.link = check_update_f
                break;
            case "preference":
                item.link = open_preference_f
                break;
            case "github":
                item.link = goto_github_f
                break;
        }
    }

}