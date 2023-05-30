import { NextApiRequest, NextApiResponse } from 'next';

export const runMiddleware = (
    req: NextApiRequest,
    res: NextApiResponse,
    middleware: (req: NextApiRequest, res: NextApiResponse, next: Function) => void
) => {
    return new Promise<void>((resolve, reject) => {
        middleware(req, res, (result: any) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
};