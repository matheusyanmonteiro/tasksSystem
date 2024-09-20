import { FastifyInstance, FastifyReply, FastifyRequest, RouteShorthandOptions } from "fastify";

const opts: RouteShorthandOptions = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    pong: {
                        type: 'string'
                    }
                }
            }
        }
    }
};

export async function ping(server: FastifyInstance) {
    server.get('/ping', opts, (request: FastifyRequest, reply: FastifyReply) => {
        return ({ pong: 'it worked!' });
    })

}




