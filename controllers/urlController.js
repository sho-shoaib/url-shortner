import ShortUrl from "../models/shortUrls.js";

export const getUrlShort = async (req, res) => {
  const foundUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
  if (foundUrl === null) return res.status(404);

  foundUrl.clicks++;
  foundUrl.save();

  res.redirect(foundUrl.full);
};
