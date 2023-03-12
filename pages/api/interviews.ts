import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  data: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const body = req.body
  console.log('body: ', body)

  // Both of these are required.
  if (!body.firstName) {
    return res.status(404).json({ data: 'Name not found' })
  }

  // Found the name.
  res.status(200).json({ data: `${body.firstName} ${body.lastName} ${body.phoneNumber} ${body.emailAddress} ${body.address} ${body.city} ${body.state} ${body.postalCode} ${body.totalSalesExperience} ${body.totalMarketingExperience} ${body.outsideSalesExperience} ${body.positionApplyingFor} ${body.lastPlaceWorked} ${body.hoursAvailablePerWeek} ${body.currentJobTitle} ${body.currentEmployer} ${body.skillSet} ${body.currentSalary} ${body.expectedSalary} ${body.highestEducation} ${body.resume} ${body.additionalInfo}` })
}
