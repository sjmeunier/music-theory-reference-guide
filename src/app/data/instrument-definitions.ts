import { InstrumentRange} from '.';

export abstract class InstrumentDefinitions {
    public static instrumentRanges: InstrumentRange[] = [
        { name: 'Piano', rangeStart: 'A0', rangeEnd: 'C8' },
        { name: 'Celesta', rangeStart: 'C4', rangeEnd: 'C8' },
        { name: 'Harpsichord', rangeStart: 'F1', rangeEnd: 'F6' },
        { name: 'Harmonium', rangeStart: 'F1', rangeEnd: 'F6' },
        { name: 'Violin', rangeStart: 'G3', rangeEnd: 'A7' },
        { name: 'Viola', rangeStart: 'C3', rangeEnd: 'E6' },
        { name: 'Cello', rangeStart: 'C2', rangeEnd: 'C6' },
        { name: 'Double Bass', rangeStart: 'C1', rangeEnd: 'C4' },
        { name: 'Flute (C)', rangeStart: 'C4', rangeEnd: 'D7' },
        { name: 'Alto Flute (G)', rangeStart: 'C4', rangeEnd: 'C7' },
    ];
}