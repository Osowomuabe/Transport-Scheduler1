import HttpError from '@wasp/core/HttpError.js'

export const createVehicle = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  const { name, status, location } = args;

  const vehicle = await context.entities.Vehicle.create({
    data: {
      name,
      status,
      location,
      user: { connect: { id: context.user.id } }
    }
  });

  return vehicle;
}

export const createDriver = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  const newDriver = await context.entities.Driver.create({
    data: {
      name: args.name,
      status: args.status,
      userId: context.user.id
    }
  });

  return newDriver;
}

export const createReport = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  return context.entities.Report.create({
    data: {
      title: args.title,
      description: args.description,
      userId: context.user.id
    }
  });
}