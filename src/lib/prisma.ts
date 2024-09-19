/**
 * O PrismaClient é a principal interface para interagir com o banco de dados, permitindo realizar operações de leitura e escrita (CRUD).
 */
import { PrismaClient } from '@prisma/client'
import { env } from '../env'

export const prisma = new PrismaClient({
    log: env.NODE_ENV === 'development' ? ['query', 'info', 'warn'] : ['warn'],

    /**
     * Se o ambiente não for de desenvolvimento (por exemplo, production),
     * o Prisma registrará apenas avisos ('warn'). Isso ajuda a reduzir a quantidade de logs em ambientes de produção, 
     * onde geralmente você quer menos detalhes e mais foco em problemas.
     */
})