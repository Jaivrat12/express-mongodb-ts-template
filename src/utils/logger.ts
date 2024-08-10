import winston from 'winston';
import chalk from 'chalk';

const isDev = process.env.NODE_ENV !== 'production';

const consoleFormat = winston.format.combine(
    winston.format.timestamp({
        format: 'DD MMM, YYYY (HH:mm:ss:ms)',
    }),
    winston.format((info) => {
        info.level = chalk.bold(info.level);
        info.timestamp = chalk.cyan.dim.bold(info.timestamp);
        info.label = chalk.bgHex('#18f').bold(` ${info.label} `);
        return info;
    })(),
    winston.format.cli(),
    winston.format.printf(
        ({ level, message, timestamp, label, ...rest }) => {
            const lines = [`${timestamp} ${level}: ${message}`];
            if (Object.keys(rest).length > 0) {
                lines.push(JSON.stringify(rest, null, 4));
            }
            return lines.join('\n');
        }
    )
);

const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console({
            level: isDev ? 'debug' : 'info',
            format: consoleFormat,
        }),
        new winston.transports.File({
            filename: 'logs/app.log',
        }),
        new winston.transports.File({
            filename: 'logs/error.log',
            level: 'error',
        }),
    ],
});

export default logger;
