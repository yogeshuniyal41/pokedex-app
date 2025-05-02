import { initTRPC } from '@trpc/server';
import { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';

const t = initTRPC.create();

export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;

export const createContext = async (opts: FetchCreateContextFnOptions) => {
  return {};
};

export type Context = Awaited<ReturnType<typeof createContext>>;
