import type { NextApiRequest, NextApiResponse } from 'next'
import {projects} from '../../db/projects'
import {experience} from '../../db/experience'
import {services} from '../../db/services'

interface IData {
  projects:{};
  experience:{};
  services:{};
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IData>
) {
  res.status(200).json({projects,experience,services})
}
