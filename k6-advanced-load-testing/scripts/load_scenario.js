
import http from 'k6/http';
import { sleep } from 'k6';
import { createHeaders, randomInt } from '../utils/helpers.js';
import env from '../config/env.js';

export const options = {
    scenarios: {
        loadTest: {
            executor: 'constant-vus',
            vus: 50,
            duration: '3m',
        },
        stressTest: {
            executor: 'ramping-arrival-rate',
            startRate: 10,
            timeUnit: '1s',
            preAllocatedVUs: 100,
            maxVUs: 500,
            stages: [
                { target: 100, duration: '2m' },
                { target: 500, duration: '1m' },
            ],
        },
    },
    thresholds: {
        http_req_duration: ['p(95)<500'],
        'http_req_failed': ['rate<0.01'],
    },
};

export default function () {
    const baseUrl = env.development.baseUrl;
    const res = http.get(`${baseUrl}/public/crocodiles/`, createHeaders(null));
    console.log(`Response status: ${res.status}`);
    sleep(randomInt(1, 3)); // Simulate user think time
}
