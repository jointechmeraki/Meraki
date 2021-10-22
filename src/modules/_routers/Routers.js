import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Diary from '../diary/pages/Diary';
import MotivationalVideos from '../motivational-videos/pages/MotivationalVideos';
import { Breathing } from '../breathing/pages/Breathing';
import Profile from '../profile/pages/Profile';
import Home from '../home/Home';
import Auth from '../auth/pages/Auth';

export default function Routers() {
    return (
        <div className="container-navigation">
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/diary" component={Diary} />
                <Route path="/motivacional-videos" component={MotivationalVideos} />
                <Route path="/breathing" component={Breathing.render} />
                <Route path="/profile" component={Profile} />
                <Route path="/auth" component={Auth} />
            </Switch>
        </div>
    );
}
