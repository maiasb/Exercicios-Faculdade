import React from 'react'

import LollaLogo from '../../Contents/Img/LollaLogo.png'
import RockInRioLogo from '../../Contents/Img/RockInRio.png'
import PinkFloydName from '../../Contents/Img/PinkFloydName.png'
import TheStrokesLogo from '../../Contents/Img/theStrokesLogo.png'
import RadioHeadLogo from '../../Contents/Img/RadioHeadLogo.png'

import './index.scss'

export function Diarias() {
    return (
        <div id='divDestaque'>
            <div className='divItem'>
                <a href="/rockInRio">
                    <div className='divTexto'>
                        <p>Rock in Rio</p>
                    </div>
                    <div className='divImage'>
                        <img src={RockInRioLogo} alt="gato" className='rock' />
                    </div>
                </a>
            </div>
            <div className='divItem'>
                <a href="/lolla">
                    <div className='divTexto'>
                        <p>Lolla Palooza</p>
                    </div>
                    <div className='divImage'>
                        <img src={LollaLogo} alt="gato" />
                    </div>
                </a>
            </div>
            <div className='divItem'>
                <a href="/pinkFloyd">
                    <div className='divTexto'>
                        <p>Pink Floyd</p>
                    </div>
                    <div className='divImage'>
                        <img src={PinkFloydName} alt="PinkFloyd" />
                    </div>
                </a>
            </div>
            <div className='divItem Strokes'>
                <a href="/theStrokes">
                    <div className='divTexto'>
                        <p>The Strokes</p>
                    </div>
                    <div className='divImage'>
                        <img src={TheStrokesLogo} alt="TheStrokes" className='Strokes' />
                    </div>
                </a>
            </div>
            <div className='divItem Strokes'>
                <a href="/radioHead">
                    <div className='divTexto'>
                        <p>RadioHead</p>
                    </div>
                    <div className='divImage'>
                        <img src={RadioHeadLogo} alt="RadioHead" className='RadioHead' />
                    </div>
                </a>
            </div>
        </div>
    )
}