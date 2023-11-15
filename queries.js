import HttpError from '@wasp/core/HttpError.js'

export const getVehicles = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  return context.entities.Vehicle.findMany({
    where: {
      user: { id: context.user.id }
    }
  });
}

export const getDrivers = async (args, context) => {
  if (!context.user) { throw new HttpError(401) }

  return context.entities.Driver.findMany({
    where: {
      user: { id: context.user.id }
    }
  });
}

export const getReports = async (args, context) => {
  if (!context.user) { throw new HttpError(401) }

  return context.entities.Report.findMany({
    where: {
      user: { id: context.user.id }
    }
  });
}