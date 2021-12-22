class PushaError extends Error {
    /**
     * @param { String } message
     */
    constructor(message) {
        super(message)
        this.name = "PushaError"
    }
}
module.exports = PushaError;