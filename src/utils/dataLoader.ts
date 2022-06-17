export async function loadData(): Promise<
  | {
      career: [];
      education: [];
      knowledge: [];
      projects: [];
      qualification: [];
      personal: [];
    }
  | undefined
  | unknown
> {
  const baseUrl = process.env.REACT_APP_DATA_BASE_URL;
  const authToken = process.env.REACT_APP_AUTH_TOKEN;

  if (!baseUrl || !authToken) {
    return undefined;
  }

  const dataFiles = [
    { fileName: 'career.json', dataType: 'career' },
    { fileName: 'education.json', dataType: 'education' },
    { fileName: 'knowledge.json', dataType: 'knowledge' },
    { fileName: 'projects.json', dataType: 'projects' },
    { fileName: 'qualification.json', dataType: 'qualification' },
  ];

  const resultData: Record<string, unknown> = {};

  for (const dataFile of dataFiles) {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set('x-auth-token', authToken);

    // eslint-disable-next-line
    const response = await fetch(baseUrl + dataFile.fileName, {
      method: 'GET',
      headers: requestHeaders,
    });
    // eslint-disable-next-line
    const data = await response.json();

    resultData[dataFile.dataType] = data;
  }

  return resultData;
}
