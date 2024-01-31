import React, { MouseEventHandler } from 'react'
import ShortcutTextField from './ShortcutTextfield';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import WindowSizeComponent from './WindowSizeComponent';
import Box from '@mui/material/Box';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { CGeneral, Configure } from '../../typescript_src/definitions/types';
// see also
// https://github.com/snapcrunch/electron-preferences/blob/development/src/app/components/main/components/group/components/fields/accelerator/index.jsx



type props = {
    id: string;
    preference_changed : Function;
    loaded_config : Configure;
    generate_config : Configure;
    set_generate_config : Function;
  };
  
function GeneralPreference({id, preference_changed , loaded_config, generate_config, set_generate_config} : props){

    const [pip_enable, set_pip_enable] = React.useState(false);
    
    return (
        <Box >
        <Typography  fontSize={32}>General</Typography>
        <Grid container style={{maxHeight: '80%', overflow: 'auto'}} justifyContent="center" rowGap={1} spacing={1} >
            <Grid container  spacing={12} >
            <Grid item xs={6}> <Typography>Enable PiP(Picture in Picture)</Typography> </Grid>
            <Grid item xs={6}>
                    <Box display="flex" justifyContent="center">
                        <Switch checked={loaded_config.general?.pip_mode} onClick={()=>{
                        if(pip_enable === loaded_config.general!.pip_mode){
                            preference_changed(true);
                        }
                        }}/>
                    </Box>
                </Grid>
            </Grid>
            {/* pip location */}
            <Grid container  spacing={12} >
            <Grid item xs={6}> <Typography>PiP default location</Typography> </Grid>
            <Grid item xs={6}>
                    <Box display="flex" justifyContent="center">
                    <WindowSizeComponent id = {"pip_window_size"} values = {[...(loaded_config.general!.pip_window_size!.preset_list!), "custom"]} />
                    </Box>
                    <Box display="flex" justifyContent="center">
                    <WindowSizeComponent id = {"pip_window_size"} values = {["1920x1080"]} />

                    </Box>
                </Grid>
            </Grid>

            <Grid container  spacing={12} >
            <Grid item xs={6}> <Typography>Default Start Service</Typography> </Grid>
            <Grid item xs={6}>
                    <Box display="flex" justifyContent="center">
                    <WindowSizeComponent id = {"pip_window_size"} values = {["1920x1080"]} />
                    </Box>
                </Grid>
            </Grid>

            <Grid container  spacing={12}>
            <Grid item xs={6}>  <Typography>PiP window Size</Typography> </Grid>
                <Grid item xs={6}> 
                    <Box display="flex" justifyContent="center">

                    <WindowSizeComponent id = {"pip_window_size"} values = {["1920x1080"]} make_appditional={true} />
                    </Box>
                </Grid>
            </Grid>
            
            <Grid container  spacing={12}>
            <Grid item xs={6}>  <Typography>Window Size</Typography> </Grid>
            <Grid item xs={6}>
            <Box display="flex" justifyContent="center">

            <WindowSizeComponent id = {"window_size"} values = {["1920x1080"]} make_appditional={true}/>
            </Box>

            </Grid>
            </Grid>
            <Grid container   justifyContent={"space-between"} spacing={12}>
            <Grid item justifyContent={"space-between"} xs={6}> <Typography>Render Full size when pip is running</Typography> </Grid>
            <Grid item justifyContent={"space-between"} xs={6}>
            <Box display="flex" justifyContent="center">
                <Switch></Switch>
            </Box>
                </Grid>
            </Grid>

            <Grid container  spacing={12}>
            <Grid item xs={6}> <Typography>Enable AutoUpdate</Typography> </Grid>
                <Grid item xs={6}>
                    <Box display="flex" justifyContent="center">
                        <Switch></Switch>
                    </Box>
                </Grid>
            </Grid>


            
            <Grid container  spacing={12}>
            <Grid item xs={6}> 
            <Typography>Dark Mode</Typography> 
            </Grid>
            <Grid item alignContent={"flex-end"} xs={6}>
            <Box display="flex" justifyContent="center">
                <Switch></Switch>
                </Box>

                </Grid>
            </Grid>

        </Grid>
        </Box>
    )
}


export default GeneralPreference;