import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database';
import { Product } from '../../../models';

type Data = {
    message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'GET':
            return getProducts(req, res);

        default:
            return res.status(400).json({ message: 'Bad Request' })
    }
}


const getProducts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    await db.connect();

    const products = await Product.find().lean();

    await db.disconnect();

    return res.status(400).json({ message: 'Bad Request' })


} 
