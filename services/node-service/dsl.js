export const log = (...message) => console.log(`[${new Date().toISOString()}]`, ...message)
export const logInfo = (...message) => log("[INFO]", ...message);
export const logError = (...message) => log("[ERROR]", ...message);
export const logEvent = (...message) => log("[EVENT]", ...message);
export const logWelcome = () => logInfo(`Server started listening`);

export const toUrl = (address) => new URL(`${address.protocol}://${address.domain}${address.endpoint}`)
export const withErrorHandling = (func) => {
  return async (...args) => {
    try {
      return await func(...args)
    } catch (error) {
      logError("Caught error", error)
    }
  }
}

export const getJson = async (url) => {
  const respons = await withErrorHandling(fetch)(url);
  if (!respons) return;
  return withErrorHandling(() => respons.json)(); // Ensure respons.json is bound to the correct *this*
}

export const writeJson = (respons, json) => {
  respons.writeHead(200, {"content-type": "application/json"})
  respons.end(JSON.stringify(json))
  return 
}

export const writeNotFound = (respons) => {
  respons.writeHead(404, "Not Found");
  respons.end();
  return respons
}

export const findAddress = (addressBook, path) => addressBook[path] ?? null;

export const createRouter = (addressBook) => (req, res) => sendRespons(req, res, addressBook)

export const terminate = (signal) => {
  logInfo(`Received: ${signal}. Terminating`);
  process.exit(0);
}

export const sendRespons = async (request, respons, addressBook) => {
  logEvent("Request received");
  const { url } = request;
  const address = findAddress(addressBook, url);

  if (!address) {
    logEvent("Address not Found")
    writeNotFound(respons).end()
    return;
  }

  const json = await getJson(toUrl(address))

  writeJson(respons, json);
}
