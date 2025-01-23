import { createClient } from 'next-sanity';
import { NextApiRequest, NextApiResponse } from 'next';

import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token: "sk5TTOLSwz6f8WAgrtWWpncml0mXHMgJmPqshAIAGTue45ivj9UIy7l17FUpK7bOAcJQZnH1GiDpfqXgzdVBJ3vtB5wEa0IDmZPA3SYmlh5ldt89ukOGJNntYRnWQnOf4qWKOarkCeSRQG56qgI6kJQ3RwDHWn0Ty8Lmxr0vVucOojFP1RYb"
});

