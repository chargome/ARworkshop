import {loadHtmlWithSelector} from '../util/loadHtml';
import {createElement} from './createElements';

export const addHtmlPageWithSelector = (selector, pathToHtmlPage) => {
    loadHtmlWithSelector(selector, pathToHtmlPage);
}

export const addHtmlPageWithId = (id, pathToHtmlPage) => {
    createElement("div", "#container", id, "simplar");
    addHtmlPageWithSelector("#" + id, pathToHtmlPage);
}
