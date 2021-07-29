const telemetryEvents = [];

export const reportTelemetry = (telemetryObject) => {
    telemetryEvents.push(telemetryObject);
    console.log(telemetryEvents);
};