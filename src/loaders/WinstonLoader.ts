import {MicroframeworkLoader, MicroframeworkSettings} from 'microframework'
import {configure, format, transports} from 'winston'

const WinstonLoader: MicroframeworkLoader = (settings: MicroframeworkSettings | undefined) => {
    configure({
        transports: [
            new transports.Console({
                level: 'debug',
                handleExceptions: true,
                format:  format.combine(
                        format.colorize(),
                        format.simple()
                    ),
            }),
        ],
    });
}

export default WinstonLoader