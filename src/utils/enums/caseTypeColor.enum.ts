/* Enum Case Type */
export enum caseTypeReport {
    RISK = 'Riesgo',
    ADVERSE_EVENT = 'Evento Adverso',
    INCIDENT = 'Incidente',
    INDICATING_UNSAFE_CARE = 'Indicio de Atención Insegura',
    COMPLICATIONS = 'Complicaciones'
}
export const getColorByCaseType = (type: string) => {
    switch (type) {
        case caseTypeReport.RISK.toUpperCase():
            return 'geekblue'
        case caseTypeReport.ADVERSE_EVENT.toUpperCase():
            return 'green'
        case caseTypeReport.INCIDENT.toUpperCase():
            return 'yellow'
        case caseTypeReport.INDICATING_UNSAFE_CARE.toUpperCase():
            return 'volcano'
        case caseTypeReport.COMPLICATIONS.toUpperCase():
            return 'red'
        default:
            return 'black'
    }
}