import { AwsScheduleCron } from './aws-schedule';

const cron = new AwsScheduleCron();
cron.minutes('0');
console.log('expression: ', cron.build());