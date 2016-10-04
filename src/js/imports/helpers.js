export default class Helpers {

    /* ----------------------------------------------------
     * Returns either a JSON.parse'd string
     * or the original value depending on the value given.
     *
     * Helps fix inconsistency between chrome, safari and firefox
     * ---------------------------------------------------- */
    static altJSONParse(data) {
        return typeof data === 'string' ? JSON.parse(data) : data;
    }
}