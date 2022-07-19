const baseUrl = process.env.REACT_APP_DATA_BASE_URL;
const authToken = process.env.REACT_APP_AUTH_TOKEN;

async function getImageBlobUrl(
  fileName: string,
  requestHeaders: HeadersInit
): Promise<string> {
  const pictureResponse = await fetch(`${baseUrl}${fileName}`, {
    method: 'GET',
    headers: requestHeaders,
  });

  const pictureBlob = await pictureResponse.blob();
  return URL.createObjectURL(pictureBlob);
}

export async function loadData(): Promise<
  | {
      career: [];
      education: [];
      knowledge: [];
      projects: [];
      qualification: [];
      personal: [];
      picture: string;
    }
  | undefined
  | unknown
> {
  if (!baseUrl || !authToken) {
    return undefined;
  }

  const dataFiles = [
    { fileName: 'personal.json', dataType: 'personal' },
    { fileName: 'career.json', dataType: 'career' },
    { fileName: 'education.json', dataType: 'education' },
    { fileName: 'knowledge.json', dataType: 'knowledge' },
    { fileName: 'projects.json', dataType: 'projects' },
    { fileName: 'qualification.json', dataType: 'qualification' },
  ];

  const resultData: Record<string, unknown> = {};

  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set('x-auth-token', authToken);

  for (const dataFile of dataFiles) {
    // eslint-disable-next-line
    const response = await fetch(baseUrl + dataFile.fileName, {
      method: 'GET',
      headers: requestHeaders,
    });
    // eslint-disable-next-line
    const data = await response.json();

    resultData[dataFile.dataType] = data;
  }

  const pictureUrl = await getImageBlobUrl('picture.png', requestHeaders);
  const signatureUrl = await getImageBlobUrl('signature.png', requestHeaders);

  resultData.picture = pictureUrl;
  resultData.signature = signatureUrl;

  return resultData;
}
