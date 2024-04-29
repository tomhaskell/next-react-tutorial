import postgres from 'postgres';

console.log('connecting sql', process.env.POSTGRES_URL);
const sql = postgres(process.env.POSTGRES_URL);

export default sql;
