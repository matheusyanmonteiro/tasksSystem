import Fastify, { FastifyInstance } from 'fastify';
import { IncomingMessage, Server, ServerResponse } from 'http';
import { env } from '../env';
import { ping } from './routes';

export const server: FastifyInstance<Server, IncomingMessage, ServerResponse> = Fastify({ logger: true });

server.register(ping);

const start = async () => {
    try {
        await server.listen({port: env.PORT, host: env.HOST});
        const address = server.server.address();
        const port = typeof address === 'string' ? address : address?.port;
        server.log.info(`server listening on ${port}`);
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
}

start();