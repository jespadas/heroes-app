import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    // useMemo makes the re-render only if the publisher has changed
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className="card-columns animate__animated animate__zoomIn">
            {

                heroes.map(hero => (
                    <HeroCard
                        key={hero.id}
                        {...hero}
                    />

                ))

            }
        </div >
    )
}
