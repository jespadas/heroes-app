import React from 'react';
import { HeroList } from '../heroes/HeroList';

export const DcScreen = () => {

    const DcHeroes = 'DC Comics';

    return (
        <div>
            <h1>DcScreen</h1>
            <hr />
            <HeroList publisher={DcHeroes} />
        </div>
    )
}
