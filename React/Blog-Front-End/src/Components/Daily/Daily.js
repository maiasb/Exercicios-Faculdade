import React from 'react'

import LollaLogo from '../../Contents/Img/LollaLogo.png'
import RockInRioLogo from '../../Contents/Img/RockInRio.png'
import PinkFloydName from '../../Contents/Img/PinkFloydName.png'
import TheStrokesLogo from '../../Contents/Img/theStrokesLogo.png'
import RadioHeadName from '../../Contents/Img/RadioHeadName.png'

import { DailyItem } from '../DailyItem/DailyItem'

import './Daily.scss'

export function Daily() {
    return (
        <div id='divDaily'>
            <DailyItem
                href="/rockInRio"
                text="Rock in Rio"
                image={RockInRioLogo}
                altDailyImage="RockInRioLogo"
                dailyIgameClassName="rockInRioLogo"
            />
            <DailyItem
                href="/lolla"
                text="Lolla Palooza"
                image={LollaLogo}
                altDailyImage="LollaLogo"
            />
            <DailyItem
                href="/pinkFloyd"
                text="Pink Floyd"
                image={PinkFloydName}
                altDailyImage="PinkFloydName"
            />
            <DailyItem
                href="/theStrokes"
                text="The Strokes"
                image={TheStrokesLogo}
                altDailyImage="RockITheStrokesLogonRioLogo"
                dailyIgameClassName="strokesLogo"
            />
            <DailyItem
                href="/radioHead"
                text="RadioHead"
                image={RadioHeadName}
                altDailyImage="RadioHeadName"
                dailyIgameClassName="radioHeadName"
            />
        </div>
    )
}