import React, { useContext } from 'react';
import {HomeNavHeader} from "./HomeNavHeader";
import {HomeStatistics} from "./HomeStatistics";
import {HomeSimpleSteps} from "./HomeSimpleSteps";
import {HomeAbout} from "./HomeAbout";
import {HomeWhoWeHelp} from "./HomeWhoWeHelp";
import {HomeContact} from "./HomeContact";
import { FirebaseContext } from "../index";
import {Logout} from "./Logout";

export const Home = () => {
    const firebase = useContext(FirebaseContext)

    console.log(firebase)
    return (
        <>
            <HomeNavHeader/>
            <HomeStatistics/>
            <HomeSimpleSteps/>
            <HomeAbout/>
            <HomeWhoWeHelp/>
            <HomeContact/>
            {/*<Logout/>*/}
        </>
    );
}