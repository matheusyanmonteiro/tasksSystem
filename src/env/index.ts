import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
    JWT_SECRET: z.string().default('your'),
    PORT: z.coerce.number().default(3000),
    HOST: z.string().default('localhost'),
})

/**
 * safeParse(process.env): Valida as variáveis de ambiente de acordo com o esquema definido. 
 * Ele retorna um objeto que indica se a validação foi bem-sucedida e, se não, 
 * inclui os erros encontrados.
 */
const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
    console.error('Invalid Environment Variables', _env.error.format());
    throw new Error('invalid Environment Variables.');
}

export const env = _env.data;
/**
 * Esse código é uma maneira robusta de gerenciar variáveis de ambiente em sua aplicação.
 *  Ele garante que todas as variáveis necessárias estejam presentes e sejam do tipo correto antes que a aplicação comece a ser executada, 
 * ajudando a evitar erros de configuração em tempo de execução. Se alguma variável estiver ausente ou inválida, 
 * a aplicação não inicia e fornece informações úteis sobre o que precisa ser corrigido.
 */