import { Action } from '@remix-run/router';
import React from 'react';
import Home from '../pages/Home';
import Actions from '../pages/menu/Actions';
import Deserts from '../pages/menu/Deserts';
import Dops from '../pages/menu/Dops';
import Drink from '../pages/menu/Drink';
import Filadelfiya from '../pages/menu/Filadelfiya';
import Hotandsalats from '../pages/menu/Hotandsalats';
import Kaliforniya from '../pages/menu/Kaliforniya';
import Rolls from '../pages/menu/Rolls';
import Sets from '../pages/menu/Sets';
import ShefRec from '../pages/menu/ShefRec';
import Sups from '../pages/menu/Sups';
import Sushi from '../pages/menu/Sushi';

export const privateroutess=[
    {path: '/home',element:Home,exact:true},
    {path: '/sets',element:Sets,exact:true},
    {path: '/rolls',element:Rolls,exact:true},
    {path: '/filadelfiya',element:Filadelfiya,exact:true},
    {path: '/californiya',element:Kaliforniya,exact:true},
    {path: '/sushi',element:Sushi,exact:true},
    {path: '/deserts',element:Deserts,exact:true},
    {path: '/hotandsalat',element:Hotandsalats,exact:true},
    {path: '/sups',element:Sups,exact:true},
    {path: '/drink',element:Drink,exact:true},
    {path: '/dops',element:Dops,exact:true},
    {path: '/action',element:Actions,exact:true},
    {path: '/shefrec',element:ShefRec,exact:true},
]