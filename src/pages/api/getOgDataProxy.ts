import axios, { AxiosResponse } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import cheerio from 'cheerio';

interface OpenGraphData {
  [key: string]: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<OpenGraphData>) {
  const { url } = req.query;

  if (!url || typeof url !== 'string') {
    return res.status(400).json({ message: 'URL의 쿼리파라미터가 없습니다.' });
  }

  try {
    const { data }: AxiosResponse<string> = await axios.get(url);
    const $ = cheerio.load(data);
    const ogData: OpenGraphData = {};

    $('meta').each((_, element) => {
      if ($(element).attr('property')?.includes('og:')) {
        const property = $(element).attr('property')?.replace('og:', '') ?? '';
        const content = $(element).attr('content') ?? '';

        ogData[property] = content;
      }
    });

    res.status(200).json(ogData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: '데이터를 가져오는데 실패했습니다.' });
  }
}
