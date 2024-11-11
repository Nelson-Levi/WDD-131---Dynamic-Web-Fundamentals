export default function successTemplate(info) {
    return `<h2>Thank you ${info.adultName} for registering. You have registered ${info.numberOfParticipants} and owe $${info.totalFees.toFixed(2)} in fees.</h2>`
}