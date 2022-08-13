import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database';
import { Product } from '../../../models';
import { IProduct } from '../../../interfaces';

type Data =
    | { message: string }
    | IProduct[];

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'GET':
            return getProductsbySearchLabel(req, res);

        default:
            return res.status(401).json({ message: 'Bad Request' });

    }

}
const getProductsbySearchLabel = async (req: NextApiRequest, res: NextApiResponse<Data>) => {


    let { argument = '' } = req.query;

    if (argument.length === 0) {
        return res.status(400).json({ message: 'Especificar el query de busqueda' });
    }
    argument = argument.toString().toLowerCase();

    await db.connect()
    const products = await Product.find({
        $text: { $search: argument }
    })
        .select('title images price inStock slug -_id')
        .lean();
    await db.disconnect()

    return res.status(200).json(products);


}

