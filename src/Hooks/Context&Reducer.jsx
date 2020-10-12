import React, { } from 'react';

import { ShowArea } from './ShowArea'
import { Buttons } from './Button'
import { Color } from './Color'
export const comp = () => {
    return (
        <div>
            <Color>
                <ShowArea />
                <Buttons />
            </Color>
        </div>
    )
}