import {setArPositionRotation, TYPE_RING} from '../arPositions';
import {init} from '../argonApp';
import './slides.css';
import {CommandHub} from './control/commandHub';
import {slideControl} from './control/SlideControl';

import {demoSlides} from './demoSlides/demoSlides';

export const initSlides = (rootSelector) => {
    new CommandHub();

    const {root} = init();
    const selection = demoSlides(rootSelector);
    selection.each(function (id, i) {
        const object = setArPositionRotation(this, root, TYPE_RING, i, selection.size());
        slideControl.addObject(id, object);
    });
}
